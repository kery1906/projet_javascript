// Initialiser l'index courant des diapositives à 0
let currentIndex = 0;

// Sélectionner tous les éléments avec la classe "carousel-item"
const items = document.querySelectorAll(".carousel-item");

// Obtenir le nombre total d'éléments dans le carrousel
const totalItems = items.length;

/**
 * Afficher la diapositive à l'index spécifié
 * @param {number} index - L'index de la diapositive à afficher
 */
function showSlide(index) {
    // Parcourir tous les éléments du carrousel
    items.forEach((item, i) => {
        // Retirer la classe 'active' de tous les éléments
        item.classList.remove('active');
        // Ajouter la classe 'active' à l'élément correspondant à l'index donné
        if (i === index) {
            item.classList.add('active');
        }
    });
    // Mettre à jour l'index courant avec le nouvel index
    currentIndex = index;
}

/**
 * Passer à la diapositive suivante
 */
function nextslide() {
    // Calculer l'index de la prochaine diapositive
    let nextIndex = (currentIndex + 1) % totalItems;
    // Afficher la prochaine diapositive
    showSlide(nextIndex);
}

/**
 * Revenir à la diapositive précédente
 */
function prevslide() {
    // Calculer l'index de la diapositive précédente
    // Utiliser une correction modulo pour gérer l'index négatif
    let prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    // Afficher la diapositive précédente
    showSlide(prevIndex);
}

/**
 * Démarrer le défilement automatique des diapositives
 */
function autoSlide() {
    // Définir un intervalle pour appeler la fonction nextslide toutes les 3000 millisecondes (3 secondes)
    setInterval(nextslide, 3000);
}

// Appeler la fonction autoSlide pour démarrer le défilement automatique des diapositives
autoSlide();
