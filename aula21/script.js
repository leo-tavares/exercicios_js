function calculate(numero1, operador, numero2){
    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':{ 
            if(numero2 === 0) {
                return null
            };
            return numero1 / numero2;
        }
        default:
            return null
    }
}

var resultado = calculate(5, '/', 3);

console.log(resultado.toFixed(2))