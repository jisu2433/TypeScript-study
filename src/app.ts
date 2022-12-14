type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface Admin = {
//     name: string;
//     privileges: string[];
// };

// interface Employee = {
//     name: string;
//     startDate: Date;
// };

// interface ElevatedEmployee extends Employee, Admin {}


const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 인터섹션 연산자는 어떤 타입과도 사용할 수 있어서 이러한 타입들이 교차하도록 간단하게 구현할 수 있음
// 유니언 타입은 타입 간에 공통점이 있는 타입
// 객체 타입은 간단히 말해 객체 속성의 조합

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;  
function add(a: number, b: string): string;   
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string'){ //타입가드
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Max', ' Schwarz');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData?.job.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';
// ?? null 병합 연산자 
// 선택적 체이닝 연산자, 정의되어 있는지 여부가 확실치 않은 요소 다음에 물음표를 추가하면 된당.
// 선택적 체이닝 연산자는 객체 데이터의 중첩된 속성과 객체에 안전하게 접근할 수 있게 해줌
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp){
//         console.log('Start  Date: ' + emp.startDate);
//     }
// }

// printEmployeeInformation(e1)

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number){
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if (vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse'
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // 형 변환은 타입스크립트가 직접 감지하지 못하는 특정 타입의 값을 타입스크립트에 알려주는 역할

// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// //const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;
// if(userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hi there!';
// }
// // 느낌표를 사용하여 느낌표 앞의 표현식을 null로 반환하지 않겠다고 타입스크립트에게 인식시킬 수 있음

// interface ErrorContainer { //{ email: 'Not a valid email', username: 'Must start with a character!'}
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// };