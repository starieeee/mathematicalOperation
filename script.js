function mathematicalOperation(operation, num1, num2){
    switch(operation){
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if(num2 !== 0) {
                return num1 / num2;
                break;
            }else{
                return "Error: Division by zero is not allowed";
                break;
            }
        default:
            return "Error: Invalid operation";
            break;
    }

}
console.log(mathematicalOperation('+', 10, 2));
