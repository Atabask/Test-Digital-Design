const backToTopBtn = document.getElementById('btn-back-to-top')

function handleScroll() {
    if (window.pageYOffset > 100) {
        backToTopBtn.style.display = 'block'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

function handleBackToTopClick() {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}

window.addEventListener('scroll', handleScroll)
backToTopBtn.addEventListener('click', handleBackToTopClick)