document.addEventListener('DOMContentLoaded', function () {
    let btnOpen = document.getElementById('open');
    let btnClose = document.getElementById('close');
    let navbar = document.querySelector('.container');

    btnClose.onclick = function () {
        navbar.classList.add('hide');
        this.classList.add('hide');
        btnOpen.classList.remove('hide'); // Pour afficher le bouton "Ouvrir"
    }

    btnOpen.onclick = function () {
        navbar.classList.remove('hide');
        this.classList.add('hide');
        btnClose.classList.remove('hide'); // Pour afficher le bouton "Fermer"
    }
});
