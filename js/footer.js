// Lädt den Footer-Inhalt aus footer.html und fügt ihn in das Footer-Element ein
fetch('js/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

