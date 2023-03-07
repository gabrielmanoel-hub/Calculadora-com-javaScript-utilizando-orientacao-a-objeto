export class Calculator {
    constructor(input, buttons, operators) {
        this.buttons = buttons;
        this.input = input;
        this.operators = operators
        this.switchOperators = true
    }

    screen(input) {
       this.input.value += input
        console.log(this.input.value)
        // console.log(this.input.value)
        // this.blockOperadorNoInicio()
    }

    switchOperator(digit) {
        // this.result = 
        // this.Result()
    }

    clear() {
        this.input.value = this.input.value.slice(0, -1)
        console.log(this.operators)
    }

    clearAll() {
        this.input.value = ''
    }

    blockOperadorNoInicio(digit) {
        if(this.input.value[0] == '-' && digit == '-') {
            this.input.value = this.input.value.slice(0,-1)             
        }

        console.log(this.input.value[0])
    }

    Result() {
        console.log(eval(String(this.input.value)))
        this.input.value = eval(String(this.input.value))
        //this.input.value = eval(String(this.input.value)
    }

    

}