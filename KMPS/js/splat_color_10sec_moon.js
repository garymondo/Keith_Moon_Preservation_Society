// JavaScript Document

	

	
	/*var r = fill;
	var g = color;
	var b = color;*/
	
	function randomColor(){
 r = Math.floor(Math.random() * (230));
 g = Math.floor(Math.random() * (230));
 b = Math.floor(Math.random() * (230));
 jQuery(".cls-2,.cls-4").css('fill','rgb('+r+','+g+','+b+')');

}


function randomColor2(){
 r = Math.floor(Math.random() * (255));
 g = Math.floor(Math.random() * (255));
 b = Math.floor(Math.random() * (255));
 a = Math.floor(Math.random() * (255));
    jQuery(".cls-2_shade").css('fill','rgba('+r+','+g+','+b+', '+.5+')');
/*    jQuery(".cls-1_shade").css('opacity') = '0.5';
*/
}

function randomColor3(){
 r = Math.floor(Math.random() * (200));
 g = Math.floor(Math.random() * (200));
 b = Math.floor(Math.random() * (200));
    jQuery(".cls-2_clothes").css('fill','rgb('+r+','+g+','+b+')');

}


function randomColor4(){

 r = Math.floor(Math.random() * (235));
 g = Math.floor(Math.random() * (235));
 b = Math.floor(Math.random() * (235));
    jQuery(".cls-1_bkg").css('fill','rgb('+r+','+g+','+b+')');

}




jQuery(document).ready(function(){
 randomColor();
 var circle_200 = setInterval(randomColor,5000);
  randomColor2();
 var circle_60 = setInterval(randomColor2,5000);
 randomColor3();
  var circle_125 = setInterval(randomColor3,5000);
 randomColor4();
  var bkg_unit = setInterval(randomColor4,5000);
});


jQuery(document).ready(function(){
		    jQuery(".Face_shade").css('opacity') = '0.2';


});
