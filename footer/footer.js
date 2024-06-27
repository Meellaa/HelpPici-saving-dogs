function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    fetch('/footer/footer.html') // Calea către fișierul footer.html
        .then(response => response.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Apelează funcția când pagina este complet încărcată
document.addEventListener("DOMContentLoaded", function() {
    loadFooter();
});