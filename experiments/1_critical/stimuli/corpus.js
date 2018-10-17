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

    {"Story":["polar;When they met up last week, NAME and PRONOUN friend decided to find the best ice cream at the grocery store. They have plans to meet up again today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN had for dessert.","exhaustive;NAME and PRONOUN friend both really like dessert, and they have plans to meet up today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN had for dessert."],"Polar":"Whether or not NAME had ice cream for dessert","Exhaustive":"All of the things that NAME had for dessert", "Scenario":"I had ice cream for dessert.","TrialType":"critical","leftSlider":"Only had ice cream for dessert","rightSlider":"Had ice cream and something else for dessert"},
	{"Story":["polar;When NAME and PRONOUN friend had lunch last week, they resolved to reach out to their significant others more often. They are going to have lunch together again today. When they arrive at the restaurant, PRONOUN friend asks who SUBJPRONOUN's been in touch with today.","exhaustive;NAME and PRONOUN friend both enjoy talking on the phone to their friends and loved ones, and are going to have lunch together. When they arrive at the restaurant, PRONOUN friend asks who SUBJPRONOUN's been in touch with today."],"Polar":"Whether or not NAME spoke to PRONOUN partner on the phone","Exhaustive":"All of the people that NAME spoke to on the phone","Scenario":"I spoke to my partner on the phone.","TrialType":"critical","leftSlider":"Only spoke to their partner on the phone","rightSlider":"Spoke to PRONOUN partner and someone else on the phone"},
	{"Story":["polar;The last time NAME and PRONOUN friend got together, they made a pact that they would visit San Francisco before they saw each other again. They are having a drink together again today. When they reach the bar, PRONOUN friend asks where SUBJPRONOUN's traveled to lately.","exhaustive;NAME and PRONOUN friend absolutely love to travel, and they are having a drink together today. When they reach the bar, PRONOUN friend asks where SUBJPRONOUN's traveled to lately."],"Polar":"Whether or not NAME traveled to San Francisco","Exhaustive":"All of the places that NAME traveled to","Scenario":"I traveled to San Francisco.","TrialType":"critical","leftSlider":"Only traveled to San Francisco","rightSlider":"Traveled to San Francisco and somewhere else"},
	{"Story":["polar;The last time NAME and PRONOUN friend hung out, they decided they would sign up for a pottery class by time time they met up next. They are eating dinner together today. Once they turn up at the restaurant, PRONOUN friend asks what classes SUBJPRONOUN's signed up for recently.","exhaustive;NAME and PRONOUN friend are both fond of taking classes outside of work, and they are eating dinner together today. Once they turn up at the restaurant, PRONOUN friend asks what classes SUBJPRONOUN's signed up for recently."],"Polar":"Whether or not NAME signed up for a pottery class","Exhaustive":"All of the classes that NAME signed up for","Scenario":"I signed up for a pottery class.","TrialType":"critical","leftSlider":"Only signed up for a pottery class","rightSlider":"Signed up for a pottery class and something else"},
	{"Story":["polar;At NAME and PRONOUN friend's last meetup, they agreed to eat cereal for breakfast more often. They are planning on going for a hike today. At the trailhead, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for breakfast.","exhaustive;NAME and PRONOUN friend both prefer breakfast to any other meal, and they're planning on going for a hike today. At the trailhead, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for breakfast."],"Polar":"Whether or not NAME had cereal for breakfast","Exhaustive":"All of the things that NAME had for breakfast", "Scenario":"I had cereal for breakfast.","TrialType":"critical","leftSlider":"Only had cereal for breakfast","rightSlider":"Had cereal and something else for breakfast"},
	{"Story":["polar;When NAME and PRONOUN friend worked out together last, they concluded that they next birthday gift they each bought would be a perfume. They are going to work out together today. At the gym entrance, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN sister for PRONOUN birthday.","exhaustive;NAME and PRONOUN friend both really enjoy giving their loved ones birthday gifts, and they are going to work out together today. At the gym entrance, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN sister for PRONOUN birthday."],"Polar":"Whether or not NAME bought PRONOUN sister a perfume for PRONOUN birthday","Exhaustive":"All of the things that NAME bought PRONOUN sister for PRONOUN birthday","Scenario":"I gave my sister a perfume as a birthday gift.","TrialType":"critical","leftSlider":"Only gave PRONOUN sister a perfume as a birthday gift","rightSlider":"Gave PRONOUN sister a perfume and something else as a birthday gift"},
	{"Story":["polar;When they last saw each other, NAME and PRONOUN friend made a list of classic karaoke ballads and decided that the next time they each went to karaoke, they would sing a song from that list. They are having a glass of wine at NAME's place today.  Upon arriving at NAME's, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN sang at karaoke the other night.","exhaustive;NAME and PRONOUN friend both love to sing karaoke, and they're having a glass of wine at NAME's place today. Upon arriving at NAME's, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN sang at karaoke the other night."],"Polar":"Whether or not NAME sang a ballad at karaoke","Exhaustive":"All of the songs that NAME sang at karaoke","Scenario":"I sang a ballad at karaoke.","TrialType":"critical","leftSlider":"Only sang a ballad at karaoke","rightSlider":"Sang a ballad and something else at karaoke"},
	{"Story":["polar;When they hung out the other day, NAME and PRONOUN friend resolved to discover the best gas station coffee by the time they next hung out. They are going shopping at the mall together today. Once they meet at the mall entrance, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN picked up the last time SUBJPRONOUN went to the gas station.","exhaustive;NAME and PRONOUN friend both have an unexpected love of gas station snacks and drinks, and they are going shopping at the mall together today. Once they meet at the mall entrance, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN picked up the last time SUBJPRONOUN went to the gas station."],"Polar":"Whether or not NAME grabbed a coffee at the gas station","Exhaustive":"All of the things that NAME grabbed at the gas station","Scenario":"I grabbed a coffee at the gas station.","TrialType":"critical","leftSlider":"Only grabbed a coffee at the gas station","rightSlider":"Grabbed a coffee and something else at the gas station"},
	{"Story":["polar;NAME and PRONOUN friend decided when they met up last week that since freestyle is the most efficient swimming stroke, they would both swim more freestyle in their swimming workouts this week. They have plans to go to the beach together today. Once they finish laying out their towels, PRONOUN friend asks OBJPRONOUN what strokes SUBJPRONOUN swam the last time SUBJPRONOUN went to the pool.","exhaustive;NAME and PRONOUN friend are both avid swimmers, and they have plans to go to the beach together today. Once they finish laying out their towels, PRONOUN friend asks OBJPRONOUN what strokes SUBJPRONOUN swam the last time SUBJPRONOUN went to the pool."],"Polar":"Whether or not NAME swam freestyle at the pool","Exhaustive":"All of the strokes that NAME swam at the pool","Scenario":"I swam freestyle in the pool.","TrialType":"critical","leftSlider":"Only swam freestyle in the pool","rightSlider":"Swam freestyle and something else in the pool"},
	{"Story":["polar;NAME and PRONOUN friend agreed when they spent time together last week that they would lift weights more often at the gym this coming week. They are meeting up to have coffee today. When they get a table at the coffee shop, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN did at the gym last time SUBJPRONOUN went.","exhaustive;NAME and PRONOUN friend both frequent the gym, and they're meeting up to have coffee today. When they get a table at the coffee shop, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN did at the gym last time SUBJPRONOUN went."],"Polar":"Whether or not NAME lifted weights at the gym","Exhaustive":"All of the things that NAME did at the gym","Scenario":"I lifted weights at the gym.","TrialType":"critical","leftSlider":"Only lifted weights at the gym","rightSlider":"Lifted weights and did something else at the gym"},         
	{"Story":["polar;When NAME and PRONOUN friend last went thrift shopping together, they agreed that the next housewarming gift they bought for a friend would be tulips. They are about to go thrift shopping togerher. At the first thrift shop, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN cousin for PRONOUN recent housewarming.","exhaustive;NAME and PRONOUN friend both strongly believe in giving their loved ones housewarming gifts, and they are about to go thrift shopping together. At the first thrift shop, PRONOUN friend asks what SUBJPRONOUN bought PRONOUN cousin for PRONOUN recent housewarming."],"Polar":"Whether or not NAME bought tulips as a housewarming gift","Exhaustive":"All of the things that NAME bought as a housewarming gift","Scenario":"I purchased tulips as a housewarming gift.","TrialType":"critical","leftSlider":"Only purchased tulips as a housewarming gift","rightSlider":"Purchased tulips and something else as a housewarming gift"},
	{"Story":["polar;NAME and PRONOUN friend resolved at their last hangout that the next engagement gift they each sent to a loved one would be a fruit basket. They are about to buy houseplants together. Upon reaching the nursery, PRONOUN friend asks what SUBJPRONOUN sent PRONOUN college roommate for PRONOUN recent engagement.","exhaustive;NAME and PRONOUN friend both have a policy of giving not only wedding gifts, but also engagement gifts to their loved ones who are getting married. They will be meeting later today to buy houseplants together. Upon reaching the nursery, PRONOUN friend asks what SUBJPRONOUN sent PRONOUN college roommate for PRONOUN recent engagement."],"Polar":"Whether or not NAME sent PRONOUN college roommate a fruit basket as an engagement gift","Exhaustive":"All of the things that NAME sent PRONOUN college roommate as an engagement gift","Scenario":"I sent a fruit basket as an engagement gift.","TrialType":"critical","leftSlider":"Only sent a fruit basket as an engagement gift","rightSlider":"Sent a fruit basket and something else as an engagement gift"},         
	{"Story":["polar;NAME and PRONOUN friend agreed to go to the gym after work more often as part of the health kick they started together last week. They are meeting at happy hour today. At the bar, PRONOUN friend asks where SUBJPRONOUN went after work yesterday.","exhaustive;NAME and PRONOUN friend both consider themselves \"movers and shakers,\" and they always make plans for after work. They're meeting at happy hour today. At the bar, PRONOUN friend asks where SUBJPRONOUN went after work yesterday."],"Polar":"Whether or not NAME went to the gym after work","Exhaustive":"All of the places that NAME went to after work","Scenario":"I went to the gym after work.","TrialType":"critical","leftSlider":"Only went to the gym after work","rightSlider":"Went to the gym and somewhere else after work"},
	{"Story":["polar;NAME and PRONOUN friend agreed to add kale to their morning breakfast smoothies more often as part of the healthy eating bender they started together last week. They have plans to go for a walk this morning before work. Upon meeting, PRONOUN friend asks what SUBJPRONOUN added to PRONOUN breakfast smoothie.","exhaustive;NAME and PRONOUN friend are both very health-conscious, and they start every day with a homemade breakfast smoothie. They have plans to go for a walk this morning before work. Upon meeting, PRONOUN friend asks what SUBJPRONOUN added to PRONOUN breakfast smoothie."],"Polar":"Whether or not NAME added kale to PRONOUN breakfast smoothie","Exhaustive":"All of the things that NAME added to PRONOUN breakfast smoothie","Scenario":"I added kale to a breakfast smoothie.","TrialType":"critical","leftSlider":"Only added kale to a breakfast smoothie","rightSlider":"Added kale and something else to a breakfast smoothie"},
	{"Story":["polar;NAME and PRONOUN friend decided to put bell peppers more often into their meals when they met up last week. They intend to watch a movie at NAME's house together today. PRONOUN friend arrives at NAME's, and then asks what SUBJPRONOUN put on PRONOUN pizza.","exhaustive;NAME and PRONOUN friend are both huge fans of pizza, and they intend to watch a movie at NAME's house together today. PRONOUN friend arrives at NAME's, and then asks what SUBJPRONOUN put on PRONOUN pizza."],"Polar":"Whether or not NAME put bell peppers on PRONOUN pizza","Exhaustive":"All of the things that NAME put on PRONOUN pizza","Scenario":"I put bell peppers on a pizza.","TrialType":"critical", "leftSlider":"Only put bell peppers on a pizza","rightSlider":"Put bell peppers and something else on a pizza"},
	{"Story":["polar;NAME and PRONOUN friend both realized when they had lunch the other day that they should plant tomatoes in their yards by the next time they meet. They are going for a bike ride together this afternoon. As they unlock and get onto their bikes, PRONOUN friend asks what SUBJPRONOUN planted in the yard.","exhaustive;NAME and PRONOUN friend are both big gardening enthusiasts, and they are going for a bike ride together this afternoon. As they unlock and get onto their bikes, PRONOUN friend asks what SUBJPRONOUN planted in the yard."],"Polar":"Whether or not NAME planted tomatoes in the yard","Exhaustive":"All of the things that NAME planted in the yard","Scenario":"I planted tomatoes in the yard.","TrialType":"critical","leftSlider":"Only planted tomatoes in the yard","rightSlider":"Planted tomatoes and something else in the yard"},
	{"Story":["polar;When NAME and PRONOUN friend went for a hike last week, they set out to find the best pre-made salad at the grocery store this week. They have plans to meet up today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for dinner.","exhaustive;NAME and PRONOUN friend both think dinner is the best meal of the day, and they have plans to meet up today. Upon meeting, PRONOUN friend asks OBJPRONOUN what SUBJPRONOUN ate for dinner."],"Polar":"Whether or not NAME ate a salad for dinner","Exhaustive":"All of the things that NAME ate for dinner","Scenario":"I ate a salad for dinner.","TrialType":"critical","leftSlider":"Only ate a salad for dinner","rightSlider":"Ate a salad and something else for dinner"},
	{"Story":["polar;NAME and PRONOUN friend both agreed that their lipstick collections needed refreshing when they had a drink together the other evening, and resolved to each buy a new one by the next time they saw each other. They are running errands together today. When they first meet up at the car wash, PRONOUN friend asks what SUBJPRONOUN got the last time SUBJPRONOUN went to Sephora.","exhaustive;NAME and PRONOUN friend are both major makeup enthusiasts, and they are running errands together today. When they first meet up at the car wash, PRONOUN friend asks what SUBJPRONOUN got the last time SUBJPRONOUN went to Sephora."],"Polar":"Whether or not NAME got a lipstick at Sephora","Exhaustive":"All of the things that NAME got at Sephora","Scenario":"I got a lipstick at Sephora.","TrialType":"critical","leftSlider":"Only got a lipstick at Sephora","rightSlider":"Got a lipstick and something else at Sephora"},
	{"Story":["polar;NAME and PRONOUN friend both agreed that they both needed to add a pair of sandals to their shoe collections when they went hiking last week, and resolved to each buy a new pair before they hung out next. They are planning on watching a movie together tonight. Outside the movie theater, PRONOUN friend asks what SUBJPRONOUN's bought recently.","exhaustive;NAME and PRONOUN friend both really love shoes,  and they are planning on watching a movie together tonight. Outside the movie theater, PRONOUN friend asks what SUBJPRONOUN's bought recently."],"Polar":"Whether or not NAME has bought a pair of sandals","Exhaustive":"All of the things that NAME has bought","Scenario":"I got a pair of sandals at the mall.","TrialType":"critical","leftSlider":"Only got a pair of sandals at the mall","rightSlider":"Got a pair of sandals and something else at the mall"},
	{"Story":["polar;When NAME and PRONOUN friend had dinner last week, they both decided to cook salmon at least once before seeing each other next, since it is easy to make and very healthy. They are going to the farmer's market this morning. As they head into the farmer's market, PRONOUN friend asks what SUBJPRONOUN cooked for dinner.","exhaustive;NAME and PRONOUN friend both highly prioritize cooking meals over eating out, and they are going to the farmer's market this morning. As they head into the farmer's market, PRONOUN friend asks what SUBJPRONOUN cooked for dinner."],"Polar":"Whether or not NAME cooked a salmon filet for dinner","Exhaustive":"All of the things that NAME cooked for dinner","Scenario":"I cooked a salmon filet for dinner.","TrialType":"critical","leftSlider":"Only cooked a salmon filet for dinner","rightSlider":"Cooked a salmon filet and something else for dinner"}]

