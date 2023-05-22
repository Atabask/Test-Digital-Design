import { cars, phones, clocks } from './data.js'


function getDayInfo(dateString) {
    const [day, month, year] = dateString.split('.').map(Number)
    const date = new Date(year, month -1, day)


    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const dayofWeek = daysOfWeek[date.getUTCDay()];
    const weekNumber = Math.ceil((date.getDate() + 7 - date.getUTCDay()) / 7)
    const monthName = months[date.getMonth()];

    return `${dayofWeek}, ${weekNumber} неделя ${monthName} ${year} года`
}

function renderCard(categoryId, cards) {
    const categorySection = document.querySelector(`#${categoryId}`)
    const cardConteiner = document.createElement('div')
    cardConteiner.classList.add('content')


    cards.forEach(card => {
        const productCard = document.createElement('div')
        productCard.classList.add('card')
    
        const productImg = document.createElement('img')
        productImg.src = card.imageSrc
        productImg.alt = card.description
        productImg.width = 300
        productImg.height = 300
        productCard.appendChild(productImg)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productDescription = document.createElement('h3')
        productDescription.innerText = card.description
        productInfo.appendChild(productDescription)

        const dateAdded = document.createElement('p')
        dateAdded.innerText = `Дата добавления: ${getDayInfo(card.dateAdded)}`
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