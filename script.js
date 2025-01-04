// Fișierul script.js
window.onload = function() {
    // Exemplu de schimbare a textului reclamei la fiecare 5 secunde
    setInterval(function() {
        const adElement = document.querySelector(".advertisement p");
        adElement.textContent = "🔥 Reducere extra! 10% reducere la plata cash! 🔥";
    }, 5000);  // Schimbă reclama la fiecare 5 secunde
};
