VanillaTilt.init(document.querySelectorAll('.box', {
    max: 20,
    speed: 300,
    scale: 1.1,
    easing: "cubic-bezier(.032, .98, 52, .99"
}))


const icon = document.querySelector('.mode-switch');

icon.addEventListener('click', () => {
    document.documentElement.classList.toggle("white")
    icon.classList.toggle("active")
})