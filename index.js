const menuIcon = document.getElementById('menu-icon')
const closeIcon = document.getElementById('close-icon')

const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuBtn = document.getElementById('mobile-menu-btn')

mobileMenuBtn.addEventListener('click', () => {
    menuIcon.classList.toggle('hidden')
    closeIcon.classList.toggle('hidden')
    mobileMenu.classList.toggle('active')
})