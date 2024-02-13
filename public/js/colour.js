$(document).ready(function () {

    colourText();

	$(document).on("mouseenter mouseleave", ".textColour",
	  function() {
		$( this ).css("color", getRandomColour());
	  }
	);
	
});

function colourText() {

	//for each jsColour class set a new colour
	$('.textColour').each(function( index ) {
	  $(this).css("color", getRandomColour());
	});

};

function getRandomColour() {

    var letters = '0123456789ABCDEF'.split('');
	//get a random colour 
	//not even
	
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.round(Math.random() * (letters.length - 1))];
    }
    return colour;
	
}


