const dogs = [{
    name: 'Snikers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '😎');

// Styled 
console.log('%c I am some great text', 'font-size:20px; background:red; text-shadow: 4px 4px 0 blue');

// warning!
console.warn('OH NOOOO');

//Error :
console.error('Shit!');

//Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is Wrong!');

// clearing
console.clear();

// Viewing DOM elements
console.log(p);
console.dir(p);

console.clear();

// Grouping Together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age*7} years old`);
    console.groupEnd(`${dog.name}`);
});

//counting

console.count('Anshul');
console.count('Sharma');
console.count('Anshul');
console.count('Sharma');
console.count('Anshul');
console.count('Anshul');
console.count('Sharma');
console.count('Sharma');
console.count('Sharma');
console.count('Sharma');
console.count('Anshul');
console.count('Anshul');
console.count('Sharma');
console.count('Sharma');
console.count('Anshul');
console.count('Sharma');
console.count('Sharma');

// timing 

console.time('fetching Data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching Data');
        console.log(data);
    });

console.table(dogs);