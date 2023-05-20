import { colors } from '../data.js'

const btnsBuy = document.querySelectorAll('.btn-buy');


function openForm() {
    const formBuy = document.createElement('form')
    formBuy.classList.add('form-buy')

    const amountInput = document.createElement('input')
    amountInput.type = 'number'
    amountInput.value = 1
    amountInput.min = 1
    amountInput.required = true
    formBuy.appendChild(amountInput)

    const colorLabelHeader = document.createElement('label')
    colorLabelHeader.innerText = 'Цвет:'
    formBuy.appendChild(colorLabelHeader)

    colors.forEach((color) => {
        const colorInput = document.createElement('input')
        colorInput.type = 'radio'
        colorInput.name = 'color'
        colorInput.value = color
        const colorLabel = document.createElement('label')
        colorLabel.innerText = color
        colorLabel.appendChild(colorInput)
        formBuy.appendChild(colorLabel)
    })

    const commentField = document.createElement('textarea')
    commentField.maxLength = 2000
    commentField.rows = 10
    commentField.classList.add('comment-field')
    formBuy.appendChild(commentField)

    const btnPurchase = document.createElement('button')
    btnPurchase.type = 'submit'
    btnPurchase.innerText = 'Купить'
    btnPurchase.addEventListener('click', () => {
        alert('Успешно!')
    })
    formBuy.appendChild(btnPurchase)


    const btnClose = document.createElement('button')
    btnClose.innerText = 'Закрыть'
    btnClose.addEventListener('click', () => {
        formBuy.remove()
        overlay.remove()
    })
    formBuy.appendChild(btnClose)


    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.appendChild(formBuy)
    document.body.appendChild(overlay)
    
}

btnsBuy.forEach(btn => {
    btn.addEventListener('click', openForm)
});