import { colors } from './data.js'

const btnsBuy = document.querySelectorAll('.btn-buy');


function openForm(e) {
    console.log('12')
    const formBuy = document.createElement('form')
    formBuy.classList.add('form-buy')

    const amountInput = document.createElement('input')
    amountInput.type = 'number'
    amountInput.min = 1
    amountInput.required = true
    amountInput.classList.add('amount-input')
    formBuy.appendChild(amountInput)

    const colorLabelHeader = document.createElement('label')
    colorLabelHeader.innerText = 'Цвет'
    formBuy.appendChild(colorLabelHeader)

    colors.forEach((color) => {
        const colorInput = document.createElement('input')
        colorInput.type = 'radio'
        colorInput.name = 'color'
        colorInput.value = color
        const colorLabel = document.createElement('label')
        colorLabel.innerText = color
        formBuy.appendChild(colorInput)
        formBuy.appendChild(colorLabel)
    })

    const commentField = document.createElement('textarea')
    commentField.max = 2000
    commentField.classList.add('comment-field')
    formBuy.appendChild(commentField)

    const btnPurchase = document.createElement('button')
    btnPurchase.type = 'submit'
    btnPurchase.innerText = 'Купить'
    btnPurchase.classList.add('btn-purchase')
    btnPurchase.addEventListener('click', () => {
        alert('Успешно!')
    })
    formBuy.appendChild(btnPurchase)


    const btnClose = document.createElement('button')
    btnClose.innerText = 'Закрыть'
    btnClose.classList.add('btn-close')
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
