// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

// 제네릭 타입을 사용하면 보다 나은 타입 안정성을 확보할 수 있따.

function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name : 'dana', hobbies: ['picture']}, {age: 27});
console.log(mergedObj);

interface Lengthy {
    length : number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if (element.length === 1){
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' +element.length + ' elements.'; 
    }
    return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'dana'}, 'name');

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Dana');
// textStorage.addItem('Woojin');
// textStorage.removeItem('Woojin');
// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date
    ): CourseGoal{
        let courseGoal: Partial<CourseGoal> = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUntil = date;
        return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['dana', 'woojin'];

// 유니언 타입은 함수를 호출할 때마다 이 타입들 중 하나로 호출할 수 있는 함수가 필요한 경우에 유용
// 제네릭 타입은 특정 타입을 고정하거나, 전체 클래스 인스턴스에 걸쳐 같은 함수를 사용하거나, 같은 타입을 사용하고자 할 때 제네릭 타입은 유용