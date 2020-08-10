// start with strings, numbers and booleans

let age=20;
let age2=age;
console.log(age, age2);

age=50;
console.log(age, age2);

let name="Anshul";
let name2=name;
console.log(name, name2);

name="Aditya";

console.log(name, name2);


// Let's try this for an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team=players;

console.log(team,players);

team[3] = 'Lux';
console.log(team, players);

// So in this we are going to pass the referance of the original array. But what if we want to go for the copy of the array.

// 1.
const players1 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team2=players1.slice();

console.log(players1,team2);
team2[3]='Lux';
console.log(players1, team2);

// 2.
const team3= [].concat(players1);
console.log(players1, team3);

team3[3]='Hello';
console.log(players1, team3);

// 3.
const team4 = [...players1];
console.log(players1, team4);
team4[3]="Yup";
console.log(players1, team4);

// 4.
const team5=Array.from(players1);
console.log(players1, team5);

team5[0]="Great";
console.log(players1, team5);

// now when we update it, the original one isn't changed

// Let's try this one for objects.

const person1 = {
    name : 'Anshul sharma',
    age : 20
};

console.log(person1);

const captain = person1;
captain.number=07;

console.log(person1,captain);

// So this is going for referance but what if we want to make copy.

const person= {
    name: 'Abcd',
    age: 50
};

console.log(person);

// 1.
const cap2=Object.assign({},person,{number:99,age:12});
console.log(person,cap2);

const cap3={...person};
cap3.number=15;
console.log(person, cap3);
/* Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.*/

const temp = {
    name : 'Wes',
    age : 55,
    social : {
        twitter : '@wesbos',
        facebook : 'wesbos.developer'
    }
};

console.log(temp);

const dev = Object.assign({},temp);
dev.social.twitter='none';
console.log(temp,dev);

// So this going for referance let try this one for copy.

const wes = {
    name: 'Wes',
    age: 55,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};
console.log(wes);

const dev2=JSON.parse(JSON.stringify(wes));

dev2.social.twitter='empty';

console.log(wes,dev2);

// So this is going to make another copy as what we want.