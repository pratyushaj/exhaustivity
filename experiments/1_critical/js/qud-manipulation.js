//THINGS TO DO:
//LEFT ALIGN RADIO BUTTONS 
//MAKE SURE STIMULI ARE CORRECT (IN NUMBER AND VERB AGREEMENT, STIM VERSUS RESPONSE STATEMENTS)



function make_slides(f) {
  var   slides = {};

  slides.captcha = slide({
    name : "captcha",
  });

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1qud = slide({
    name : "instructions1qud",
    start: function() {
      $(".instruction_condition").html("Between subject instruction manipulation: "+ exp.instruction);
      //$(".header").html("instructions1");
    }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions1exhaustivity = slide({
    name : "instructions1exhaustivity",
    start: function() {
      $(".instruction_condition").html("Between subject instruction manipulation: "+ exp.instruction);
      //$(".header").html("instructions1");
    }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.qud = slide({
    name : "qud",
    present : stimuli,
    present_handle : function(stim) {

      //hiding comprehension question error messages, critical sliders
      //$(".comprehension").show();
      $(".err2").hide();
      /*$(".no_response").hide();
      $(".critical").hide();*/
      $("input[type=radio]").attr("checked", null);

      //create 2 sliders per trial, both set to null on first presentation
      //this.init_sliders(); 
      //exp.sliderPost1 = null;

      //number of answers to comprehension question wrong so far, initialized to 0
      //wrong = 0;
     
      //getting access to stimuli
      this.stim = stim; //FRED: allows you to access stim in helpers
      
      /*var pos = stim.POS

      $(".crit_noun").html((stim.CritNoun));
      $(".other_noun").html((stim.OtherNoun));
      $(".predicate").html((stim.Predicate));
      $(".opposite").html((stim.Opposite));
      $(".statement").html(stim.Statement);
      $(".cover_story").html(stim.CoverStory);

      //gymnastics related to comprehension question 
      parts = (stim.Comprehension).split('/');
      $(".boss").html(parts[0]);
      $(".group").html(parts[1]);

      //gymnastics related to critical trials 
      words = (stim.CoverStory).split(' ');
      $(".speaker").html(words[0]);*/

      //answer choices
      $(".exhaustive").html((stim.Exhaustive));
      $(".polar").html((stim.Polar));

      //story
      $(".story").html((stim.Story));

      //name
      $(".name").html((stim.Name));

		  //this.n_sliders = 1;

    },

    button_critical : function() {
      var checked_radio  = $('input[name="response"]:checked');
      if (checked_radio.val() != undefined) 
      {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } else 
      {
        $(".err2").show();
      }
    },

    init_sliders : function() {
      utils.make_slider("#slider0", function(event, ui) {
        exp.sliderPost1 = ui.value;
      });

    },
//    make_slider_callback : function(i) {
//      return function(event, ui) {
//        exp.sliderPost[i] = ui.value;
//      };
//    },
    log_responses : function() {
      //var str = this.stim.Scenario[0];
      //var scenario = str.replace("only ", "");
        exp.data_trials.push({
          "response" : $('input[name="response"]:checked').val(),
          "qud":this.stim.QUD,
          "story":this.stim.Story,
          "scenario" : this.stim.Scenario,
          "trial_type":this.stim.TrialType,
          "topic":this.stim.Topic,
          "slide_number" : exp.phase,
          "block":"qud_assessment"
        });
    },
  });

slides.instructions2qud = slide({
    name : "instructions2qud",
    start: function() {
      $(".instruction_condition").html("Between subject instruction manipulation: "+ exp.instruction);
      //$(".header").html(slides.instructions1.name);
    }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

slides.instructions2exhaustivity = slide({
    name : "instructions2exhaustivity",
    start: function() {
      $(".instruction_condition").html("Between subject instruction manipulation: "+ exp.instruction);
      //$(".header").html(slides.instructions1.name);
    }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.exhaustivity = slide({
    name : "exhaustivity",
    present : secondStimuli,
    present_handle : function(stim) {

      //hiding comprehension question error messages, critical sliders
      //$(".comprehension").show();
      $(".err").hide();
      /*$(".no_response").hide();
      $(".critical").hide();*/
      //$("input[type=radio]").attr("checked", null);

      //create 2 sliders per trial, both set to null on first presentation
      this.init_sliders(); 
      exp.sliderPost1 = null;

      //number of answers to comprehension question wrong so far, initialized to 0
      //wrong = 0;
     
      //getting access to stimuli
      this.stim = stim; //FRED: allows you to access stim in helpers
      
      /*var pos = stim.POS

      $(".crit_noun").html((stim.CritNoun));
      $(".other_noun").html((stim.OtherNoun));
      $(".predicate").html((stim.Predicate));
      $(".opposite").html((stim.Opposite));
      $(".statement").html(stim.Statement);
      $(".cover_story").html(stim.CoverStory);

      //gymnastics related to comprehension question 
      parts = (stim.Comprehension).split('/');
      $(".boss").html(parts[0]);
      $(".group").html(parts[1]);

      //gymnastics related to critical trials 
      words = (stim.CoverStory).split(' ');
      $(".speaker").html(words[0]);*/

      //answer choices
      $(".left_slider").html((stim.leftSlider));
      $(".right_slider").html((stim.rightSlider));

      //story
      $(".story").html((stim.Story));

      //utterance
       $(".scenario").html((stim.Scenario));

      //critical question 
      if (stim.TrialType == "pronounFiller" || stim.TrialType == 'distributiveFiller'){
        $(".question").html((stim.Question));

      }
      else{
        $(".question").html(("How likely is it that "+stim.Name+"..."));
      }


      $(".name").html((stim.Name));

      //this.n_sliders = 1;

    },

    button_critical : function() {
      //var checked_radio  = $('input[name="response"]:checked');
      if (exp.sliderPost1 != null) 
      {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } 
      else 
      {
        $(".err").show();
      }
    },

    init_sliders : function() {
      utils.make_slider("#slider0", function(event, ui) {
        exp.sliderPost1 = ui.value;
      });

    },
//    make_slider_callback : function(i) {
//      return function(event, ui) {
//        exp.sliderPost[i] = ui.value;
//      };
//    },
    log_responses : function() {
      //var str = this.stim.Scenario[0];
      //var scenario = str.replace("only ", "");
        exp.data_trials.push({
          "response" : exp.sliderPost1,
          "qud":this.stim.QUD,
          "story":this.stim.Story,
          "scenario" : this.stim.Scenario,
          "trial_type":this.stim.TrialType,
          "topic":this.stim.Topic,
          "slide_number" : exp.phase,
          "block":"exhaustivity"
        });
    },
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  exp.trials = [];
  exp.catch_trials = [];
  exp.instruction = _.sample(["instruction1","instruction2"]);
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
  //NEED TO RE-ADD "CAPTCHA"
    
  crits = _.shuffle(['qud','exhaustivity']);

  exp.structure=["i0", 'instructions1',crits[0], 'instructions2',crits[1], "subj_info",'thanks'];

  if (crits[0] == 'qud'){
    exp.structure[1] = 'instructions1qud'
    exp.structure[3] = 'instructions2exhaustivity'
  }
  else{
    exp.structure[1] = 'instructions1exhaustivity'
    exp.structure[3] = 'instructions2qud'
  }
  
  exp.data_trials = [];
  //make corresponding slides:

  exp.slides = make_slides(exp);

  exp.nQs = 49;//

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
