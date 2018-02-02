$(document).ready(main);

var contador=1;

function main(){
	$('.menu_bar').click(function(){
		/*$('nav').toggle();*/

		if(contador==1){ // nav oculto
			$('nav').animate({
				left:'0'
			});
			contador=0;
		}else{
			// nav ocultar
			$('nav').animate({
				left:'-100%'
			})
			contador=1;
		}

	});

};

$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	    }, 1);
    });