var exhaustivityFillersComplete = [
{"Story": "The last time Janet and her friend hung out, they chatted about the upcoming local election between candidates Adam and Bill. The election was last week, and they are meeting up again today. When they see each other, her friend asks how the election turned out. ", "Name": "Janet","Scenario": "Adam defeated Bill, and special interests promptly began lobbying him.","TrialType":"exhaustivityFiller","Question":"Who did special interests promptly begin lobbying?","leftSlider":"Adam","rightSlider":"Bill"},

{"Story": "When Drew and his friend last spent time together, they chatted a bit about their friends John and Sean, who are huge comic book fans. Drew and his friend are hanging out again today, and as soon as they see each other, his friend asks if John and Sean had seen the new Marvel comic book.","Name":"Drew","Scenario":"John gave the comic book to Sean, and he started reading it right away.","TrialType":"exhaustivityFiller","Question":"Who started reading the comic book?","leftSlider":"John","rightSlider":"Sean"},


{"Story": "Amanda and her friend are in the same friend group, and at their last meet up, they spoke about their mutual friends among other things. They are trying a new gelato shop today. At the entrance to the ship, her friend asks about their friends Mary, Julie, and Peter.", "Name":"Amanda", "Scenario":"Mary helped Julie change her flat tire and then helped Peter change his oil.", "TrialType":"exhaustivityFiller", "Question":"Who helped Peter change his oil?", "leftSlider":"Mary", "rightSlider":"Julie"},

{"Story": "Brian and his friend met in college, and have many mutual friends as a result. They have plans to go rock climbing today. At the rock climbing gym, his friend asks about their friends Fiona, Amanda, and James, who competed in a co-ed wrestling tournament last weekend.", "Name":"Brian", "Scenario":"Fiona defeated Amanda and so James congratulated her after the match.", "TrialType":"exhaustivityFiller", "Question":"Who did James congratulate?", "leftSlider":"Fiona", "rightSlider":"Amanda"},

{"Story": "Cassandra and her friend both follow local efforts to protest animal mistreatment. They are going to an espresso bar for the first time today. As they take their seats at the bar, her friend asks about an upcoming protest in their city.", "Name":"Cassandra", "Scenario":"The city council denied the protestors a permit because they advocated violence.", "TrialType":"exhaustivityFiller", "Question":"Who advocated violence?", "leftSlider":"The city council", "rightSlider":"The protestors"},

{"Story": "Vincent and his friend both love a television show about characters Samuel and Justin. They are catching up over boba this afternoon. After they order and pay, his friend asks what happened on the last episode of the show.", "Name":"Vincent", "Scenario":"Samuel threatened Justin with a knife, and he alerted security with a shout.", "TrialType":"exhaustivityFiller", "Question":"Who alerted security with a shout?", "leftSlider":"Justin", "rightSlider":"Samuel"},

{"Story": "Ariana and her friend go to concerts often, even when they get really packed. They are grabbing a quick lunch in the middle of the work day today. At the restaurant, her friend asks what happened at the crowded concert she went to last weekend.", "Name":"Ariana", "Scenario":"Jane bumped Bonnie and she poked Steven.", "TrialType":"exhaustivityFiller", "Question":"Who poked Steven?", "leftSlider":"Bonnie", "rightSlider":"Jane"},

{"Story": "Chris and his friend are musicians, and they play in different bands. They are meeting up for dinner at a deli before their rehearsals tonight. At the deli, his friend asks about the dynamics of his group.", "Name":"Chris", "Scenario":"Richard respects Harry, and Dennis absolutely worships him.", "TrialType":"exhaustivityFiller", "Question":"Who does Dennis worship?", "leftSlider":"Richard", "rightSlider":"Harry"},

{"Story": "Jenna and her friend work at the same company, and keep each other up to date on company gossip. They are coming into work early today to have coffee and catch up. As they pour their first cup, her friend asks what's new on her team. ","Name":"Jenna", "Scenario":"Bob defied Scott, and Caroline punished him.", "TrialType":"exhaustivityFiller", "Question":"Who did Caroline punish?", "leftSlider":"Scott", "rightSlider":"Bob"},

{"Story": "Barbara and her friend have been friends since elementary school. They are going for a walk around the neighborhood today. After lacing up her sneakers, her friend asked what happened the last time she saw their other friends from grade school. ", "Name":"Frank", "Scenario":"Claire snatched the phone from Irene, and she dialed a number.", "TrialType":"exhaustivityFiller", "Question":"Who dialed a number on the phone?", "leftSlider":"Irene", "rightSlider":"Claire"},

{"Story": "Kim and her friend spoke a lot about Kim's upcoming move when they hung out a few weeks ago. They are hanging out again today, a few days after the move. When they see each other, her friend asks her about the details of her move. ", "Name":"Kim", "Scenario":"The movers carried a piano into the house", "TrialType":"exhaustivityFiller", "Question":"How likely is it that the movers...", "leftSlider":"Each carried a piano alone", "rightSlider":"Carried a piano together"},

{"Story": "Being that Robert and his friend both work for volunteer organizations, whenever they spend time together they talk about their volunteer efforts. They are doing a workout class today. Before the class begins, his friend asks about his organization's latest beach cleanup.", "Name":"Robert", "Scenario":"The volunteers wore shorts, since it was very hot that day.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that the volunteers...", "leftSlider":"Each wore shorts alone", "rightSlider":"Wore shorts together"},

{"Story": "Samantha and her friend both have children, and they always share details about their kids when they meet up. They are having breakfast before starting the day. At the cafe, her friend asks about her kids' morning.", "Name":"Samantha", "Scenario":"When Laura and Kara stepped outside, they saw a rainbow.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that Laura and Kara...", "leftSlider":"Each saw a rainbow alone", "rightSlider":"Saw a rainbow together"}, 

{"Story": "Tim and his friend live in communal living spaces, and they swap roommate stories when they spend time together. They are meeting at a pressed juice place today. At the juicery, his friend asks for an update on his roommates.", "Name":"Tim", "Scenario":"Ben and Connor ordered coffee before going to work.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that Ben and Connor...", "leftSlider":"Each ordered coffee alone", "rightSlider":"Ordered coffee together"}, 

{"Story": "Vanessa and her friend are students and different universities, so they have different observations about the faculty that they share with each other. They are meeting up since they're on a break from school. Upon seeing her, her friend asks for a funny professor story. ", "Name":"Vanessa", "Scenario":"The professors ate fried rice before returning to their research.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that the professors...", "leftSlider":"Each ate fried rice alone", "rightSlider":"Ate fried rice together"},

{"Story": "William and his friend are both married, and they tell each other about what their wives are up to whenever they hang out. They have plans to watch the baseball game at a sports bar after work. At the bar, his friend asks about his wife, whose name is Caroline.", "Name":"William", "Scenario":"Caroline and her coworker saw a movie after work.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that Caroline and her coworker...", "leftSlider":"Each saw a movie alone", "rightSlider":"Saw a movie together"}, 

{"Story": "Crystal and her friend resolved to get to know their significant others' families better the last time they got together. They're having a girls' night tonight. At the first bar, her friend asks about her last outing with her boyfriend Brandon.", "Name":"Crystal", "Scenario":"Brandon and his brother put cheese on their pasta at dinner.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that Brandon and his brother...", "leftSlider":"Each put cheese on their pasta alone", "rightSlider":"Put cheese on their pasta together"},

{"Story": "Edward and his friend decided to travel to a developing nation and serve the community there at least once when they hung out last. They're catching up over dessert tonight. At the bakery, his friend asked about his service trip.", "Name":"Edward", "Scenario":"The missionaries built a school in India.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that the missionaries...", "leftSlider":"Each built a school in India alone", "rightSlider":"Built a school in India together"},

{"Story": "Fiona and her friend are teachers, so whenever they meet up they chat about their students and how to become better instructors. They are writing up lesson plans together today. After pulling out a notebook, her friend asks about her most recent lecture.", "Name":"Fiona", "Scenario":"The students took notes during the lecture.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that the students...", "leftSlider":"Each took notes during the lecture alone", "rightSlider":"Took notes during the lecture together"},

{"Story": "George and his friend each have a sister, and they made a pact to be more present in their lives when they last met. They are running errands together today. Outside the dry cleaner's, his friend asks about his sister, whose name is Samantha.", "Name":"George", "Scenario":"Samantha and her friend Megan went to a country concert.", "TrialType":"exhaustivityFiller", "Question":"How likely is it that Samantha and Megan...", "leftSlider":"Each went to a country concert alone", "rightSlider":"Went to a country concert together"}] 


