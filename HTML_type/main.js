
var letterSpace  = '<div class="letter space"></div>';
var letterA      = '<div class="letter a"><div class="triangle"></div></div>';
var letterB      = '<div class="letter b"><div class="top"></div><div class="left"></div><div class="bottom"></div></div>';
var letterC 	 = '<div class="letter c"><div class="first"></div><div class="secound"></div><div class="middle"></div></div>';
var letterD 	 = '<div class="letter d"><div class="first"></div><div class="square"></div><div class="middle"></div></div>';
var letterE  	 = '<div class="letter e"><div class="left"></div><div class="top"></div><div class="middle"></div><div class="bottom"></div></div>';
var letterF		 = '<div class="letter f"><div class="left"></div><div class="top"></div><div class="middle"></div></div>';
var letterG		 = '<div class="letter g"><div class="circle"></div><div class="left"></div><div class="square"></div><div class="middle"></div></div>';
var letterH 	 = '<div class="letter h"><div class="left"></div><div class="middle"></div><div class="right"></div></div>';
var letterI  	 = '<div class="letter i"><div class="middle"></div><div class="top"></div><div class="bottom"></div></div>';
var letterJ		 = '<div class="letter j"><div class="middle"></div><div class="circle"></div><div class="line"></div></div>';
var letterK 	 = '<div class="letter k"><div class="top"></div><div class="bottom"></div></div>';
var letterL 	 = '<div class="letter l"><div class="left"></div><div class="bottom"></div></div>';
var letterM		 = '<div class="letter m"><div class="left"></div><div class="right"></div></div>';
var letterN		 = '<div class="letter n"><div class="left"></div><div class="right"></div><div class="middle"></div></div>';
var letterO 	 = '<div class="letter o"><div class="outer"></div><div class="inner"></div></div>';
var letterP 	 = '<div class="letter p"><div class="left"></div><div class="upper"></div></div>';
var letterQ  	 = '<div class="letter q"><div class="circle"></div><div class="inner"></div><div class="tirangle"></div></div>';
var letterR  	 = '<div class="letter r"><div class="triangle"></div><div class="upper"></div><div class="left"></div></div>';
var letterS  	 = '<div class="letter s"><div class= "top"></div><div class="bottom"></div><div class="topinner"></div><div class="bottominner"></div><div class="boxtop"></div><div class="boxbottom"></div></div>';
var letterT		 = '<div class="letter t"><div class="top"></div><div class="middle"></div></div>';
var letterU		 = '<div class="letter u"><div class="circle"></div><div class="inner"></div><div class="box"></div></div>';
var letterV  	 = '<div class="letter v"><div class="main"></div><div class="inner"></div></div>';
var letterW  	 = '<div class="letter w"><div class="left"></div><div class="right"></div></div>';
var letterX		 = '<div class="letter x"><div class="one"></div><div class="two"></div><div class="three"></div><div class="four"></div></div>';
var letterY		 = '<div class="letter y"><div class="triangle"></div><div class="inner"></div><div class="middle"></div></div>';
var letterZ		 = '<div class="letter z"><div class="top"></div><div class="bottom"></div></div>';




