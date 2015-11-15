//establish the default window state
var windowState = 'large';

//check to see if the screen is smaller than 769 pixels
$(document).ready(function() {
    var sw = document.body.clientWidth;
    if (sw < 769) {
       smScreen();
    }
})
// take care of resizing the window
$(window).resize(function() {
	var sw = document.body.clientWidth;
    if (sw < 769 && windowState == 'large') {
       smScreen();
    } 
	if (sw > 768 && windowState == 'small') {
		lgScreen();
	}
});
//convert list menus to select elements
function smScreen() {
	//find the ul you wish to change
    $('nav.archives ul').each(function() {
		//add a select element
        var $select = $('<select />');
		//add an initial choice for the select element and assign its attributes
		var $initial = $('<option>Choose a gallery</option>');
		$initial.attr({
			value: '#',
			selected: 'selected'
		});
		//add the initial choice to the select element
		$select.append($initial);
		//populate the select element with links from the list menu
        $(this).find('a').each(function() {
			//go through each link and create an option in the select for each one
            var $option = $('<option />');
			//populate the option with data from the links
            $option.attr('value', $(this).attr('href')).html($(this).html());
			$option.attr('title', $(this).attr('title'));
			//add each option to the select element
            $select.append($option);
        });
		//when an option is selected, navigate to the selected page
		$select.change(function() {
  window.location = $(this).find("option:selected").val();
});
		//target the ul and replace it with the generated select element
        $(this).replaceWith($select);
    });
	 //set the current window state to small
      windowState = 'small';
  };
//convert select elements to list menus
function lgScreen() {
	//target the select menu
   $('nav.archives select').each(function() {
	   		//remove the initial selection option
		    $(this).find(':first-child').remove();
			//create an unordered list
		   var $ul = $('<ul />');
		   //go through the select and cycle through each option
		   $(this).find('option').each(function() {
			   //for each option create a li and an anchor
			   var $li = $('<li />');
			   var $a = $('<a />');
			   //populate the anchor attributes from the option
			   $a.attr('href', $(this).attr('value')).html($(this).html());
			   $a.attr('title', $(this).attr('title'));
			   //add the li and anchors to the ul
			   $ul.append($li);
			   $li.append($a);
		   });
		   //replace the select with the generated ul
		   $(this).replaceWith($ul);
	   });
	   //set the current window state
	   windowState = 'large';
  };