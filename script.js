// Obtener los elementos
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const continueButton = document.getElementById('continue-btn');

// Agregar evento al botón "Continuar"
continueButton.addEventListener('click', () => {
    // Ocultar pantalla inicial
    welcomeScreen.style.display = 'none';

    // Mostrar el contenido principal
    mainContent.classList.remove('hidden');

    // Iniciar animación de corazones
    createHearts();
});

// Función para crear corazones animados
function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posición inicial aleatoria
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración de 3 a 5 segundos

        // Agregar al body
        document.body.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000); // Duración máxima de la animación
    }, 300); // Crear un corazón cada 300ms
}
