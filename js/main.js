const menuButton = document.querySelector('#menu-toggle');
const menuLines = document.querySelectorAll('.line');
const menuModal = document.querySelector('#menu-overlay');

menuButton.addEventListener('click', function() {
    if (menuModal.classList.contains('open')) {
        menuLines.forEach(function(el) {
            el.classList.remove('open')
        })
        menuModal.classList.remove('open')
    }
    else {
        menuLines.forEach(function(el) {
            el.classList.add('open')
        })
        menuModal.classList.add('open')
    }
})