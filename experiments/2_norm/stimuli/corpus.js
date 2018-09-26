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

    {"Story":["polar;When they met up last week, NAME and PRONOUN friend decided to find the best ice cream at the grocery store. They have plans to meet up again today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN had for dessert.","exhaustive;NAME and PRONOUN friend both really like dessert, and they have plans to meet up today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN had for dessert."],"Polar":"Whether or not NAME had ice cream for dessert","Exhaustive":"All of the things that NAME had for dessert", "Scenario":"I had ice cream for dessert.","TrialType":"critical"},
	{"Story":["polar;When NAME and PRONOUN friend had lunch last week, they resolved to reach out to their significant others more often. They are going to have lunch together again today. When they arrive at the restaurant, PRONOUN friend asks who SUBJPRONOUN's been in touch with today.","exhaustive;NAME and PRONOUN friend both enjoy talking on the phone to their friends and loved ones, and are going to have lunch together. When they arrive at the restaurant, PRONOUN friend asks who SUBJPRONOUN's been in touch with today."],"Polar":"Whether or not NAME spoke to PRONOUN partner on the phone","Exhaustive":"All of the people that NAME spoke to on the phone","Scenario":"I spoke to my partner on the phone.","TrialType":"critical"},
	{"Story":["polar;The last time NAME and PRONOUN friend got together, they made a pact that they would visit San Francisco before they saw each other again. They are having a drink together again today. When they reach the bar, PRONOUN friend asks where SUBJPRONOUN's traveled to lately.","exhaustive;NAME and PRONOUN friend absolutely love to travel, and they are having a drink together today. When they reach the bar, PRONOUN friend asks where SUBJPRONOUN's traveled to lately."],"Polar":"Whether or not NAME traveled to San Francisco","Exhaustive":"All of the places that NAME traveled to","Scenario":"I traveled to San Francisco.","TrialType":"critical"},
	{"Story":["polar;The last time NAME and PRONOUN friend hung out, they decided they would sign up for a pottery class by time time they met up next. They are eating dinner together today. Once they turn up at the restaurant, PRONOUN friend asks what classes SUBJPRONOUN's signed up for recently.","exhaustive;NAME and PRONOUN friend are both fond of taking classes outside of work, and they are eating dinner together today. Once they turn up at the restaurant, PRONOUN friend asks what classes SUBJPRONOUN's signed up for recently."],"Polar":"Whether or not NAME signed up for a pottery class","Exhaustive":"All of the classes that NAME signed up for","Scenario":"I signed up for a pottery class.","TrialType":"critical"},
	{"Story":["polar;At NAME and PRONOUN friend's last meetup, they agreed to eat cereal for breakfast more often. They are planning on going for a hike today. At the trailhead, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for breakfast.","exhaustive;NAME and PRONOUN friend both prefer breakfast to any other meal, and they're planning on going for a hike today. At the trailhead, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for breakfast."],"Polar":"Whether or not NAME had cereal for breakfast","Exhaustive":"All of the things that NAME had for breakfast", "Scenario":"I had cereal for breakfast","TrialType":"critical"},
	{"Story":["polar;When NAME and PRONOUN friend worked out together last, they concluded that they next birthday gift they each bought would be a perfume. They are going to work out together today. At the gym entrance, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN sister for PRONOUN birthday.","exhaustive;NAME and PRONOUN friend both really enjoy giving their loved ones birthday gifts, and they are going to work out together today. At the gym entrance, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN sister for PRONOUN birthday."],"Polar":"Whether or not NAME bought PRONOUN sister a perfume for PRONOUN birthday","Exhaustive":"All of the things that NAME bought PRONOUN sister for PRONOUN birthday","Scenario":"I gave my sister a perfume as a birthday gift.","TrialType":"critical"},
	{"Story":["polar;When they last saw each other, NAME and PRONOUN friend made a list of classic karaoke ballads and decided that the next time they each went to karaoke, they would sing a song from that list. They are having a glass of wine at NAME's place today.  Upon arriving at NAME's, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN sang at karaoke the other night.","exhaustive;NAME and PRONOUN friend both love to sing karaoke, and they're having a glass of wine at NAME's place today. Upon arriving at NAME's, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN sang at karaoke the other night."],"Polar":"Whether or not NAME sang a ballad at karaoke","Exhaustive":"All of the songs that NAME sang at karaoke","Scenario":"I sang a ballad at karaoke.","TrialType":"critical"},
	{"Story":["polar;When they hung out the other day, NAME and PRONOUN friend resolved to discover the best gas station coffee by the time they next hung out. They are going shopping at the mall together today. Once they meet at the mall entrance, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN picked up the last time SUBJPRONOUN went to the gas station.","exhaustive;NAME and PRONOUN friend both have an unexpected love of gas station snacks and drinks, and they are going shopping at the mall together today. Once they meet at the mall entrance, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN picked up the last time SUBJPRONOUN went to the gas station."],"Polar":"Whether or not NAME grabbed a coffee at the gas station","Exhaustive":"All of the things that NAME grabbed at the gas station","Scenario":"I grabbed a coffee at the gas station.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend decided when they met up last week that since freestyle is the most efficient swimming stroke, they would both swim more freestyle in their swimming workouts this week. They have plans to go to the beach together today. Once they finish laying out their towels, PRONOUN friend asks OBJPRONOUN what strokes SUBJPRONOUN swam the last time SUBJPRONOUN went to the pool.","exhaustive;NAME and PRONOUN friend are both avid swimmers, and they have plans to go to the beach together today. Once they finish laying out their towels, PRONOUN friend asks OBJPRONOUN what strokes SUBJPRONOUN swam the last time SUBJPRONOUN went to the pool."],"Polar":"Whether or not NAME swam freestyle at the pool","Exhaustive":"All of the strokes that NAME swam at the pool","Scenario":"I swam freestyle in the pool.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend agreed when they spent time together last week that they would lift weights more often at the gym this coming week. They are meeting up to have coffee today. When they get a table at the coffee shop, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN did at the gym last time SUBJPRONOUN went.","exhaustive;NAME and PRONOUN friend both frequent the gym, and they're meeting up to have coffee today. When they get a table at the coffee shop, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN did at the gym last time SUBJPRONOUN went."],"Polar":"Whether or not NAME lifted weights at the gym","Exhaustive":"All of the things that NAME did at the gym","Scenario":"I lifted weights at the gym.","TrialType":"critical"},         
	{"Story":["polar;When NAME and PRONOUN friend last went thrift shopping together, they agreed that the next housewarming gift they bought for a friend would be tulips. They are about to go thrift shopping togerher. At the first thrift shop, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN cousin for PRONOUN recent housewarming.","exhaustive;NAME and PRONOUN friend both strongly believe in giving their loved ones housewarming gifts, and they are about to go thrift shopping together. At the first thrift shop, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN cousin for PRONOUN recent housewarming."],"Polar":"Whether or not NAME bought tulips as a housewarming gift","Exhaustive":"All of the things that NAME bought as a housewarming gift","Scenario":"I purchased tulips as a housewarming gift.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend resolved at their last hangout that the next engagement gift they each sent to a loved one would be a fruit basket. They are about to buy houseplants together. Upon reaching the nursery, PRONOUN friend asks what SUBJPRONOUN sent PRONOUN college roommate for PRONOUN recent engagement.","exhaustive;NAME and PRONOUN friend both have a policy of giving not only wedding gifts, but also engagement gifts to their loved ones who are getting married. They will be meeting later today to buy houseplants together. Upon reaching the nursery, PRONOUN friend asks what SUBJPRONOUN sent PRONOUN college roommate for PRONOUN recent engagement."],"Polar":"Whether or not NAME sent PRONOUN college roommate a fruit basket as an engagement gift","Exhaustive":"All of the things that NAME sent PRONOUN college roommate as an engagement gift","Scenario":"I sent a fruit basket as an engagement gift.","TrialType":"critical"},         
	{"Story":["polar;NAME and PRONOUN friend agreed to go to the gym after work more often as part of the health kick they started together last week. They are meeting at happy hour today. At the bar, PRONOUN friend asks where SUBJPRONOUN went after work yesterday.","exhaustive;NAME and PRONOUN friend both consider themselves \"movers and shakers,\" and they always make plans for after work. They're meeting at happy hour today. At the bar, PRONOUN friend asks where SUBJPRONOUN went after work yesterday."],"Polar":"Whether or not NAME went to the gym after work","Exhaustive":"All of the places that NAME went to after work","Scenario":"I went to the gym after work.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend agreed to add kale to their morning breakfast smoothies more often as part of the healthy eating bender they started together last week. They have plans to go for a walk this morning before work. Upon meeting, PRONOUN friend asks what SUBJPRONOUN added to PRONOUN breakfast smoothie.","exhaustive;NAME and PRONOUN friend are both very health-conscious, and they start every day with a homemade breakfast smoothie. They have plans to go for a walk this morning before work. Upon meeting, PRONOUN friend asks what SUBJPRONOUN added to PRONOUN breakfast smoothie."],"Polar":"Whether or not NAME added kale to PRONOUN breakfast smoothie","Exhaustive":"All of the things that NAME added to PRONOUN breakfast smoothie","Scenario":"I added kale to a breakfast smoothie.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend decided to put bell peppers more often into their meals when they met up last week. They intend to watch a movie at NAME's house together today. PRONOUN friend arrives at NAME's, and then asks what SUBJPRONOUN put on PRONOUN pizza.","exhaustive;NAME and PRONOUN friend are both huge fans of pizza, and they intend to watch a movie at NAME's house together today. PRONOUN friend arrives at NAME's, and then asks what SUBJPRONOUN put on PRONOUN pizza."],"Polar":"Whether or not NAME put bell peppers on PRONOUN pizza","Exhaustive":"All of the things that NAME put on PRONOUN pizza","Scenario":"I put bell peppers on a pizza.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend both realized when they had lunch the other day that they should plant tomatoes in their yards by the next time they meet. They are going for a bike ride together this afternoon. As they unlock and get onto their bikes, PRONOUN friend asks what SUBJPRONOUN planted in the yard.","exhaustive;NAME and PRONOUN friend are both big gardening enthusiasts, and they are going for a bike ride together this afternoon. As they unlock and get onto their bikes, PRONOUN friend asks what SUBJPRONOUN planted in the yard."],"Polar":"Whether or not NAME planted tomatoes in the yard","Exhaustive":"All of the things that NAME planted in the yard","Scenario":"I planted tomatoes in the yard.","TrialType":"critical"},
	{"Story":["polar;When NAME and PRONOUN friend went for a hike last week, they set out to find the best pre-made salad at the grocery store this week. They have plans to meet up today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for dinner.","exhaustive;NAME and PRONOUN friend both think dinner is the best meal of the day, and they have plans to meet up today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for dinner."],"Polar":"Whether or not NAME ate a salad for dinner","Exhaustive":"All of the things that NAME ate for dinner","Scenario":"I ate a salad for dinner.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend both agreed that their lipstick collections needed refreshing when they had a drink together the other evening, and resolved to each buy a new one by the next time they saw each other. They are running errands together today. When they first meet up at the car wash, PRONOUN friend asks what SUBJPRONOUN got the last time SUBJPRONOUN went to Sephora.","exhaustive;NAME and PRONOUN friend are both major makeup enthusiasts, and they are running errands together today. When they first meet up at the car wash, PRONOUN friend asks what SUBJPRONOUN got the last time SUBJPRONOUN went to Sephora."],"Polar":"Whether or not NAME got a lipstick at Sephora","Exhaustive":"All of the things that NAME got at Sephora","Scenario":"I got a lipstick at Sephora.","TrialType":"critical"},
	{"Story":["polar;NAME and PRONOUN friend both agreed that they both needed to add a pair of sandals to their shoe collections when they went hiking last week, and resolved to each buy a new pair before they hung out next. They are planning on watching a movie together tonight. Outside the movie theater, PRONOUN friend asks what SUBJPRONOUN's bought recently.","exhaustive;NAME and PRONOUN friend both really love shoes,  and they are planning on watching a movie together tonight. Outside the movie theater, PRONOUN friend asks what SUBJPRONOUN's bought recently."],"Polar":"Whether or not NAME has bought a pair of sandals","Exhaustive":"All of the things that NAME has bought","Scenario":"I got a pair of sandals at the mall.","TrialType":"critical"},
	{"Story":["polar;When NAME and PRONOUN friend had dinner last week, they both decided to cook salmon at least once before seeing each other next, since it is easy to make and very healthy. They are going to the farmer's market this morning. As they head into the farmer's market, PRONOUN friend asks what SUBJPRONOUN cooked for dinner.","exhaustive;NAME and PRONOUN friend both highly prioritize cooking meals over eating out, and they are going to the farmer's market this morning. As they head into the farmer's market, PRONOUN friend asks what SUBJPRONOUN cooked for dinner."],"Polar":"Whether or not NAME cooked a salmon filet for dinner","Exhaustive":"All of the things that NAME cooked for dinner","Scenario":"I cooked a salmon filet for dinner.","TrialType":"critical"}]

