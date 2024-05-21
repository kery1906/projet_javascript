// // Initialiser l'index courant des diapositives à 0
// let currentIndex = 0;

// // Sélectionner tous les éléments avec la classe "carousel-item"
// const items = document.querySelectorAll(".carousel-item");

// // Obtenir le nombre total d'éléments dans le carrousel
// const totalItems = items.length;

// /**
//  * Afficher la diapositive à l'index spécifié
//  * @param {number} index - L'index de la diapositive à afficher
//  */
// function showSlide(index) {
//     // Parcourir tous les éléments du carrousel
//     items.forEach((item, i) => {
//         // Retirer la classe 'active' de tous les éléments
//         item.classList.remove('active');
//         // Ajouter la classe 'active' à l'élément correspondant à l'index donné
//         if (i === index) {
//             item.classList.add('active');
//         }
//     });
//     // Mettre à jour l'index courant avec le nouvel index
//     currentIndex = index;
// }

// /**
//  * Passer à la diapositive suivante
//  */
// function nextslide() {
//     // Calculer l'index de la prochaine diapositive
//     let nextIndex = (currentIndex + 1) % totalItems;
//     // Afficher la prochaine diapositive
//     showSlide(nextIndex);
// }

// /**
//  * Revenir à la diapositive précédente
//  */
// function prevslide() {
//     // Calculer l'index de la diapositive précédente
//     // Utiliser une correction modulo pour gérer l'index négatif
//     let prevIndex = (currentIndex - 1 + totalItems) % totalItems;
//     // Afficher la diapositive précédente
//     showSlide(prevIndex);
// }

// /**
//  * Démarrer le défilement automatique des diapositives
//  */
// function autoSlide() {
//     // Définir un intervalle pour appeler la fonction nextslide toutes les 3000 millisecondes (3 secondes)
//     setInterval(nextslide, 3000);
// }

// // Appeler la fonction autoSlide pour démarrer le défilement automatique des diapositives
// autoSlide();









	// Access the Images
	let slideImages = document.querySelectorAll('img');
	// Access the next and prev buttons
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	// Access the indicators
	let dots = document.querySelectorAll('.dot');

	var counter = 0;

	// Code for next button
	next.addEventListener('click', slideNext);
	function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	indicators();
	}

	// Code for prev button
	prev.addEventListener('click', slidePrev);
	function slidePrev(){
	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
	if(counter == 0){
		counter = slideImages.length-1;
	}
	else{
		counter--;
	}
	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
	indicators();
	}

	// Auto slideing
	function autoSliding(){
		deletInterval = setInterval(timer, 2000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();

	// Stop auto sliding when mouse is over
	const container = document.querySelector('.slide-container');
	container.addEventListener('mouseover', function(){
		clearInterval(deletInterval);
	});

	// Resume sliding when mouse is out
	container.addEventListener('mouseout', autoSliding);

	// Add and remove active class from the indicators
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}

	// Add click event to the indicator
	function switchImage(currentImage){
		currentImage.classList.add('active');
		var imageId = currentImage.getAttribute('attr');
		if(imageId > counter){
		slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(imageId == counter){
			return;
		}
		else{
		slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
		}
		indicators();
	}