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

		{"Story":["polar;When they met up last week, NAME and PRONOUN friend decided to find the best ice cream at the grocery store. They have plans to meet up again today. Upon meeting, PRONOUN friend asks PRONOUN what SUBJPRONOUN had for dessert.","exhaustive;NAME and PRONOUN friend both really like dessert, and they have plans to meet up today. Upon meeting, PRONOUN friend asks PRONOUN what SUBJPRONOUN had for dessert."],"Polar":"Whether or not NAME had ice cream for dessert","Exhaustive":"All of the things that NAME had for dessert"},
		{"Story":["polar;When NAME and her friend had lunch last week, they resolved to reach out to their signWhether or noticant others more often. They are going to have lunch together again today. When they arrive at the restaurant, her friend asks who she's been in touch with today.","exhaustive;NAME and her friend both enjoy talking on the phone to their friends and loved ones, and are going to have lunch together. When they arrive at the restaurant, her friend asks who she's been in touch with today."],"Polar":"Whether or not NAME spoke to her partner on the phone","Exhaustive":"All of the people that NAME spoke to on the phone"},
		{"Story":["polar;The last time Diane and her friend got together, they made a pact that they would visit San Francisco before they saw each other again. They are having a drink together again today. When they reach the bar, her friend asks where she's traveled to lately.","exhaustive;Diane and her friend absolutely love to travel, and they are having a drink together today. When they reach the bar, her friend asks where she's traveled to lately."],"Polar":"Whether or not NAME traveled to San Francisco","Exhaustive":"All of the places that NAME traveled to"},
		{"Story":["polar;The last time Carol and her friend hung out, they decided they would sign up for a pottery class by time time they met up next. They are eating dinner together today. Once they turn up at the restaurant, her friend asks what classes she's signed up for recently.","exhaustive;Carol and her friend are both fond of taking classes outside of work, and they are eating dinner together today. Once they turn up at the restaurant, her friend asks what classes she's signed up for recently."],"Polar":"Whether or not NAME signed up for a pottery class","Exhaustive":"All of the classes that NAME signed up for"},
		{"Story":["polar;At Lauren and her friend's last meetup, they agreed to eat cereal for breakfast more often. They are planning on going for a hike today. At the trailhead, her friend asks her what she ate for breakfast.","exhaustive;Lauren and her friend both prefer breakfast to any other meal, and they're planning on going for a hike today. At the trailhead, her friend asks her what she ate for breakfast."],"Polar":"Whether or not NAME had cereal for breakfast","Exhaustive":"All of the things that NAME had for breakfast"},
		{"Story":["polar;When Brittany and her friend worked out together last, they concluded that they next birthday gift they each bought would be a perfume. They are going to work out together today. At the gym entrance, her friend asks what she bought her sister for her birthday.","exhaustive;Brittany and her friend both really enjoy giving their loved ones birthday gifts, and they are going to work out together today. At the gym entrance, her friend asks what she bought her sister for her birthday."],"Polar":"Whether or not NAME bought PRONOUN sister a perfume for her birthday","Exhaustive":"All of the things that NAME bought PRONOUN sister for her birthday"},
		{"Story":["polar;When they last saw each other, Jessica and her friend made a list of classic karaoke ballads and decided that the next time they each went to karaoke, they would sing a song from that list. They are having a glass of wine at Jessica's place today.  Upon arriving at Jessica's, her friend asks her what she sang at karaoke the other night.","exhaustive;Jessica and her friend both love to sing karaoke, and they're having a glass of wine at Lauren's place today. Upon arriving at Jessica's, her friend asks her what she sang at karaoke the other night."],"Polar":"Whether or not NAME sang a ballad at karaoke","Exhaustive":"All of the songs that NAME sang at karaoke"},
		{"Story":["polar;When they hung out the other day, Brenda and her friend resolved to discover the best gas station coffee by the time they next hung out. They are going shopping at the mall together today. Once they meet at the mall entrance, her friend asks her what she picked up the last time she went to the gas station.","exhaustive;Brenda and her friend both have an unexpected love of gas station snacks and drinks, and they are going shopping at the mall together today. Once they meet at the mall entrance, her friend asks her what she picked up the last time she went to the gas station."],"Polar":"Whether or not NAME grabbed a coffee at the gas station","Exhaustive":"All of the things that NAME grabbed at the gas station"},
		{"Story":["polar;Maria and her friend decided when they met up last week that since freestyle is the most efficient swimming stroke, they would both swim more freestyle in their swimming workouts this week. They have plans to go to the beach together today. Once they finish laying out their towels, her friend asks her what strokes she swam the last time she went to the pool.","exhaustive;Maria and her friend are both avid swimmers, and they have plans to go to the beach together today. Once they finish laying out their towels, her friend asks her what strokes she swam the last time she went to the pool."],"Polar":"Whether or not NAME swam freestyle at the pool","Exhaustive":"All of the strokes that NAME swam at the pool"},
		{"Story":["polar;Jennifer and her friend agreed when they spent time together last week that they would lift weights more often at the gym this coming week. They are meeting up to have coffee today. When they get a table at the coffee shop, her friend asks her what she did at the gym last time she went.","exhaustive;Jennifer and her friend both frequent the gym, and they're meeting up to have coffee today. When they get a table at the coffee shop, her friend asks her what she did at the gym last time she went."],"Polar":"Whether or not NAME lifted weights at the gym","Exhaustive":"All of the things that NAME did at the gym"},
		{"Story":["polar;When Brittany and her friend last went thrift shopping together, they agreed that the next housewarming gift they bought for a friend would be tulips. They are about to go thrift shopping togerher. At the first thrift shop, her friend asks what she bought her cousin for her recent housewarming.","exhaustive;Brittany and her friend both strongly believe in giving their loved ones housewarming gifts, and they are about to go thrift shopping together. At the first thrift shop, her friend asks what she bought her cousin for her recent housewarming."],"Polar":"Whether or not NAME bought tulips as a housewarming gift","Exhaustive":"All of the things that NAME bought as a housewarming gift"},
		{"Story":["polar;Ariana and her friend resolved at their last hangout that the next engagement gift they each sent to a loved one would be a fruit basket. They are about to buy houseplants together. Upon reaching the nursery, her friend asks what she sent her college roommate for her recent engagement.","exhaustive;Ariana and her friend both have a policy of giving not only wedding gifts, but also engagement gifts to their loved ones who are getting married. They will be meeting later today to buy houseplants together. Upon reaching the nursery, her friend asks what she sent her college roommate for her recent engagement."],"Polar":"Whether or not NAME sent her college roommate a fruit basket as an engagement gift","Exhaustive":"All of the things that NAME sent her college roommate as an engagement gift"},
		{"Story":["polar;Melissa and her friend agreed to go to the gym after work more often as part of the health kick they started together last week. They are meeting at happy hour today. At the bar, her friend asks where she went after work yesterday.","exhaustive;Melissa and her friend both consider themselves \"movers and shakers,\" and they always make plans for after work. They're meeting at happy hour today. At the bar, her friend asks where she went after work yesterday."],"Polar":"Whether or not NAME went to the gym after work","Exhaustive":"All of the places that NAME went to after work"},
		{"Story":["polar;Sarah and her friend agreed to add kale to their morning breakfast smoothies more often as part of the healthy eating bender they started together last week. They have plans to go for a walk this morning before work. Upon meeting, her friend asks what she added to her breakfast smoothie.","exhaustive;Sarah and her friend are both very health-conscious, and they start every day with a homemade breakfast smoothie. They have plans to go for a walk this morning before work. Upon meeting, her friend asks what she added to her breakfast smoothie."],"Polar":"Whether or not NAME added kale to PRONOUN breakfast smoothie","Exhaustive":"All of the things that NAME added to her breakfast smoothie"},
		{"Story":["polar;Jacqueline and her friend decided to put bell peppers more often into their meals when they met up last week. They intend to watch a movie at Jacqueline's house together today. Her friend arrives at Jacqueline's, and then asks what she put on her pizza.","exhaustive;Jacqueline and her friend are both huge fans of pizza, and they intend to watch a movie at Jacqueline's house together today. her friend arrives at Jacqueline's, and then asks what she put on her pizza."],"Polar":"Whether or not NAME put bell peppers on her pizza","Exhaustive":"All of the things that NAME put on her pizza"},
		{"Story":["polar;Carolyn and her friend both realized when they had lunch the other day that they should plant tomatoes in their yards by the next time they meet. They are going for a bike ride together this afternoon. As they unlock and get onto their bikes, her friend asks what she planted in the yard.","exhaustive;Carolyn and her friend are both big gardening enthusiasts, and they are going for a bike ride together this afternoon. As they unlock and get onto their bikes, her friend asks what she planted in the yard."],"Polar":"Whether or not NAME planted tomatoes in the yard","Exhaustive":"All of the things that NAME planted in the yard"},
		{"Story":["polar;When Cassandra and her friend went for a hike last week, they set out to find the best pre-made salad at the grocery store this week. They have plans to meet up today. Upon meeting, her friend asks her what she ate for dinner.","exhaustive;Cassandra and her friend both think dinner is the best meal of the day, and they have plans to meet up today. Upon meeting, her friend asks her what she ate for dinner."],"Polar":"Whether or not NAME had ice cream for dessert","Exhaustive":"All of the things that NAME had for dessert"},
		{"Story":["polar;Amanda and her friend both agreed that their lipstick collections needed refreshing when they had a drink together the other evening, and resolved to each buy a new one by the next time they saw each other. They are running errands together today. When they first meet up at the car wash, her friend asks what she got the last time she went to Sephora.","exhaustive;Amanda and her friend are both major makeup enthusiasts, and they are running errands together today. When they first meet up at the car wash, her friend asks what she got the last time she went to Sephora."],"Polar":"Whether or not NAME got a lipstick at Sephora","Exhaustive":"All of the things that NAME got at Sephora"},
		{"Story":["polar;Madeline and her friend both agreed that they both needed to add a pair of sandals to their shoe collections when they went hiking last week, and resolved to each buy a new pair before they hung out next. They are planning on watching a movie together tonight. Outside the movie theater, her friend asks what she's bought recently.","exhaustive;Madeline and her friend both really love shoes,  and they are planning on watching a movie together tonight. Outside the movie theater, her friend asks what she's bought recently."],"Polar":"Whether or not NAME has bought a pair of sandals","Exhaustive":"All of the things that NAME has bought"},
		{"Story":["polar;When Anne and her friend had dinner last week, they both decided to cook salmon at least once before seeing each other next, since it is easy to make and very healthy. They are going to the farmer's market this morning. As they head into the farmer's market, her friend asks what she cooked for dinner.","exhaustive;Anne and her friend both highly prioritize cooking meals over eating out, and they are going to the farmer's market this morning. As they head into the farmer's market, her friend asks what she cooked for dinner."],"Polar":"Whether or not NAME cooked a salmon filet for dinner","Exhaustive":"All of the things that NAME cooked for dinner"}
]

