// 인터페이스는 객체의 구조를 설명하기 위해서만 사용함
interface AddFn {
    (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
    return n1+n2;
};

interface Named {
    readonly name?: string;
    outputName?: string;
    // ? 선택 사항
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age?: 30;

    constructor(n?: string){
        if (n){
        this.name = n;
        }
    }

    greet(phrase: string){
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Person;

user1 = new Person();

user1.greet('Hi there - I am');
console.log(user1);