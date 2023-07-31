const hamburguerBtn = document.querySelector('#hamburguer')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburguerBtn.addEventListener('click', toggleButton)