"use strict";
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
// ���׸� Ÿ���� ����ϸ� ���� ���� Ÿ�� �������� Ȯ���� �� �ֵ�.
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'dana', hobbies: ['picture'] }, { age: 27 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'dana' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
// const textStorage = new DataStorage<string>();
// textStorage.addItem('Dana');
// textStorage.addItem('Woojin');
// textStorage.removeItem('Woojin');
// console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['dana', 'woojin'];
// ���Ͼ� Ÿ���� �Լ��� ȣ���� ������ �� Ÿ�Ե� �� �ϳ��� ȣ���� �� �ִ� �Լ��� �ʿ��� ��쿡 ����
// ���׸� Ÿ���� Ư�� Ÿ���� �����ϰų�, ��ü Ŭ���� �ν��Ͻ��� ���� ���� �Լ��� ����ϰų�, ���� Ÿ���� ����ϰ��� �� �� ���׸� Ÿ���� ����
