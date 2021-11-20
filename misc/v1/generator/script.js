var adjectives = ['little','lovely','squishy','smiley','cuddly','snuggly','sweet','perfect','peachy','kissy','dorky','wonderful','beautiful','giggly','warm'];

var animals = ['panda','bear','pup','duckling','lobster','mouse','bird','bug','penguin','bunny', 'fishy','cuddlefish','caterpillar','guppy','squirrel','deer','monkey','dove','fox','koala','goose','lamb'];

var fruits = ['apple','apricot','banana','blueberry','cherry','cherry','coconut','fig','gooseberry','kiwi','kumquat','mango','olive','nectarine','clementine','tangerine','peach','pear','plum','pumpkin','pineapple','tomato','lemon','artichoke','jujube','squash'];

var desserts = ['cake','pie','tart','cupcake','doughnut','honey','meringue','waffle','pancake','jelly bean','oreo','muffin','sugar'];

var foods = ['taco','burrito','dumpling','peanut','noodles','fortune cookie','nutmeg','pork chop'];

var nouns = ['giggles','gangsta','buttercup','cuddle','munchkin','snuggles','nugget','sweetie','love','pants','face','baby','num num','dear','muppet','star','angel','umbrella','love','snoopy','darling','boo'];

var masterNouns = ['giggles', 'gangsta', 'buttercup', 'cuddle', 'munchkin', 'snuggles', 'nugget', 'sweetie', 'love', 'pants', 'face', 'baby', 'num num', 'dear', 'muppet', 'star', 'angel', 'love', 'taco', 'burrito', 'dumpling', 'peanut', 'noodles', 'fortune cookie', 'nutmeg', 'pork chop', 'cake', 'pie', 'tart', 'cupcake', 'doughnut', 'honey','meringue', 'waffle', 'pancake', 'jelly bean', 'oreo', 'muffin', 'sugar', 'apple', 'apricot', 'banana', 'blueberry', 'cherry', 'cherry', 'coconut', 'fig', 'gooseberry', 'kiwi', 'kumquat', 'mango', 'olive', 'nectarine', 'clementine', 'tangerine', 'peach', 'pear', 'plum', 'pumpkin', 'pineapple', 'tomato', 'lemon', 'artichoke', 'snoopy','jujube', 'umbrella','squash','darling','fox','koala','goose','boo','lamb'];

var pictures = ['calvin-1.jpg','birds.jpg','mountains.jpg','charlie-1.jpg','flowers.jpg','calvin-2.png',];

var typeWriter = function(typeClass, text, n) {
  if (n < (text.length)) {
    $(typeClass).html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(typeClass, text, n)
    }, 90);
  }
}

var main = function() {
	$('.picture').fadeIn(1500);
	$('.hidden').delay(2000).fadeIn(2000);

	var text = $('.for-arian').data('text');
	typeWriter('.for-arian',text, 0);

	var firstActive=false;
	var firstLastClicked = '';
	var secondActive=false;
	var secondLastClicked = '';
	var nicknameText = '';

	$('.first li').click(function(){
		$('.first li').removeClass('selected');
		if(firstActive==true && firstLastClicked==$(this).attr('id')) {
			firstActive=false;
			firstLastClicked='';
			$(this).removeClass('selected');
		} else {
			firstActive=true;
			firstLastClicked=$(this).attr('id');
			$(this).addClass('selected');	
		}
	});

	$('.second li').click(function(){
		$('.second li').removeClass('selected');
		if(secondActive ==true && secondLastClicked==$(this).attr('id')) {
			secondActive =false;
			secondLastClicked ='';
			$(this).removeClass('selected');
		} else {
			secondActive =true;
			secondLastClicked =$(this).attr('id');
			$(this).addClass('selected');	
		}
	});

	$('button').click(function(){
		switch(firstLastClicked){
      			case 'pronoun':
				nicknameText ='my ';
				break;
			case 'adjective':
				nicknameText = adjectives[Math.floor((Math.random() * (adjectives.length-1)) + 0)] + ' ';
				break;
			case 'noun':
				nicknameText = masterNouns[Math.floor((Math.random() * (masterNouns.length-1)) + 0)] + ' ';
				break;
			default:
				var random = Math.floor((Math.random() * 3) + 1);
				if(random === 1) {
					nicknameText ='my ';
				} else if(random === 2) {
					nicknameText = adjectives[Math.floor((Math.random() * (adjectives.length-1)) + 0)] + ' ';	
				} else {
					nicknameText = masterNouns[Math.floor((Math.random() * (masterNouns.length-1)) + 0)] + ' ';	
					
				}
				break;			
   		}

		switch(secondLastClicked){
      			case 'animal':
				nicknameText = nicknameText.concat(animals[Math.floor((Math.random() * (animals.length-1)) + 0)]);
				break;
			case 'fruit':
				nicknameText = nicknameText.concat(fruits[Math.floor((Math.random() * (fruits.length-1)) + 0)]);
				break;
			case 'dessert':
				nicknameText = nicknameText.concat(desserts[Math.floor((Math.random() * (desserts.length-1)) + 0)]);
				break;
			case 'food':
				nicknameText = nicknameText.concat(foods[Math.floor((Math.random() * (foods.length-1)) + 0)]);
				break;
			case 'noun':
				nicknameText = nicknameText.concat(nouns[Math.floor((Math.random() * (nouns.length-1)) + 0)]);
				break;
			default:		
				nicknameText = nicknameText.concat(masterNouns[Math.floor((Math.random() * (masterNouns.length-1)) + 0)]);
				break;		
   		}
		typeWriter('.nickname', nicknameText, 0);
		var currentPic = $('.picture').attr('src');
		var newPic = pictures[Math.floor((Math.random() * (pictures.length-1)) + 0)];
		while(currentPic === newPic) {
		  newPic = pictures[Math.floor((Math.random() * (pictures.length-1)) + 0)];
		} 
		$('.picture').attr('src', newPic);
		nicknameText='';
	});
};

$(document).ready(main);
