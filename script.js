import { Calculator } from "./assets/js/calculador.js"
const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')

const operadores = {
        '.': '.',
        '+': '+',
        '*': '*',
        '÷': '÷'
}
const calc = new Calculator(input, buttons, operadores)

buttons.forEach((element) => {
        element.addEventListener('click', (e) => {
                if(/[^CE=]/g.test(e.target.innerHTML)) {
                        calc.screen(e.target.innerHTML)
                }

                if(e.target.innerHTML == '=') {
                        calc.Result()
                }

                if(e.target.innerHTML == 'C') {
                        calc.clear()
                }

                if(e.target.innerHTML == 'CE') {
                        calc.clearAll()
                }
        //        console.log(e.target.innerHTML)
                changeConvert()
                calc.blockOperadorNoInicio(e.target.innerHTML)
        })

})

function changeConvert() {
        if(input.value.includes('÷')) {
                input.value = input.value.replace('÷', '/')
        }
}
//==============================================================================================





input.addEventListener('keyup', (element) => {
        limitString(element)
         
        if(element.key == 'Enter') {
                console.log(calc.Result())
        }

        if(+element.target.value >= 0) {
               // calc.addDigit(element.target.value)
        }


})

const limitString = (key) => {
        if(input.value == '-' && key.target.value == '-') {
                input.value = ''
        }
}