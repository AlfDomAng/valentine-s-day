// Configura la fecha objetivo (14 de febrero)
const targetDate = new Date("February 14, 2025 00:00:00").getTime();

// Actualiza el contador cada segundo
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcula días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el contador en el elemento con id "timer"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si el contador llega a cero, muestra un mensaje
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "¡Feliz San Valentín!";
    }
}, 1000);

// Maneja el clic en el botón "Sí"
document.getElementById("yesBtn").addEventListener("click", function() {
    alert("¡Yay! ¡Eres mi San Valentín! ❤️. Eres mi todo corazón de melón. Te amo❤️");
});

// Maneja el clic en el botón "No"
document.getElementById("noBtn").addEventListener("click", function() {
    alert("¡Oh no! Por favor, cambia de opinion o te funo 👺");
});