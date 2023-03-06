const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')
const operadores = {
        '.': '.',
        '-': '-',
        '+': '+',
        '/': '/'
}


buttons.forEach((element) => {
        element.addEventListener('click', (e) => {
                input.value += e.target.innerHTML

                if(+e.target.innerHTML >= 0) {
                        input.value += +e.target.innerHTML
                        
                }

                if(input.value == '+' && e.target.innerHTML == '+') {
                       input.value = ''
                }
        })
})



input.addEventListener('keyup', (e) => {
        limitString(e)
         
        console.log(e.code, input.value.length)
        



})

const limitString = (key) => {
        if(input.value == '-' && key.target.value == '-') {
                input.value = ''
                // console.log(screens.value = screens.value.slice(-1) )
        }
}