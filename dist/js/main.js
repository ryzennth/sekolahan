document.addEventListener("DOMContentLoaded", function() {
  fetch('_navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;   
    });
});

document.addEventListener("DOMContentLoaded", function() {
  fetch('_footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;   
    });
});