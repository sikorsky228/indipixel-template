'use strict'

var sliderWidth = 329;
var n=1;//first slide
var slider = document.querySelector('.phone-slider');
var totalSlides = document.querySelectorAll('.phone-slider .slide');
var startSlide = setInterval(nextSlide,3000);

function nextSlide(){
	if(n<totalSlides.length){
		slider.style.left = "-"+sliderWidth*n+"px";
		n++;//next slide increment
	}else{
		slider.style.left = 0;
		n = 1;//go to first slide
	}
}