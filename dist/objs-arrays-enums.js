"use strict";
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
const person = {
    name: 'Dana',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: ROLE.AUTHOR
};
// person.role.push('admin');
// person.role[1] = 'dada';
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === ROLE.AUTHOR) {
    console.log('is author');
}
//# sourceMappingURL=objs-arrays-enums.js.map