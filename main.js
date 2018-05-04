// JAVASCRIPT FILE

$(document).ready(function(){

	$('span').hide();


	$('div').mouseover(function(){
		$(this).css("background-color", "yellow");
		$('span').slideDown();
	})

	$('div').mouseleave(function(){
		$(this).css("background-color", "white");
		$('span').slideUp();
	})



})
