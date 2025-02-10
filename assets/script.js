const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Appeler les éléments
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');


let numberSlides = slides.length;

let i = 0; // Initialisation 

function slideImg(direction) {
	if (direction == 'right') {
		if (i < numberSlides - 1) {
			i++;
		}
		else {
			i = 0;
		}

	} else if (direction == 'left'){
		if (i > 0) {
			i--;
		}
		else {
			i = numberSlides - 1;
		}
	}
	updateSlider(i);
}

function updateSlider(index) {
	let slide = slides[index]

	// Change l'image //
	const banner_img = document.querySelector('.banner-img');
	banner_img.src = "./assets/images/slideshow/" + slide.image;

	// Change le texte
	const banner_txt = document.querySelector ('#banner p');
	banner_txt.innerHTML = slide.tagLine;

	// Change dots //
	const dots = document.querySelectorAll('.dot');
	dots.forEach(function(dot, indexDot) {
		dot.classList.remove("dot_selected");
		if (indexDot == index) {
			dot.classList.add("dot_selected");
		}
	});

	console.log(dots);
}

// EventListener
leftArrow.addEventListener('click',function(){
	slideImg('left');
});

rightArrow.addEventListener('click', function(){
	slideImg('right');
});
