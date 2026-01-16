document.getElementById("whatsappBtn").addEventListener("click", () => {
  const phone = "5491158920330"; // tu WhatsApp
  const text = encodeURIComponent("Hola, quiero más información");
  window.location.href = `https://wa.me/${phone}?text=${text}`;
});
