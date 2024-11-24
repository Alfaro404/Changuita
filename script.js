// Animación de corazones
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posicionamos aleatoriamente los corazones en la pantalla
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;  // Duración aleatoria entre 3s y 6s
    
    document.getElementById('hearts-container').appendChild(heart);
  
    // Eliminar los corazones después de que se desplacen fuera de la pantalla
    setTimeout(() => {
      heart.remove();
    }, 6000); // Tiempo suficiente para completar la animación
  }
  
  // Crear corazones de manera continua
  setInterval(createHeart, 300); // Crear un corazón cada 300 ms
  