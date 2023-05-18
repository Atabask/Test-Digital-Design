import { cars, phones, clocks } from './data.js'

function getDayInfo(dateString) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

    const date = new Date(dateString)
    const dayOfWeek = daysOfWeek[date.getDay()]
    const weekNumber = Math.ceil(date.getDay() / 7)
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`
}

function renderCard(categoryId, cards) {
    const categorySection = document.querySelector(`#${categoryId}`)
    const cardConteiner = document.createElement('div')
    cardConteiner.classList.add('content')


    cards.forEach(card => {
        const productCard = document.createElement('div')
        productCard.classList.add('card')
    
        const productImg = document.createElement('img')
        productImg.src = card.imgSrc
        productImg.alt = card.description
        productCard.appendChild(productImg)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productDescription = document.createElement('h3')
        productDescription.innerText = card.description
        productInfo.appendChild(productDescription)

        const dateAdded = document.createElement('p')
        dateAdded.classList.add('date-added')
        dateAdded.innerText = `Дата добавления: ${getDayInfo(card.date)}`
        productInfo.appendChild(dateAdded)

        const btnBuy = document.createElement('button')
        btnBuy.classList.add('btn-buy')
        btnBuy.innerText = 'Купить'
        productInfo.appendChild(btnBuy)

        productCard.appendChild(productInfo)
        cardConteiner.appendChild(productCard)
    })

    categorySection.appendChild(cardConteiner)

}

renderCard('cars', cars)
renderCard('phone', phones)
renderCard('clocks', clocks)