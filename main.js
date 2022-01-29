const burgericon = document.getElementsByClassName('burger-icon')[0]
const navul = document.getElementsByClassName('nav-ul')[0]

burgericon.addEventListener('click', () => {
    navul.classList.toggle('active')
})