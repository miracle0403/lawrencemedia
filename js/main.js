$(document).ready(function(){
	
	var div = $("#about");
	//Take the current position (vertical position from top) of your div in the variable
	var pos = div.position();
	$(window).scroll(function () {
		if ($(document).scrollTop() > 10){
			//animate
			div.slideUp()
		}
	});
}