var menu = document.querySelector('.menu')
var header = document.querySelector('.header')
var navIcons = document.querySelectorAll('.nav-icons')
var navFooter = document.querySelector('.nav-footer')
var navSpan = document.querySelectorAll('.nav-span.opacited')
var logoMenu = document.querySelector('.logo')
var footerContainer = document.querySelector('.footer-container')
var footerLogout = document.querySelector('.logout')

menu.addEventListener('click', () => {
    header.classList.contains('desactived') ? (
        menu.style.justifyContent = 'space-between',
        header.style.width = '280px',
        navIcons.forEach(element => {
            element.style.width = '96%'}),
        navFooter.style.paddingRight = '15px',
        navSpan.forEach(element => {
            element.style.opacity = '1'}),
        logoMenu.style.display = 'block',
        footerContainer.style.opacity = '1',
        header.classList.remove('desactived'),
        header.classList.add('actived')
    ) : (
        menu.style.justifyContent = 'flex-end',
        header.style.width = '70px',
        navIcons.forEach(element => {
            element.style.width = '85%'}),
        navFooter.style.paddingRight = '25px',
        navSpan.forEach(element => {
            element.style.opacity = '0'}),
        logoMenu.style.display = 'none',
        footerContainer.style.opacity = '0',
        header.classList.remove('actived'),
        header.classList.add('desactived')
    )
})