$(document).ready(function(){

	function getDate(offset){
	  var now = new Date();
	  var hour = 60*60*1000;
	  var min = 60*1000;
	  return new Date(now.getTime() + (now.getTimezoneOffset() * min) + (offset * hour));
	}

	var dateNYC = getDate(-4);
	var hourNYC = dateNYC.getHours();
	var minNYC = (dateNYC.getMinutes())/60;


	console.log(hourNYC + minNYC);

	hourNYC = hourNYC + minNYC;

	// Use this to test
	// hourNYC = 6;

	 if (hourNYC > 0.9 && hourNYC < 2.0){
	 	$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "1" + ":" + "59" + ":" + "59");

	 	$('.message-wrapper').html("Rose bar is the hotspot for the city's most fashionable, talked about events and a low-key escape for A-listers looking for a quiet cocktail. It is home to Fashion Week after-parties, private film screenings, press events and on any given night. With its high ceiling, grand chandelier, checkered floor, and velvet chairs, Rose Bar could be an art piece even without the Julian Schnabel-curated works adorning the walls. It's an ideal date spot or perfect for a night out.");

	 	$('.box').html(letterR+letterO+letterS+letterE+letterSpace+letterB+letterA+letterR);

		if(hourNYC > 0. && hourNYC < 1.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.9');
		} else if (hourNYC > 1.2 && hourNYC < 1.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else {
		$(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its late night 1-2 am");

	 } else if (hourNYC > 1.9 && hourNYC < 3.0){
	 	$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "2" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Le Bain is a penthouse discotheque and rooftop bar on the top floor of The Standard, High Line in the Meatpacking District featuring world-famous DJs, a state of the art sound system and exclamation-inspiring views. During the summer, there's a plunge pool on the dance floor and a creperie on the grass-covered rooftop.");

	 	$('.box').html(letterL+letterE+letterSpace+letterB+letterA+letterI+letterN);

	 	if(hourNYC > 1.9 && hourNYC < 2.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.9');
		} else if (hourNYC > 2.2 && hourNYC < 2.7) {
		    $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else {
		    $(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its late night 2-3 am");

	} else if (hourNYC > 2.9 && hourNYC < 4.0){
	 	$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "3" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Cafeteria serves amped-up comfort food plus an unquestionably hip Chelsea setting, times 24 hours a day. The restaurant attracts well-dressed boys and girls who brunch after brunch and night after night, for crispy-gooey cheddar-and-fontina mac 'n cheese, Cobb salad, and fried chicken with waffles—not to mention the prime people-watching location (you’re sure to run into someone you know, or at least recognize from US Weekly) and a downstairs bar to get you through the early hours.");

	 	$('.box').html(letterC+letterA+letterF+letterE+letterT+letterE+letterR+letterI+letterA);

	 	if(hourNYC > 2.9 && hourNYC < 3.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.9');
		} else if (hourNYC > 3.2 && hourNYC < 3.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else {
		$(".letter div, .message-wrapper div").css('opacity', '.1');
		}
		console.log("its late night 3-4 am");

	}else if (hourNYC > 3.9 && hourNYC < 5.0 ) {
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "4" + ":" + "59" + ":" + "59"); 

		$('.message-wrapper').html("Gramercy is perfect for an early morning walk to clear your mind. Gramercy Park is a privately owned enclave built in the 1800s. It is well-to-do residential area with brownstones and upscale apartment buildings on tree-lined streets. While you can't get into the park itself, you can take a lovely walk around the park taking in all the beautiful buildings which surround it. Spring and fall are especially nice times of the year for such a stroll. It is a beautiful and most buildings retain much of their architectural history. The Gramercy area was named a historic district in the 1960s. Enjoy a stroll among this quite and picture perfect neighborhood.");

	 	$('.box').html(letterG+letterR+letterA+letterM+letterE+letterR+letterC+letterY+letterSpace+letterP+letterA+letterR+letterK);

	 	if(hourNYC > 3.9 && hourNYC < 4.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.9');
		} else if (hourNYC > 4.2 && hourNYC < 4.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else {
		$(".letter div, .message-wrapper div").css('opacity', '.1');
		}
		console.log("its early morning 4-5")

	} else if (hourNYC > 4.9 && hourNYC < 6.0){
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "5" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Watching the early morning sunrise form Gantry Plaza State Park is absolutely sunning. The park is a 12-acre riverside oasis that boasts spectacular views of the midtown Manhattan skyline, including the Empire State Building and the United Nations. Enjoy a relaxing stroll along the park's four piers or through the park's manicured gardens and unique mist fountain. Along the way take a moment to admire the rugged beauty of the park's centerpieces - restored gantries. These industrial monuments were once used to load and unload rail car floats and barges; today they are striking reminders of our waterfront's past.");

	 	$('.box').html(letterG+letterA+letterN+letterT+letterR+letterY+letterSpace+letterP+letterL+letterA+letterZ+letterA+letterSpace+letterS+letterT+letterA+letterT+letterE+letterSpace+letterP+letterA+letterR+letterK);

	 	if(hourNYC > 4.9 && hourNYC < 5.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 5.2 && hourNYC < 5.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else{
		$(".letter div, .message-wrapper div").css('opacity', '.1');
		}
	console.log("its early morning 5-6");

	} else if (hourNYC > 5.9 && hourNYC < 7.0){
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "6" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Spend your early morning at the secluded garden oasis above the city streets.The Elevated Acre is precisely that: a one-acre meadow flanked by delightfully designed gardens and plantings elevated above the city streets. Its entrance is fairly anonymous, an escalator at 55 Water Street, set back from the sidewalk. Currently surrounded by construction, passersby will often overlook it.The secretive urban oasis features a lawn, an amphitheater, a summer beer garden, winding paths of Brazilian hardwood, spectacular views of the East River, Brooklyn, and the Brooklyn Bridge, and above all, pleasant solitude. This elevated one-acre park is one of Manhattan's most relaxing secrets perfectfor a peacful morning.");

	 	$('.box').html(letterT+letterH+letterE+letterSpace+letterE+letterL+letterE+letterV+letterA+letterT+letterE+letterD+letterSpace+letterA+letterC+letterR+letterE);

	 	if(hourNYC > 5.9 && hourNYC < 6.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 6.2 && hourNYC < 6.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else{
		$(".letter div, .message-wrapper div").css('opacity', '.1');
		}
		console.log("its morning 6-7");

	} else if (hourNYC > 6.9 && hourNYC < 8.0){
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "7" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("On a sunny morning, discerning coffee lovers looking for a quality cup of Joe and a place for quiet contemplation should head to the High Line Hotel’s courtyard and take a seat in the urban sanctuary that has been created for hotel guests and the people of Chelsea. They serve daily roasted brews and pastries in an their industrial-chic setting .");
	 	$('.box').html(letterT+letterH+letterE+letterSpace+letterH+letterI+letterG+letterH+letterSpace+letterL+letterI+letterN+letterE+letterSpace+letterH+letterO+letterT+letterE+letterL);

	 	if(hourNYC > 6.9 && hourNYC < 7.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 7.2 && hourNYC < 7.7) {
		    $(".letter div, .message-wrapper div").css('opacity', '.5');
		} else {
		    $(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its morning 7-8");

	} else if (hourNYC > 7.9 && hourNYC < 9.0){
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "8" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Take a crisp morning walk on the High Bridge. High Bridge is oldest surviving bridge in New York City, which reopened to pedestrians recently. High Bridge is a steel arch bridge that spans the Harlem River, connecting New York City’s Manhattan and The Bronx. The bridge was completed in 1848, nearly 11 years after construction began, and stands 140 feet high and over 2,000 feet long. High Bridge is a great place to just escape everyday grind and take it in slowly.");
	 	$('.box').html(letterH+letterI+letterG+letterH+letterSpace+letterB+letterR+letterI+letterD+letterG+letterE);

	 	if(hourNYC > 7.9 && hourNYC < 8.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 8.2 && hourNYC < 8.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else {
			$(".letter div, .message-wrapper div").css('opacity', '.1');
			}
		console.log("its morning 8-9");

	} else if (hourNYC > 8.9 && hourNYC < 10.0){
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "9" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Vit Old City Hall station to see a wonderful peice of history. City Hall Station is beautiful and an abandoned New York subway station from 1904, complete with chandelier. It was the very first NYC subway was built and operated by the Interborough Rapid Transit Company (IRT).However the Gustavino vaulted ceilings and skylights were lost on busy commuters, and the stop was one of the least-used in the system");
	 	$('.box').html(letterO+letterL+letterD+letterSpace+letterC+letterI+letterT+letterY+letterSpace+letterH+letterA+letterL+letterL+letterS+letterSpace+letterT+letterR+letterA+letterI+letterN+letterSpace+letterS+letterT+letterA+letterT+letterI+letterO+letterN);

	 	if(hourNYC > 8.9 && hourNYC < 9.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 9.2 && hourNYC < 9.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else{
			console.log("got here");
			$(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its morning 9-10");

	} else if (hourNYC > 9.9 && hourNYC < 11.0){

		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "10" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Experince New York's Hidden Tropical Forest. One of the most remarkable buildings in the city, this unexpected tropical oasis is just a wall away from the bustle of 43rd Street is open to the public all year long. Built in 1967, the building was designed as the home of the Ford Foundation, a humanitarian charity organization. Twelve stories high and constructed of glass and steel, the building is an oversize tropical greenhouse. In the bizarre garden lush giant trees dwarf shrubs, magnolias, and garden terraces which slope down to verdant water pools. The open-plan offices of the Ford Foundation enable workers to look out across the tropical forest into each other's offices.");
	 	$('.box').html(letterT+letterH+letterE+letterSpace+letterF+letterO+letterR+letterD+letterSpace+letterF+letterO+letterU+letterN+letterD+letterA+letterT+letterI+letterO+letterN+letterSpace+letterB+letterU+letterI+letterL+letterD+letterI+letterN+letterG);

	 	if(hourNYC > 9.9 && hourNYC < 10.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 10.2 && hourNYC < 10.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		}else{
			$(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its morning 10-11");

	} else if (hourNYC > 10.9 && hourNYC < 12.0){
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "11" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("The hotel lobby is the ideal space to work in; it's open to the public, it has free Wi-Fi and it holds an assortment of club chairs and custom-made couches that cater to any seating preference. Elegant light fixtures, a stained glass ceiling and table tops made from discarded pieces of the Hubble telescope lenses add a mixture of industrial and handmade elements. This beautiful space, adorned also with large, white columns and a vintage American flag creates a warm, inviting environment where anyone is welcome to socialize, work or wind down.");
	 	$('.box').html(letterT+letterH+letterE+letterSpace+letterA+letterC+letterE+letterSpace+letterH+letterO+letterT+letterE+letterL);

	 	if(hourNYC > 10.9 && hourNYC < 11.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 11.2 && hourNYC < 11.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		} else{
			$(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its afternoon 11-12");

	} else if (hourNYC > 11.9 && hourNYC < 13.0){
		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "12" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("Printed Matter is a very special place. Spend an hour or the whole day browsing through the large assortment of artists book which are beautifully, designed, curated, and thought-out. Founded in 1976, Printed Matter, Inc. is the world’s leading non-profit organization dedicated to the dissemination, understanding and appreciation of artists’ books and related publications. Their selection will inspire and make you want to spend the rest of the day just browsing through books.");
	 	$('.box').html(letterP+letterR+letterI+letterN+letterT+letterE+letterD+letterSpace+letterM+letterA+letterT+letterT+letterE+letterR);

	 	if(hourNYC > 11.9 && hourNYC < 12.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 12.2 && hourNYC < 12.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		} else{
			$(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its afternoon 12-1");

	} else if (hourNYC > 12.90 && hourNYC < 14.0){

		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "13" + ":" + "59" + ":" + '59');

		$('.message-wrapper').html("Grab a picnic from Eataly or a milkshake from Shake Shack and head to Madison Square Park to enjoy it while the hustle and bustle of the city is around you. Madison Square Park is a necessary oasis in the middle of Flatiron.In the summer there is plenty of shade as this park has numerous older trees providing relief from the blazing sun. Music, art installations and people watching are what will greet you at this park in the summer. The park is nicely maintained, cut grass, lovely flowers, no garbage strewn around which is a feat considering the foot traffic it gets from locals and tourists alike. Definitely a great place to take a break and watch the world go by for a few minutes.");
	 	$('.box').html(letterM+letterA+letterD+letterI+letterS+letterO+letterN+letterSpace+letterS+letterQ+letterU+letterA+letterR+letterE+letterSpace+letterP+letterA+letterR+letterK);

	 	if(hourNYC > 12.90 && hourNYC < 13.30) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 13.20 && hourNYC < 13.70) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		} else{
			$(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its afternoon 1-2");

	} else if (hourNYC > 13.9 && hourNYC < 15.0){

		$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
		var until = getDate(-3);
		$('.until-time').html( "14" + ":" + "59" + ":" + "59");

		$('.message-wrapper').html("When it is not rush hour Grand Central Terminal is not as daunting and is quite stunning. Go star gazing, grab a bite to eat, or simply watch the commuters rushing to their next destination.  The beautiful detailing and architecture in the main hall make you feel as if you are in a movie. 750,000 people pass through the terminal daily, whether to rush to one of the 600 departures of the three commuter lines or to shop or dine in some of the city’s favorite shops and restaurants, or simply to bask in an atmosphere that some find reminiscent of a great cathedral.");
	 	$('.box').html(letterG+letterR+letterA+letterN+letterD+letterSpace+letterC+letterE+letterN+letterT+letterR+letterA+letterL+letterSpace+letterT+letterE+letterR+letterM+letterI+letterN+letterA+letterL);

	 	if(hourNYC > 13.9 && hourNYC < 14.3) {
			$(".letter div, .message-wrapper div").css('opacity', '.85');
		} else if (hourNYC > 14.2 && hourNYC < 14.7) {
		  $(".letter div, .message-wrapper div").css('opacity', '.5');
		} else{
			$(".letter div, .message-wrapper div").css('opacity', '.1');
		}

		console.log("its afternoon 2-3");

		} else if (hourNYC > 14.9 && hourNYC < 16.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "15" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("Spend your late afternoon at Galerie Perrotin. wonderful gallery in the bustling Lower East Side. There were 3 floors of engaging exhibits and art. The gallery is beautifully curated, lots of white space and doesn't feel overcrowded. The scale of the gallery  enable them to continue staging ambitious projects and large-scale exhibitions. This gallery is engaging, Galerie Perrotin is an architectural beauty located in the Lower East Side. The building itself is a vast space, which makes it a perfect for an artistic escape from the bustling city.");
		 	$('.box').html(letterG+letterA+letterL+letterE+letterR+letterI+letterE+letterSpace+letterP+letterE+letterR+letterR+letterO+letterT+letterI+letterN);

		 	if(hourNYC > 14.9 && hourNYC < 15.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 15.2 && hourNYC < 15.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}

		console.log("its afternoon 3-4");

	} else if (hourNYC > 15.9 && hourNYC < 17.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "16" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("The evening lighting is perfect to discover Battery Park new carousel full of spinning, glowing fish. The SeaGlass Carousel at the Battery is housed inside a glass-paneled nautilus shell that sits atop the site of the original New York Aquarium. Constructed as a public-private project, it took ten years and several million dollars to bring its fish ashore. The SeaGlass Carousel features 30 fiberglass fish spotlighting 12 different species, and the mechanics are unique in that there's no traditional center pole. The riders have unobstructed views, the fish both spin independently, and swirl around each other. There is a changing LED light display that makes you feel like you're underwater.");
		 	$('.box').html(letterT+letterH+letterE+letterSpace+letterS+letterE+letterA+letterG+letterL+letterA+letterS+letterS+letterSpace+letterC+letterA+letterR+letterO+letterU+letterS+letterE+letterL);

		 	if(hourNYC > 15.9 && hourNYC < 16.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 16.2 && hourNYC < 16.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}

		console.log("its afternoon 4-5");

	} else if (hourNYC > 16.9 && hourNYC < 18.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "17" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("The perfect place to enjoy an affordable happy hour in a stunning environment. Hotel Hugo contains two rooftop bars connected by a stair case. These trendy rooftop bars above Hotel Hugo offers dramatic views of the Freedom Tower, Statue of Liberty, and Hudson River -- all while enjoying a properly made cocktail. The wooden deck and constellation of blown glass light fixtures lend a summery, dreamlike quality to the space. Small Italian plates are available to order from Il Principe Cucina Italiana, located downstairs, and the drinks are mixed with premium spirits and local ingredients.");
		 	$('.box').html(letterH+letterO+letterT+letterE+letterL+letterSpace+letterH+letterU+letterG+letterO);

		 	if(hourNYC > 16.9 && hourNYC < 17.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 17.2 && hourNYC < 17.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}

		console.log("its evening 5-6");

	} else if (hourNYC > 17.9 && hourNYC < 19.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "18" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("Spend your evening in Soho at Charlie Bird's. Charlie Bird's is an Italian restaurant with a charming and modern aesthetic which will make you want to stay for hours. Entree options showcase Charlie Bird's inventive recipes, such as the warm spring asparagus with hazelnuts and parmigiana, the roasted chicken with spicy arugula, and the wild ocean trout with charred onion. Pasta dishes are popular and include the rigatoni with guanciale and peas, the gnocchi rosa with basil and ricotta, and the lamb ragu pappardelle. Not only is the food expectinal but the ambiance is unlike no others.");
		 	$('.box').html(letterC+letterH+letterA+letterR+letterL+letterI+letterSpace+letterB+letterI+letterR+letterD);

		 	if(hourNYC > 17.9 && hourNYC < 18.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 18.2 && hourNYC < 18.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}

		console.log("its evening 6-7");

	} else if (hourNYC > 18.9 && hourNYC < 20.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "19" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("Dusk is absolutely stunning on the High Line. The best way to enjoy sunset at the High Line is to grab a picnic basket, complete with wine, some friends, and a blanket for when the sun sets, and post up between the greenery. More often than not, there are after dark events at the High Line, so be sure to stick around after the sun has gone. Built on a historic freight rail line and perched above the streets of Manhattan's West Side, the High Line is a public park that features a green-lined walkway.Although you may have some company on warm summer nights, the park doesn't often get super crowded.");
		 	$('.box').html(letterT+letterH+letterE+letterSpace+letterH+letterI+letterG+letterH+letterSpace+letterL+letterI+letterN+letterE);

		 	if(hourNYC > 18.9 && hourNYC < 19.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 19.2 && hourNYC < 19.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}

		console.log("its evening 7-8");

	} else if (hourNYC > 19.9 && hourNYC < 21.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "20" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("Dave and Busters is a giant arcade filled with fun oversized games. Dave and Busters not only is a fun place to bring the kids, but you can also bring your young adult kids there and enjoy a good meal and some classic and new gaming fun. They have a restaurant and bar  which you can enjoy while playing in this giant arcade.");
		 	$('.box').html(letterD+letterA+letterV+letterE+letterSpace+letterA+letterN+letterD+letterB+letterU+letterS+letterT+letterE+letterR+letterS);

		 	if(hourNYC > 19.9 && hourNYC < 20.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 20.2 && hourNYC < 20.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}

		console.log("its night 8-9");

	} else if (hourNYC > 20.9 && hourNYC < 22.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "21" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("While We Were Young Kitchen & Cocktail will make your Instagram dreams come true. NYC's pink tufted velvet banquettes and marble tables and countertops, not to mention their menu of 'Healthy Contemporary American Cuisine' is the perfect place for cocktails and a bite. The a sweet little sonnet of a cocktail menu, filled with cutely named, almost too pretty to drink concoctions that will spice up any night, and a kitchen seemingly specializing in those dishes you'll only ever eat when completely surrounded by girlfriends for fear of revealing the true monster you really are.");
		 	$('.box').html(letterW+letterH+letterI+letterL+letterE+letterSpace+letterW+letterE+letterSpace+letterW+letterE+letterR+letterE+letterSpace+letterY+letterO+letterU+letterN+letterG);

		 	if(hourNYC > 20.9 && hourNYC < 21.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 21.2 && hourNYC < 21.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}

			console.log("its night 9-10");

	} else if (hourNYC > 21.9 && hourNYC < 23.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "22" + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("Take a walk  Brooklyn Bridge is at night. It is quiet and you are not on top of tourists. It is a place to clear your mind and feel free from the crowded city. Feel the breeze brush up against your skin as you walk. Let it be a place which will take a way your stress as you look back at the glowing city lights.It is extremely safe to walk the bridge and night and you will get to enjoy the views at peace.");
		 	$('.box').html(letterB+letterR+letterO+letterO+letterK+letterL+letterY+letterN+letterSpace+letterB+letterR+letterI+letterD+letterG+letterE);
		 	if(hourNYC > 21.9 && hourNYC < 22.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 22.2 && hourNYC < 22.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}
		console.log("its night 10-11");

	} else if (hourNYC > 22.9 && hourNYC < 24.0){
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( "23" + ":"  + "59" + ":" + "59");

			$('.message-wrapper').html("Right as the weather finally warms up in NYC, head to the top of SkyLawn in Manhattan to see your favorite movies beneath the stars. Not only do you get to view iconic movies the panoramic views and stunning sunsets you can sip cocktails at the movies. At each rooftop movie you get popcorn, wireless headphones and comfy seating.");
		 	$('.box').html(letterS+letterK+letterY+letterSpace+letterL+letterA+letterW+letterN+letterA+letterT+letterSpace+letterE+letterM+letterB+letterA+letterS+letterS+letterY+letterSpace+letterS+letterU+letterI+letterT+letterE+letterS+letterSpace+letterH+letterI+letterL+letterT+letterO+letterN);
		 	if(hourNYC > 22.9 && hourNYC < 23.3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > 23.2 && hourNYC < 23.7) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}
			console.log("its night 11-12");

	} else {
			$('.current-time').html((dateNYC.getHours() + ":" + dateNYC.getMinutes() + ":" +dateNYC.getSeconds()));
			var until = getDate(-3);
			$('.until-time').html( " " + ":" + "59" + ":" + "59");

			$('.message-wrapper').html("Spend a late night at the Uncommons cafe located ing Greenwich Village. They have a vast board game library, WiFi, coffee & a seasonal menu of sandwiches & light eats. Enjoy a night working or playing games with friends.");
		 	$('.box').html(letterT+letterH+letterE+letterSpace+letterU+letterN+letterC+letterO+letterM+letterM+letterO+letterN+letterS+letterE+letterSpace+letterC+letterO);
		 	if(hourNYC > 23.9 && hourNYC < .3) {
				$(".letter div, .message-wrapper div").css('opacity', '.85');
			} else if (hourNYC > .2 && hourNYC < .8) {
			  $(".letter div, .message-wrapper div").css('opacity', '.5');
			} else{
				$(".letter div, .message-wrapper div").css('opacity', '.1');
			}
	console.log("its night 12-1 am");

	}
});
