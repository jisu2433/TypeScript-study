function add(n1: number, n2: number, showResult: boolean) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
    if (showResult) {
        console.log(n1+n2);
    } else {
    return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

add(number1, number2, printResult);