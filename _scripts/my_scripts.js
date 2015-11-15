var windowsState = 'large';

$(document).ready(function() {
	
	var sw = document.body.clientWidth;
	if(sw < 768 && windowsState == 'large'){
		smScreen();
	}
	if(sw > 768 && windowsState == 'small'){
		lgScreen();	
	}
	
	$(window).resize(function() {
        sw = document.body.clientWidth;
		if(sw < 768 && windowsState == 'large'){
			smScreen();
		}
		if(sw > 768 && windowsState == 'small'){
			lgScreen();	
		}
    });

	
});

//contert list menus to select elements
function smScreen(){
	//find nav that we want to transform
	$('nav.archives ul').each(function() {
	    $select = $('<select/>');
		//adding inittianal choice
		var $initial = $('<option>Choose gallery</option>');
		
	    $initial.attr({value :'#',selected :'selected'});
		
		$select.append($initial);
		//getting all list
		$(this).find('a').each(function() {
            
			var $option = $('<option/>')
			$option.attr('value',$(this).attr('href')).html($(this).html());
			$option.attr('title',$(this).attr('title'));
			$select.append($option);
        });
        
        
        $select.change(function(){
	        
	        window.location = $(this).find("option:selected").val();
        });
        
        $(this).replaceWith($select);		
		        
    });//each
	
	//set current window state
	windowsState = 'small';
}

//convert select to list
function lgScreen(){
	
	$('nav.archives select').each(function() {
        
		$(this).find(':first-child').remove();		
		var $ul = $('<ul/>');
		
		$(this).find('option').each(function() {
            
			var $li = $('<li/>');
			var $a = $('<a/>');
			
			$a.attr('href',$(this).attr('value')).html($(this).html());
			$a.attr('title',$(this).attr('title'));
			
			$li.append($a);
			$ul.append($li);
        });
		
		$(this).replaceWith($ul);
    });
	
	windowsState = 'large';
}
