const classNameInput = document.querySelector('#class-name')
const shadowInput = document.querySelector('#shadow')
const shadowGeneratorBtn = document.querySelector('button')
const containerCssCode = document.querySelector('#containerCssCode')


function shadowGenerator(event) {
    event.preventDefault()

    let classNameInputValue = classNameInput.value
    let shadowInputValue = shadowInput.value

    let decimalNumberRegex = /^[-+]?(\d*\.)?\d+$/ //check value of shadowInput

    if (decimalNumberRegex.test(shadowInputValue)) {
        containerCssCode.style.display = 'block'
        containerCssCode.value = `
.${classNameInputValue} {
    box-shadow: ${shadowInputValue}px
 }`
    } else {
        alert('سایز سایه شما معتبر نمی باشد')
    }

}


shadowGeneratorBtn.addEventListener('click', shadowGenerator)