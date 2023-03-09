import { Calculator } from "./assets/js/calculador.js"
const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')

const operadores = {
        '+': '+',
        '*': '*',
        '/': '/'
}

const calc = new Calculator(input, buttons, operadores)
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
        if(/[(\/*\+)]/g.test(input.value[0])  || /[a-zA-Zçá-ú_#$%&,><|]/g.test(input.value) || /\d([+-\/*]){2,6}/g.test(input.value) || /-{2}/g.test(input.value) || /[*+]{1,6}/g.test(input.value[0])) {
                input.value = input.value.slice(-1)
        }

        if(/^[*\/+]{1,6}/g.test(input.value[0])) {
                input.value = ''
        }
check()
   console.log(key.key)    

}

class toCheck = {
        constructor() {

        }
}

const check = new toCheck()

