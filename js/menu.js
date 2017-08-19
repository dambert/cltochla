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