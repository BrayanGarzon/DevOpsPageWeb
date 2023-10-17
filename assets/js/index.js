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
            <div> <strong>${days}</strong> <br> Días</div>
            <div> <strong>${hours}</strong> <br> Horas</div>
            <div> <strong>${minutes}</strong> <br> Minutos</div>
            <div> <strong>${seconds}</strong> <br> Segundos</div>
        `;
    }
}

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Llama a la función para que se ejecute inmediatamente
updateCountdown();






//SCROLL SUAVE NAVBAR AL ID DE CADA SECCION
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});







//SCROLL SUAVE CON BOTON DE SUBIR

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    scrollToTopBtn.addEventListener("click", function () {
        scrollToTop(500); // Ajusta la velocidad (en milisegundos)
    });

    function scrollToTop(duration) {
        const start = window.pageYOffset;
        const distance = 0 - start;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsedTime = currentTime - startTime;
            const scroll = easeInOut(elapsedTime, start, distance, duration);

            window.scrollTo(0, scroll);

            if (elapsedTime < duration) {
                requestAnimationFrame(step);
            }
        }

        function easeInOut(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(step);
    }

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
});
  