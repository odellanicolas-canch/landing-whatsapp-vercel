document.getElementById("whatsappBtn").addEventListener("click", () => {
  const phone = "5491158920330"; // tu WhatsApp real
  const text = encodeURIComponent("Hola, quiero recibir información");
  window.location.href = `https://wa.me/${phone}?text=${text}`;
});
