// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Dana',
//     age: 27,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["READ_ONLY"] = 1] = "READ_ONLY";
    ROLE[ROLE["AUTHOR"] = 2] = "AUTHOR";
})(ROLE || (ROLE = {}));
;
var person = {
    name: 'Dana',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: ROLE.AUTHOR
};
// person.role.push('admin');
// person.role[1] = 'dada';
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === ROLE.AUTHOR) {
    console.log('is author');
}
