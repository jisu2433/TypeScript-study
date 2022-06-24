# TypeScript 정리

## Why 타입스크립트?

정적언어이므로 컴파일 타입에 타입이 결정
<br>
런타임에 타입이 결정되는 자스와 달리 오류를 발견할 수 있어 안정적!

## 기본 타입

```jsx
let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];
```

### 튜플

```jsx
let b: [string, number];

b = ["z", 1];
b = [1, "z"];

b[0].toLowerCase();
b[1].toLowerCase(); // 에러 남
```

### void, never

```jsx
아무것도 반환하지 않을 때 주로 사용
function sayHello():void{
	console.log('hello');
}

오류를 반환하거나 반복문 사용할 때
function showError(){
	throw new Error();
}

function infLoop(){
	while (true) {
		// do something
	}
}
```

### enum

```jsx
enum Os {
	Window,
	Ios,
	Android
}

let myOs:Os;
myOs = Os.Window;
//myOs에는 Window, Ios, Android 세 개만 들어갈 수 있음
```

### null, undefined

```jsx
let a: null = null;
let b: undefined = undefined;
```

## 인터페이스

```jsx
type Score = 'A'|'B'|'C'|'F';
interface User {
	name: string;
	age: number;
	gender? : string; //옵션으로 설정
	readonly birthYear : number;
	[grade:number] : Score;
}

let user : User = {
	name: 'xx',
	age: 30,
	birthYear: 2000,
	1: 'A',
	2: 'B'
}

user.gender = 'male'
user.birthYear = 1990; // 에러남, 읽기 전용 속성은 변경 불가

console.log(user.age)
```

```jsx
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20);

interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

a(33); //true
```

```jsx
interface Car {
	color: string;
	wheels: number;
	start(): void;
}

interface Benz extends Car {
	door: number;
	stop(): void;
}

const benz : Benz = {
	door: 5,
	stop(){
		console.log('stop');
	}
	color: 'black';
	wheels: 4;
	start(){
		console.log('go');
	}
}
// Car의 인수들 모두 넣어주어야 오류가 안생긴다.

class Bmw implements Car {
	color;
	wheels = 4;
	constructor(c:string){
		this.color = c;
	}
	start(){
	constructor(c:string){
		this.color = c;
	}

	start(){
		console.log('go..');
	}
}

const b = new Bmw('green');

```

```jsx
// implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
```

## 함수

```jsx
function add(num1: number, num2: number): void {
	console.log(num1 + num2);
}

function isAdult(age: number): boolean {
	return age > 19;
}

function hello(name?: string) {
	return `Hello, ${name || "world"}`;
}

function hello2(name = "world") }
	return `Hello, ${name}`;
}

const result = hello();
const result2 = hello("Sam");

```

```jsx
function hello(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hello("dana", 27));
```

```jsx
function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

### this

```jsx
interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");
```

```jsx
interface User {
	name: string;
	age: number;
}
//오버로드 전달받은 매개변수의 개수나 타입에 따라 다른 동작을 하게 하는 것
function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
	if (typeof age === "number") {
		return {
			name,
			age,
		};
	} else {
		return "나이는 숫자로 입력해주세요.";
	}
}

const sam: User = join("Sam", 30);
const jane: string = join("Jane", "30");
```

## 리터럴, 유니온/교차 타입

```jsx
const userName1 = "Bob";
let userName2 = "Tom";

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}
```

### Union Types (or)

```jsx
interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}
```

### Intersection Types (and)

```jsx
interface Car {
	name: string;
	start(): void;
}

interface Toy {
	name: string;
	color: string;
	price: number;
}

const toyCar: Toy & Car = {
	name: "타요".
	start() {},
	color: "blue",
	price: 1000,
};
```

## Class

접근 제한자(access modifier) - public, private, protected

`public` - 자식 클래스, 클래스 인스턴스 모두 접근 가능

`protected` = 자식 클래스에서 접근 가능

`private` - 해당 클래스 내부에서만 접근 가능

```jsx
class Car {
	public name: string = "car";
//#name: string = "car"; ,private 써도 동일함
//protected name: string = "car";
	color: string;
	constructor(readonly color: string) {
		this.color = color;
	}
	start() {
		console.log("start");
		console.log(this.#name);
	}
}

class Bmw extends Car {
	constructor(color: string) {
		super(color);
	}
	showName() {
		console.log(super.name);
	}
}

const z4 = new Bmw("black");
```

```jsx
class Car {
	readonly name: string = "car";
	static wheels = 4;
	color: string;
	constructor(color: string, name) {
		this.color = color;
		this.name = name;
	}
	start() {
		console.log("start");
		console.log(this.#name);
		//console.log(this.wheels);
		console.log(Car.wheels);
	}
}

class Bmw extends Car {
	constructor(color: string, name) {
		super(color, name);
	}
	showName() {
		console.log(super.name);
	}
}

const z4 = new Bmw("black");
```

### 추상 class

```jsx
abstract class Car {
	color: string;
	constructor(color: string) {
		this.color = color;
	}

	start() {
		console.log("start");
	}
	abstract doSomething():void;
}

class Bmw extends Car {
	constructor(color: string) {
		super(color);
	}
	doSomething(){
		alert(3);
	}
```

## 제네릭

### 클래스, 함수, 인터페이스를 다양한 타입으로 재사용

```jsx
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
(getSize < number) | (string > arr1);

const arr2 = ["a", "b", "c"];
getSize < string > arr2;

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, { name: "Tim" }];
getSize(arr4);
```

```jsx
interface Mobile {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string, coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};
```

## 유틸리티 타입

```jsx
// keyof

interface User {
	id: number;
	name: string;
	age: number;
	gender: "m" | "f"
}

type UserKey = keyof User;

const uk:UserKey = "age";
```

```jsx
// Partial<T> 프로퍼티를 모두 옵션으로 바꿔줌

interface User {
	id: number;
	name: string;
	age: number;
	gender: "m" | "f";
}

let admin Partial<User> = {
	id: 1,
	name: "Bob",
};
```

```jsx
// Required<T> 프로퍼티를 모두 필수로 바꿔줌
interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Required<User> = {
  id: 1,
  name: "Bob",
  age: 30,
};
```

```jsx
// Readonly<T> 모두 읽기전용으로 바꿔줌
interface User {
	id: number;
	name: string;
	age?: number;
}

let admin Readonly<User> = {
	id: 1,
	name: "Bob",
};

admin.id = 4;

// 할당만 가능 , 수정 불가
```

```jsx
// Record<K,T>

interface User {
	id: number;
	name: string;
	age: number;
}

function isValid(user: User){
	const result: Record<keyof User, boolean> = {
		id: user.id> 0,
		name: user.name !== "",
		age: user.age > 0,
	};
	return result;
}
```

```jsx
// Pick<T,K>

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Bob",
};
```

```jsx
// Omit<T,K>

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin: Omit<User, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};
```

```jsx
// Exclude<T1, T2>

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// boolean만 남음
```

```jsx
// NonNullable<Type>

type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>;

// string만 남음
```
