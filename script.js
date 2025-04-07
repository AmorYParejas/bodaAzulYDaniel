   // Countdown Timer
   const targetDate = new Date('2025-07-19T12:15:30');
   const countdownElement = document.getElementById('countdown');

   function updateCountdown() {
       const now = new Date();
       const difference = targetDate - now;

       // Limpiar contenido previo del contador
       countdownElement.innerHTML = '';

       if (difference > 0) {
           // Calcular tiempo restante
           const days = Math.floor(difference / (1000 * 60 * 60 * 24));
           const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
           const minutes = Math.floor((difference / (1000 * 60)) % 60);
           const seconds = Math.floor((difference / 1000) % 60);

           // Crear y agregar elementos `p` para cada unidad de tiempo

           
           const daysElement = document.createElement('p');
           daysElement.textContent = `Días: ${days}`;
           countdownElement.appendChild(daysElement);

           const hoursElement = document.createElement('p');
           hoursElement.textContent = `Horas: ${hours}`;
           countdownElement.appendChild(hoursElement);

           const minutesElement = document.createElement('p');
           minutesElement.textContent = `Minutos: ${minutes}`;
           countdownElement.appendChild(minutesElement);

           const secondsElement = document.createElement('p');
           secondsElement.textContent = `Segundos: ${seconds}`;
           countdownElement.appendChild(secondsElement);
       } else {
           // Mostrar mensaje cuando la fecha haya llegado
           const messageElement = document.createElement('p');
           messageElement.textContent = '¡Ha llegado el gran día!';
           countdownElement.appendChild(messageElement);
       }
   }

   setInterval(updateCountdown, 1000);


//Funcionalidad del  formulario
  document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de forma tradicional

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const phone = 7472224438;

    // Crear el mensaje para WhatsApp
    const whatsappMessage = `Hola, somos la familia ${encodeURIComponent(name)}.  Mensaje: Recibimos tu invitación y estaremos felices de acompañarlos`;

    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/52${phone}?text=${whatsappMessage}`;

    // Redirigir al enlace de WhatsApp
    window.open(whatsappURL, '_blank');
  });


//Modales

function abrirModal(numero){
    if(numero == 1){
        const modal1 = document.getElementById("modal1");
        modal1.classList.remove("ocultar-modal");
        modal1.classList.add("modal");
    }
    if(numero == 2){
        const modal2 = document.getElementById("modal2");
        modal2.classList.remove("ocultar-modal");
        modal2.classList.add("modal");
    }
}

function cerrarModal(numero){
    if(numero == 1){
        const modal1 = document.getElementById("modal1");
        modal1.classList.remove("modal");
        modal1.classList.add("ocultar-modal");
    }
    if(numero == 2){
        const modal2 = document.getElementById("modal2");
        modal2.classList.remove("modal");
        modal2.classList.add("ocultar-modal");
    }
}