var names = _.shuffle([
    {"NAME":"Michael","PRONOUN":"his", 'SUBJPRONOUN':'he'}, 
    {"NAME":"Christopher","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Matthew","PRONOUN":"his", 'SUBJPRONOUN':'he'}, 
    {"NAME":"Joshua","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Jacob","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Nicholas","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Andrew","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Daniel","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Tyler","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Joseph","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Brandon","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"David","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"James","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Ryan","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"John","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Zach","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Justin","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Will","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Anthony","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Robert","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Austin","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Aaron","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Christian","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Samuel","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Dylan","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Steven","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Brian","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Jose","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Adam","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Rick","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Patric","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Charles","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Sean","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Jason","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Cameron","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Jeremy","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Mark","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Juan","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Travis","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Jeff","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Ethan","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Caleb","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Luis","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Jared","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Logan","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Hunter","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Trevor","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Evan","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Paul","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Kenneth","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Connor","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Dustin","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Noah","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Carlos","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Devin","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Gabriel","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Ian","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Greg","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Derek","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Corey","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Scott","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Bradley","PRONOUN":"his", 'SUBJPRONOUN':'he'},
    {"NAME":"Jessica","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Miranda","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Savannah","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Angela","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Jenna","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Shannon","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Kathryn","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Jacqueline","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Destiny","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Lindsey","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Katie","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Gabrielle","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Cassandra","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Paige","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Crystal","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Amy","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Marissa","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Kristen","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Kelly","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Erica","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Vanessa","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Emma","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Julia","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Brooke","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Natalie","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Andrea","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Erin","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Laura","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Kaitlyn","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Maria","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Haley","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Heather","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Abigail","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Allison","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Christina","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Mary","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Olivia","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Tiffany","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Kim","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Anna","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Chelsea","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Kelsey","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Michelle","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Melissa","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Morgan","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Madison","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Alexandra","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Katherine","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Brianna","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Jasmine","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Danielle","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Rebecca","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Courtney","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Alyssa","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Amber","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Victoria","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Alexis","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Nicole","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Jennifer","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Rachel","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Stephanie","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Lauren","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Kayla","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Hannah","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Megan","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Elizabeth","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Brittany","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Amanda","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Samantha","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Sarah","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Emily","PRONOUN":"her", 'SUBJPRONOUN':'she'},
    {"NAME":"Ashley","PRONOUN":"her", 'SUBJPRONOUN':'she'}
  ]);

var stimuli = _.shuffle(makeStims());

//var secondStimuli = _.shuffle(priors);

//must be same number of who's and are's 
function makeStims() {
	stims = [];

	polar = 0;
	exhaustive = 0;

	for (var i = 0; i < allStimuli.length; i++){
	//push every stim, only difference is which story gets pushed, each story has to have pronouns/nouns plugged in
	//need to draw a name and replace NAME, PRONOUN, SUBJPRONOUN for story, polar, and exhaustive answer choices 
		currStim = allStimuli[i];
		storyChoices = allStimuli[i].Story;
		sampledChoice = _.sample(storyChoices);
		qud = sampledChoice.split(";")[0];
		story = sampledChoice.split(";")[1];
		polarChoice = currStim.Polar;
		exhaustiveChoice = currStim.Exhaustive;

		//picking a story
		if (qud == 'polar'){

			if (polar < 20){
				//stims.push(sampledStim);
				polar++;
			}
			else
			{
				while (qud !='exhaustive')
				{
					sampledChoice = _.sample(storyChoices);
					qud = sampledChoice.split(";")[0];
					story = sampledChoice.split(";")[1];
				}
				//stims.push(sampledStim);
				exhaustive++;
			}
		}

		else if (qud == 'exhaustive'){

			if (exhaustive < 20){
				//stims.push(sampledStim);
				exhaustive++;
			}
			else
			{
				while (qud !='polar')
				{
					sampledChoice = _.sample(storyChoices);
					qud = sampledChoice.split(";")[0];
					story = sampledChoice.split(";")[1];
				}
				//stims.push(sampledStim);
				exhaustive++;
			}
		}

		//plugging in a name and pronouns to the story and the polar/exhaustive answer choices
		name = _.sample(names);
		story = story.replace('NAME',name.NAME).replace('PRONOUN',name.PRONOUN).replace('SUBJPRONOUN',name.SUBJPRONOUN);
		polarChoice = polarChoice.replace('NAME',name.NAME).replace('PRONOUN',name.PRONOUN).replace('SUBJPRONOUN',name.SUBJPRONOUN);
		exhaustiveChoice = exhaustiveChoice.replace('NAME',name.NAME).replace('PRONOUN',name.PRONOUN).replace('SUBJPRONOUN',name.SUBJPRONOUN);
		
		//pushing stim 
		stims.push({"Story":story,"QUD":qud,"Polar":polarChoice,"Exhaustive":exhaustiveChoice});
	}

	return stims;
	
}
