export class Controle {
    constructor(input, buttons, operators) {
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

export class filterKeyboardInput  {
    constructor(input){
        this.input = input
        this.controlPointer = true
        this.controlOperator = true
        this.subtraction = true
    }

    number(element) {
        if(/[^-+.*\/]/g.test(element)) {
            this.subtraction = true
            this.controlOperator = true
            this.input.value += element
        }
    }

    limmitPonit(element) {
        if(/[.]/g.test(element) && this.controlPointer) {
            this.controlPointer = false
            this.input.value += element
        }
    }

    operadores(element) {
        if(/[+*\/]/g.test(element) && this.controlOperator) {
            this.controlOperator = false
            this.subtraction = false
            this.input.value += element
        }
    }

    operatorSubtraction(element) {
        if(/[-]/g.test(element) && this.subtraction) {
            this.subtraction = false
            this.controlOperator = false
            this.input.value += element
        }
    }

    limitOperatorNoStart() {
        if(/[+*\/]/g.test(this.input.value[0])) {
            this.input.value = ''
        }
    }

    clearAll(element) {
        this.subtraction = true
        this.controlPointer = true
        this.controlOperator = true
        this.input.value = ''
    }
    clear(element) {
        if(this.getString(this.input.value.slice(-1))) {
            this.controlOperator = false
            this.subtraction = false
        } else {
            this.controlOperator = true
            this.subtraction = true  
        }
        this.input.value = this.input.value.slice(0, -1)
    }

    getString(string) {
        return !isNaN(string) ? true : false
    }

    changeOperator(element) {
        const boolean = /[-+*\/]/g.test(element) && this.input.value !== '-'
        if(/[-+*\/]/g.test(this.input.value.slice(-1)) && boolean) {
            this.input.value = this.input.value.slice(0, -1) + element
        }
    }
}