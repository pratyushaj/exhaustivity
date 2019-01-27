var prod_data =[{"card_type":"X","guess_type":"X","nright":148,"nwrong":2,"total":150,"observed_right":0.9867},{"card_type":"X","guess_type":"XandY","nright":10,"nwrong":140,"total":150,"observed_right":0.0667},{"card_type":"X","guess_type":"XorY","nright":145,"nwrong":5,"total":150,"observed_right":0.9667},{"card_type":"X","guess_type":"Z","nright":1,"nwrong":149,"total":150,"observed_right":0.0067},{"card_type":"XY","guess_type":"X","nright":129,"nwrong":21,"total":150,"observed_right":0.86},{"card_type":"XY","guess_type":"XandY","nright":150,"nwrong":0,"total":150,"observed_right":1},{"card_type":"XY","guess_type":"XorY","nright":93,"nwrong":57,"total":150,"observed_right":0.62},{"card_type":"XY","guess_type":"Z","nright":1,"nwrong":149,"total":150,"observed_right":0.0067}] 

var card_types = ['X', 'Y', 'Z', 'XY', 'XZ', 'YZ', 'XYZ'];
var guess_types = ['X', 'Y', 'XorY', 'XandY', 'Z','XorZ','XandZ','YorZ','YandZ','XandYandZ','XorYorZ'];

var cardPrior = function() {
  return uniformDraw(card_types)
};

var cost = function(u) {
  return 1
};

var guessPrior = function() {
  return uniformDraw(guess_types);
};

var literalMeanings = {
  X: function(card) { return card.includes('X'); },
  Y: function(card) { return card.includes('Y'); },
  Z: function(card) { return card.includes('Z'); },
  XorY: function(card) { return card.includes('X') || card.includes('Y'); },
  XandY: function(card) { return card.includes('X') && card.includes('Y'); },
  XorZ: function(card) { return card.includes('X') || card.includes('Z'); },
  XandZ: function(card) { return card.includes('X') && card.includes('Z'); },
  YorZ: function(card) { return card.includes('Y') || card.includes('Z'); },
  YandZ: function(card) { return card.includes('Y') && card.includes('Z'); },
  XorYorZ: function(card) { return card.includes('X') || card.includes('Y') || card.includes('Z'); },
  XandYandZ: function(card) { return card.includes('X') && card.includes('Y') && card.includes('Z'); },
};

var literalListener = cache(function(guess) {
  return Infer({model: function(){
    var card = cardPrior()
    var meaning = literalMeanings[guess]
    condition(meaning(card))    
    return card;
  }})
});

// pragmatic speaker
var speaker = cache(function(card,alpha) {
  return Infer({model: function(){
    var guess = guessPrior()
    factor(alpha * literalListener(guess).score(card))
    return guess;
  }})
}); 

var threshold = function(card,theta,alpha) {
  var supported_guesses_string = speaker(card,alpha).support().toString();
  var supported_guesses = supported_guesses_string.split(',');
  return filter(function(x) { return Math.exp(speaker(card,alpha).score(x)) > theta; }, supported_guesses)
}

var responder = cache(function(guess,card,theta_means,sigma,alpha,samples) {
  return Infer({model:function(){
  if (flip(0.03)) {
    return uniformDraw(["Right","Wrong"]);
  } 
  var theta1 = sample(Gaussian({mu: theta_means[0], sigma: sigma}))
  if (threshold(card,theta1,alpha).includes(guess)) {return "Right"; } 
  else { return "Wrong"; }
}, method: "forward", samples: samples})})

var dataAnalysis2 = function(){
  // prior over model parameter
  var mu_binary_theta1 = uniform({a: 0, b: 1})
  var sigma = uniform({a: 0, b: 1})
  var theta_means = [mu_binary_theta1]
  var alpha = uniform({a: 0, b: 5})
  mapData({data: prod_data}, function(d) {
    var responseDist = responder(d.guess_type, d.card_type, theta_means, sigma, alpha, d.total)
    observe(Binomial({n:d.total, p:Math.exp(responseDist.score("Right"))}), d.nright)
  })
  return {mu_binary_theta1: mu_binary_theta1, sigma: sigma, alpha: alpha};
}

var posterior_samples = Infer({
  method: "MCMC",
  samples: 200, // how many samples to obtain
  burn: 2000,     // number of steps for algorithm to adapt
  lag: 10,
  // verbose: true,
  callbacks: [editor.MCMCProgress()],
  model: dataAnalysis2})

var maxap = (posterior_samples.MAP().val)

var model_posterior = function (item) {
 
var theta_means = [maxap.mu_binary_theta1]
var sigma = maxap.sigma
var alpha = maxap.alpha

return Infer({model:function(){
  if (flip(0.03)) {
    return uniformDraw(["Right","Wrong"]);
  }
  var theta1 = sample(Gaussian({mu: theta_means[0], sigma: sigma}))
  if (threshold(item.card_type,theta1,alpha).includes(item.guess_type)) {return "Right"; } 
  else { return "Wrong"; }
}, 
              method: "forward", 
              samples : item.total
             })

}

var predictions = map(function(d) { 
  var post = model_posterior(d)
  return { 
    card_type: d.card_type,
    guess_type: d.guess_type,
    predicted_right: Math.exp(post.score("Right")),
    predicted_wrong: Math.exp(post.score("Wrong"))} }, 
                      prod_data)

var out = {predictions: predictions, posteriors : posterior_samples}

out 