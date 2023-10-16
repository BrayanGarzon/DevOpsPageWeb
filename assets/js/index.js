// Establece la fecha objetivo de la cuenta regresiva (puedes ajustar esta fecha)
const targetDate = new Date('2023-11-10 00:00:00').getTime();

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.getElementById('countdown').innerHTML = '¡El tiempo ha terminado!';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `
            <div> ${days} <br> Días</div>
            <div> ${hours} <br> Horas</div>
            <div> ${minutes} <br> Minutos</div>
            <div> ${seconds} <br> Segundos</div>
        `;
    }
}

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Llama a la función para que se ejecute inmediatamente
updateCountdown();
