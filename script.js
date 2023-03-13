import { Controle } from "./assets/js/controle.js"
const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')

const operadores = {
        '+': '+',
        '*': '*',
        '/': '/'
}

const calc = new Controle(input, buttons, operadores)
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
        
         
        if(element.key == 'Enter') {
                calc.Result()
        }

        replaceOperator(element.key)
        excludeLetters()
        avoidRepeatSubtraction()
        blockSomeOperations()
        deleteRepeat()
        deleteStitchRepeats()
        limitZeroNoStart()
})



function excludeLetters(element) {
        if(/[a-zA-Z]+/g.test(input.value)) {
                eraseAll()
        }
}

function avoidRepeatSubtraction() {
        if(/^[-]{2,6}/g.test(input.value)) {
                deleteRepeats()
        }
}

function blockSomeOperations() {
        if(/^[+*\/]/g.test(input.value) || /^[-]\W/g.test(input.value)) {
                eraseAll()
        }
}

function replaceOperator(element) {
        if(/\d[\/*+-]{2}/g.test(input.value)) {
               changeOperator()
        }
}

function deleteRepeat() {
        if(/[\/*+-]{2,}/g.test(input.value)) {
                eraseAll()
        }
}
function deleteStitchRepeats() {
        if(/[.]{2,6}/g.test(input.value)) {
                deletePoint()
        }
}

function limitZeroNoStart() {
        if(/^[0]{2,}/g.test(input.value)) {
                deletePoint()
        }
}




function deleteRepeats() {
        input.value =  input.value.slice(0,-1)
}

function eraseAll() {
        input.value = ''
}

function swapOperators(element) {
        input.value =  input.value.slice(0,-1)
}

function changeOperator() {
        input.value = input.value.slice(0,-2) + element 
}

function deletePoint() {
        input.value = input.value.slice(0,-1)
}

function limitZero() {

}