var fillers = [

	{"Story": "When NAME and PRONOUN friend caught up at a mutual friend’s place the other night, they agreed to try to get to know each other better. They are having coffee together this morning. At the entrance to the coffee shop, PRONOUN friend asks what city SUBJPRONOUN was born in.","Polar":"The city where NAME was born","Exhaustive":"NAME's favorite color", "Scenario":"I was born in New York","TrialType":"filler","QUD":"polar"},
	{"Story": "When NAME and PRONOUN friend went to the roller rink together last week, they thought it would be a good to know more about each other’s academic backgrounds. They have plans to go skating again this evening. While they lace up their skates, PRONOUN friend asks where SUBJPRONOUN went to college.","Polar":"The college that NAME attended","Exhaustive":"The make and model of NAME's car", "Scenario":"I went to NYU","TrialType":"filler","QUD":"polar"},
	{"Story": "NAME and PRONOUN friend discovered when they hung out last that they are both major clothing enthusiasts. They are catching up over lunch today. As they take their seats at the restaurant, PRONOUN friend asks what SUBJPRONOUN wore to work the other day.","Polar":"What NAME ate for lunch","Exhaustive":"All of the clothing items that NAME wore to work", "Scenario":"I wore a blazer to work","TrialType":"filler","QUD":"exhaustive"},
	{"Story": "NAME and PRONOUN friend bonded over their love of baking the last time they had dinner together. They are having dinner again tonight. At the restaurant, PRONOUN friend asks what new baked goods SUBJPRONOUN has made since they last met up.","Polar":"The last place that NAME traveled to","Exhaustive":"All of the baked goods that NAME has made", "Scenario":"I baked muffins","TrialType":"filler","QUD":"exhaustive"}
]

