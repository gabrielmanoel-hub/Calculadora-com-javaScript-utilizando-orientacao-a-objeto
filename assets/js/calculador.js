export class Calculator {
    constructor(input, buttons, operators) {
        // this.buttons = buttons;
        this.input = input;
        this.operators = operators
        this.switchOperators = true
        this.pointControl = true
        this.newCalculus = false
    }

    screen(input) {
        if(+input || input == '0') {
            this.newCalculu(input)
            this.switchOperators = true
        }else if(input == '-' && this.switchOperators) {
            this.pointControl = true
            this.switchOperators = false
            this.input.value += input
        } else if(this.switchOperators && this.operators[input.replace('÷', '/')]) {
            this.switchOperators = false
            this.pointControl = true
            this.input.value += input
        } else if (this.input.value === '' && input == '-') {
            this.input.value = '-'
        } else if(this.pointControl && input == '.') {
            this.input.value += input
            this.pointControl = false
            this.switchOperators = false
        }
        this.blockNewCalculus(input)
        this.changeOperation(input)
    }

    blockNewCalculus(input) {
        if(this.newCalculus && /[(\÷*\-+)]/g.test(input)) {
            this.newCalculus = false
        }
    }

    newCalculu (input){
        if(this.newCalculus) {
            this.input.value = input
            this.newCalculus = false
        } else {
            this.input.value += input
        }
    }

    changeOperation(input) {
        switch(true) {
            case /[(\/*\-+)]/g.test(this.input.value.slice(-1)):
            case /[(\/*\-+)]/g.test(input):
                this.input.value = this.input.value.slice(0, -1) + input
                break;
        }
    }
   
    clear() {
        if(!this.switchOperators) this.switchOperators = true
        this.pointControl = true
        this.input.value = this.input.value.slice(0, -1)
    }

    clearAll() {
        if(!this.switchOperators) this.switchOperators = true
        this.pointControl = true
        this.input.value = ''
    }

    blockOperadorNoInicio(digit) {
        if(this.input.value[0] === this.operators[digit.replace('÷', '/')]) {
            this.input.value = ''
        }
    }

    Result() {
        switch(true){
            case this.input.value == '':
            case /[(\/*\-+)]/g.test(this.input.value.slice(-1)):
            case /[.]/g.test(this.input.value.slice(-1)):
                return
            default:
                this.input.value = eval(this.adjustingNumbersForCalculation())
                this.newCalculus = true
        } 
    }

    adjustingNumbersForCalculation() {
       return this.input.value[0] == '0' 
        && this.input.value[1] >= '0' 
            ? this.input.value.slice(1).toString() 
            : this.input.value.toString()
    }
}