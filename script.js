import { Controle, filterKeyboardInput } from "./assets/js/controle.js"
const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')

const operadores = {
        '+': '+',
        '*': '*',
        '/': '/'
}

const calc = new Controle(input, buttons, operadores)
const kay = new filterKeyboardInput(input)
buttons.forEach((element) => {
        element.addEventListener('click', (text) => {
               
                if(/[^CE=]/g.test(text.target.innerHTML)) {
                        calc.screen(text.target.innerHTML)
                }
                if(text.target.innerHTML == '=') {
                        calc.Result()
                }
                if(text.target.innerHTML == 'C') {
                        calc.clear()
                }
                if(text.target.innerHTML == 'CE') {
                        calc.clearAll()
                }
                changeConvert(text)
                calc.blockOperadorNoInicio(text.target.innerHTML)
        })

})

function changeConvert(e) {
        if(input.value.includes('÷')) {
                input.value = input.value.replace('÷', '/')
        }
}
//==============================================================================================





input.addEventListener('keydown', (element) => {
        event.preventDefault();
         
        if(element.key == 'Enter') {
                calc.Result()
                if(/.\d{3,}/g.test(input.value)) {
                        input.value = Number.parseFloat(input.value).toFixed(2);
                }
        }
        if(/[\d-+*.\/]/g.test(element.key)) {
                kay.number(element.key)
                kay.limmitPonit(element.key)
                kay.operadores(element.key)
                kay.operatorSubtraction(element.key)
                kay.limitOperatorNoStart(element.key)
                kay.changeOperator(element.key)
        }

        if(element.key === 'Backspace') {
                kay.clear()
        }
        if(element.key === 'Delete') {
                kay.clearAll(element.key)
        }
        console.log(element.key)


        
})









