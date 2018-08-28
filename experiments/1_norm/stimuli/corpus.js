// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]


//For male/female speaker: make default story, replace 

//Implement priors - 8 slides "How X do you think Y are?"

var allStimuli = [

		//competent
		//2 qud, 2 categories, 1 predicate, speakers (male/female)

		//Dems competent, who
		//Dems competent, are
		//Reps competent, who
		//Reps competent, are

		{"Scenario":["eat only a salad for dinner","eat a salad and something else for dinner"]},
        {"Scenario":["go only to the gym after work","go to the gym and somewhere else after work"]},
        {"Scenario":["buy only a pair of sandals at the mall","buy a pair of sandals and something else at the mall"]},
        {"Scenario":["grab only a coffee at the gas station","grab a coffee and something else at the gas station"]},
        {"Scenario":["have only ice cream for dessert","have ice cream and something else for dessert"]},
        {"Scenario":["only lift weights at the gym","lift weights and do something else at the gym"]},
        {"Scenario":["enroll only in a pottery class","enroll in a pottery class and something else"]},
        {"Scenario":["get only a succulent to decorate one's bedroom","get a succulent and something else to decorate one's bedroom"]},
        {"Scenario":["have a mojito at the bar","have a mojito and something else at the bar"]},
        {"Scenario":["plant only tomatoes in the yard","plant tomatoes and something else in the yard"]},
        {"Scenario":["give only a perfume as a birthday gift","give a perfume and something else as a birthday gift"]},
        {"Scenario":["eat only cereal for breakfast","eat cereal and something else for breakfast"]},
        {"Scenario":["cook only a salmon filet for dinner","cook a salmon filet and something else for dinner"]},
        {"Scenario":["buy only a necklace as a Mother's Day gift","buy a necklace and something else as a Mother's Day gift"]},
        {"Scenario":["get only a lipstick at Sephora","get a lipstick and something else at Sephora"]},
        {"Scenario":["speak only to one's partner over the phone","speak to one's partner and someone else over the phone"]},
        {"Scenario":["travel only to San Francisco","travel to San Francisco and somewhere else"]},
        {"Scenario":["purchase only tulips as a housewarming gift","purchase tulips and something else as a housewarming gift"]},
        {"Scenario":["play only Twister at game night","play Twister and something else at game night"]},
        {"Scenario":["send only a fruit basket as an engagement gift","send a fruit basket and something else as an engagement gift"]},
        {"Scenario":["sing only a ballad at karaoke","sing a ballad and something else at karaoke"]},
        {"Scenario":["put only bell peppers on a pizza","put bell peppers and something else on a pizza"]},
        {"Scenario":["watch only Bob's Burgers on television","watch Bob's Burgers and something else on television"]},
        {"Scenario":["swim only freestyle in the pool","swim freestyle and something else in the pool"]},
        {"Scenario":["add only kale to a breakfast smoothie","add kale and something else to a breakfast smoothie"]}

]

var priors = [
	{"Noun":"Democrats","Predicate":"competent","Opposite":"incompetent"},
	{"Noun":"Republicans","Predicate":"competent","Opposite":"incompetent"},
	{"Noun":"men","Predicate":"rational","Opposite":"emotional"},
	{"Noun":"women","Predicate":"rational","Opposite":"emotional"},
	{"Noun":"Europeans","Predicate":"smart","Opposite":"stupid"},
	{"Noun":"people in their 20's","Predicate":"polite","Opposite":"rude"},
	{"Noun":"people in their 50's","Predicate":"polite","Opposite":"rude"},
	{"Noun":"Americans","Predicate":"smart","Opposite":"stupid"}
]

var stimuli = _.shuffle(allStimuli);

var secondStimuli = _.shuffle(priors);

//must be same number of who's and are's 
function makeStims() {
	stims = [];

	are = 0;
	who = 0;

	for (var i = 0; i < allStimuli.length; i++){
		choices = allStimuli[i];
		sampledStim = _.sample(choices);

		if (sampledStim.QUD == 'who'){

			if (who < 2){
				stims.push(sampledStim);
				who++;
			}
			else
			{
				while (sampledStim.QUD!='are')
				{
					sampledStim = _.sample(choices);
				}
				stims.push(sampledStim);
				are++;
			}
		}

		else if (sampledStim.QUD == 'are'){

			if (are < 2){
				stims.push(sampledStim);
				are++;
			}
			else
			{
				while (sampledStim.QUD =='are')
				{
					sampledStim = _.sample(choices);
				}
				stims.push(sampledStim);
				who++;
			}
		}
	}

	return stims;
	
}