var names = _.shuffle([
    {"NAME":"Michael","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'}, 
    {"NAME":"Christopher","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Matthew","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'}, 
    {"NAME":"Joshua","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Jacob","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Nicholas","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Andrew","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Daniel","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Tyler","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Joseph","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Brandon","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"David","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"James","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Ryan","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"John","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Zach","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Justin","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Will","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Anthony","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Robert","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Austin","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Aaron","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Christian","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Samuel","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Dylan","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Steven","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Brian","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Jose","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Adam","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Rick","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Patric","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Charles","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Sean","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Jason","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Cameron","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Jeremy","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Mark","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Juan","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Travis","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Jeff","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Ethan","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Caleb","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Luis","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Jared","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Logan","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Hunter","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Trevor","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Evan","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Paul","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Kenneth","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Connor","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Dustin","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Noah","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Carlos","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Devin","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Gabriel","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Ian","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Greg","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Derek","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Corey","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Scott","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Bradley","PRONOUN":"his", 'SUBJPRONOUN':'he','OBJPRONOUN':'him'},
    {"NAME":"Jacqueline","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Miranda","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Savannah","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Angela","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Jenna","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Shannon","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Kathryn","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Gloria","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Destiny","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Lindsey","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Katie","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Gabrielle","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Cassandra","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Paige","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Crystal","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Amy","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Marissa","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Kristen","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Kelly","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Erica","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Vanessa","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Emma","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Julia","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Brooke","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Natalie","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Andrea","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Erin","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Laura","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Kaitlyn","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Maria","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Haley","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Heather","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Abigail","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Allison","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Christina","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Mary","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Olivia","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Tiffany","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Kim","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Anna","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Chelsea","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Kelsey","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Michelle","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Melissa","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Morgan","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Madison","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Alexandra","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Katherine","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Brianna","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Jasmine","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Danielle","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Rebecca","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Courtney","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Alyssa","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Amber","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Victoria","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Alexis","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Nicole","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Jennifer","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Rachel","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Stephanie","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Patricia","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Kayla","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Hannah","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Megan","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Elizabeth","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Brittany","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Amanda","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Samantha","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Sarah","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Emily","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'},
    {"NAME":"Ashley","PRONOUN":"her", 'SUBJPRONOUN':'she','OBJPRONOUN':'her'}
  ]);

var stimuli = _.shuffle(makeStims());

var secondStimuli = [];

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

			if (polar < 10){
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

			if (exhaustive < 10){
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
		

		var name = names[Math.floor(Math.random()*names.length)];


		story = story.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		polarChoice = polarChoice.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		exhaustiveChoice = exhaustiveChoice.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		//pushing stim 
		stims.push({"Name":name.NAME,"Story":story,"QUD":qud,"Polar":polarChoice,"Exhaustive":exhaustiveChoice,"Scenario":allStimuli[i].Scenario,"TrialType":allStimuli[i].TrialType});
	}

	for (var i = 0; i < fillers.length; i++){

		currStim = fillers[i];
		var name = names[Math.floor(Math.random()*names.length)];

		story = currStim.Story.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		polarChoice = currStim.Polar.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		exhaustiveChoice = currStim.Exhaustive.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		stims.push({"Name":name.NAME,"Story":story,"QUD":currStim.QUD,"Polar":polarChoice,"Exhaustive":exhaustiveChoice,"Scenario":currStim.Scenario,"TrialType":currStim.TrialType});

	}

	return stims;
	
}
