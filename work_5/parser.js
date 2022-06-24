class Parser {
  constructor() {
    this.stack = [];
    this.postfix = [];
  }

  parse(str) {
    let index = 0;
    let token = '';
    while (index < str.length) {
      let current = str.charAt(index);
      if (this.isOperator(current) || current === '(' || current == ')') {
        if (this.isNumber(token)) {
          this.postfix.push(parseFloat(token))
          token = '';
        }
        
        if ((current === '(') || current === '^') {
          this.stack.push(current)
        }
        else if (current === ')') {
          while (this.stack.length > 0) {
            let stack_top = this.stack.pop();
            if (stack_top === '(') {
              break;
            }

            this.postfix.push(stack_top);
          }
        }
        else if (this.isOperator(current)) {
          let symbol = this.stack[this.stack.length - 1];
          if (symbol && (this.precedence(current) > this.precedence(symbol))) {
            this.stack.push(current);
          } else {
            while ((this.stack.length > 0) && (this.precedence(current) <= this.precedence(symbol))) {
              this.postfix.push(this.stack.pop());
              symbol = this.stack[this.stack.length - 1];
            }
            this.stack.push(current)
          }
        }
      }
      else {
        token += current;
      }

      index++;
      if ((index === str.length) && (token.length > 0)) {
        this.postfix.push(parseFloat(token))
        token = '';
      }

      // console.log(`Iteración ${index}, Current: ${current} --------------------------------------------`)
      // console.log(this.stack)
      // console.log(this.postfix)
    }

    while (this.stack.length > 0) {
      this.postfix.push(this.stack.pop())
    }

    return this.postfix;
  }

  precedence(substr) {
    switch (substr) {
      case '+':
      case '-':
        return 1;       
      case '*':
      case '/':
        return 2;
      case '^':
      case 'R':
        return 3;    
      default:
        return 0;
    }
  }

  isOperator(substr) {
    if ((substr === '+') || (substr === '-') || (substr === '*') || (substr === '/') || (substr === '^') || (substr === 'R')){
      return true;
    }

    return false;
  }

  isNumber(substr) {
    if (substr.trim() === '') {
      return false;
    }

    return !isNaN(substr);
  }
}

class Calculator {
  calculate(a, b, operator) {

    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '/':
        return a / b;
      case '*':
        return a * b;
      case '^':
        return a ** b;  
      case 'R':
      case 'r':
        return Math.sqrt(a);
      default:
        return 0;
    }
  }

  evaluar(str) {
    if (str.length <= 20) {
      const parser = new Parser();
      const postOrderArray = parser.parse(str);
      let val = this.operate(postOrderArray);
      return `El valor de ${str} es: ${val}`
    } 
    else {
      return 'La cadena ingresada tiene más de 20 caracteres, no se puede evaluar';
    }
  }

  operate(postfix) {
    while (postfix.length >= 3) {
      for (let index = 2; index < postfix.length; index++) {
        const element = postfix[index];
        if (this.isOperator(element)) {
          let first = postfix[index - 2];
          let second = postfix[index - 1];
          postfix[index] = this.calculate(first, second, element)
          postfix.splice(index - 2, 2);
          break;
        }
      }
    }

    return postfix[0];
  }

  isOperator(substr) {
    if ((substr === '+') || (substr === '-') || (substr === '*') || (substr === '/') || (substr === '^') || (substr === 'R')){
      return true;
    }

    return false;
  }  
}

const calculator = new Calculator();
let value = calculator.evaluar('4-7+8+9/2*3');
console.log(value);

value = calculator.evaluar('4-(7+8)+9/2*3');
console.log(value);

value = calculator.evaluar('4-2^3');
console.log(value);

value = calculator.evaluar('(4+8.5+9/(2*3))*2+2^2');
console.log(value);

value = calculator.evaluar('3+5*2-9/6');
console.log(value);