var attentionChecks = [

	{"Story": "When NAME and PRONOUN friend caught up at a mutual friend's place the other night, they agreed to try to get to know each other better. They are having coffee together this morning. At the entrance to the coffee shop, PRONOUN friend asks what city SUBJPRONOUN was born in.","Polar":"The city where NAME was born","Exhaustive":"NAME's favorite color", "Scenario":"I was born in New York","TrialType":"filler","QUD":"polar","leftSlider":"Was born only in New York","rightSlider":"considers purple to be their favorite color"},
	{"Story": "When NAME and PRONOUN friend went to the roller rink together last week, they thought it would be a good to know more about each other's academic backgrounds. They have plans to go skating again this evening. While they lace up their skates, PRONOUN friend asks where SUBJPRONOUN went to college.","Polar":"The college that NAME attended","Exhaustive":"The make and model of NAME's car", "Scenario":"I went to NYU","TrialType":"filler","QUD":"polar","leftSlider":"attended college only at NYU","rightSlider":"drives a car whose make and model is a Volkswagen Jetta"},
	{"Story": "NAME and PRONOUN friend discovered when they hung out last that they are both major clothing enthusiasts. They are catching up over lunch today. As they take their seats at the restaurant, PRONOUN friend asks what SUBJPRONOUN wore to work the other day.","Polar":"What NAME ate for lunch","Exhaustive":"All of the clothing items that NAME wore to work", "Scenario":"I wore a blazer to work","TrialType":"filler","QUD":"exhaustive","leftSlider":"Ate only a salad for lunch","rightSlider":"Wore a blazer and something else to work"},
	{"Story": "NAME and PRONOUN friend bonded over their love of baking the last time they had dinner together. They are having dinner again tonight. At the restaurant, PRONOUN friend asks what new baked goods SUBJPRONOUN has made since they last met up.","Polar":"The last place that NAME traveled to","Exhaustive":"All of the baked goods that NAME has made", "Scenario":"I baked muffins","TrialType":"filler","QUD":"exhaustive","leftSlider":"Traveled only to Cuba","rightSlider":"Baked muffins and something else"}
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

var assignments = assignToBlocks();

//stimuli: qud block
var stimuli = _.shuffle(makeStims(assignments["qudCrit"],assignments["qudAttention"]));

//secondStimuli: exhaustivity block
var secondStimuli = _.shuffle(makeStims(assignments["exhaustivityCrit"],assignments["exhaustivityAttention"]).concat(exhaustivityFillersComplete));

/*
input: none
output: two lists of stims, where one is the list of stims assessed for qud, and the other is a list of stims assessed for exhaustivity inference 
purpose: randomly assign each of the 20 stims to qud or exhaustivity 
*/
function assignToBlocks(){
	qud = [];
	qudFillers = []
	exhaustivity = [];
	exhaustivityFillers = []

	stims = _.shuffle(allStimuli);
	attentionStims = _.shuffle(attentionChecks);

	for(var i = 0; i < stims.length; i++){
		currStim = stims[i];

		if (i < 10) {
			qud.push(currStim);
		}
		else{
			exhaustivity.push(currStim);
		}
	}

	for (var i = 0; i < attentionStims.length; i++){
		currStim = attentionStims[i];
		if (i < 2){
			qudFillers.push(currStim);
		}
		else{
			exhaustivityFillers.push(currStim);
		}
	}

	return {"qudCrit":qud,"qudAttention":qudFillers,"exhaustivityCrit":exhaustivity,"exhaustivityAttention":exhaustivityFillers}

}


//must be same number of who's and are's 
function makeStims(crit,fillers) {
	stims = [];

	polar = 0;
	exhaustive = 0;

	for (var i = 0; i < crit.length; i++){
	//push every stim, only difference is which story gets pushed, each story has to have pronouns/nouns plugged in
	//need to draw a name and replace NAME, PRONOUN, SUBJPRONOUN for story, polar, and exhaustive answer choices 
		currStim = crit[i];
		storyChoices = crit[i].Story;
		sampledChoice = _.sample(storyChoices);
		qud = sampledChoice.split(";")[0];
		story = sampledChoice.split(";")[1];
		polarChoice = currStim.Polar;
		exhaustiveChoice = currStim.Exhaustive;

		//picking a story
		if (qud == 'polar'){

			if (polar < 5){
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

			if (exhaustive < 5){
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

		leftSliderChoice = crit[i].leftSlider.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		rightSliderChoice = crit[i].rightSlider.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		//pushing stim 
		stims.push({"Name":name.NAME,"Story":story,"QUD":qud,"Polar":polarChoice,"Exhaustive":exhaustiveChoice,"Scenario":crit[i].Scenario,"TrialType":crit[i].TrialType,"leftSlider":leftSliderChoice,"rightSlider":rightSliderChoice});
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

		leftSliderChoice = currStim.leftSlider.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		rightSliderChoice = currStim.rightSlider.replace(/NAME|PRONOUN|SUBJPRONOUN|OBJPRONOUN/gi, function(matched){
  			return name[matched];
		});

		stims.push({"Name":name.NAME,"Story":story,"QUD":currStim.QUD,"Polar":polarChoice,"Exhaustive":exhaustiveChoice,"Scenario":currStim.Scenario,"TrialType":currStim.TrialType,"leftSlider":leftSliderChoice,"rightSlider":rightSliderChoice});

	}

	return stims;
	
}
