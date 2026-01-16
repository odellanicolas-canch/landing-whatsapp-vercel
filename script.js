// Botón WhatsApp
document.getElementById("whatsappBtn").addEventListener("click", () => {
  const phone = "5491135725807"; // TU número real
  const text = encodeURIComponent(
    "Hola, quiero activar el bono de bienvenida del casino 🎰"
  );
  window.location.href = `https://wa.me/${phone}?text=${text}`;
});

// Countdown fake (urgencia)
let time = 300; // 5 minutos

const timerEl = document.getElementById("timer");

setInterval(() => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;
  if (time > 0) time--;
}, 1000);
