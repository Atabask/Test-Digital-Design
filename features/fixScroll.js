const menu = document.querySelector('.nav');
const links = menu.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', clickHandler)
})

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href')
    const offsetTop = document.querySelector(href).offsetTop - menu.offsetHeight

    window.scrollTo({
            top: offsetTop,
            behavior:'smooth'
        })
}