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

enum ROLE {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Dana',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: ROLE.AUTHOR
}; 

// person.role.push('admin');
// person.role[1] = 'dada';

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if (person.role === ROLE.AUTHOR) {
    console.log('is author');
}