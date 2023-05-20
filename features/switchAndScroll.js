const menu = document.querySelector('.nav');
const links = document.querySelectorAll('a');

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

function switchThemes() {
    const btnSwitchThemes = document.createElement('button')
    btnSwitchThemes.innerText = 'Сменить тему'
    btnSwitchThemes.classList.add('btn-switch-themes')
    btnSwitchThemes.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')
    })
    menu.appendChild(btnSwitchThemes)
}

switchThemes()