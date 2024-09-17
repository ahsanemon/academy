console.log('¡Hola, mundo!');

// Utility function to return a random element from an array
const randomFromArray = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];

    // return array[Math.floor(Math.random() * nouns.length)];

};

// Possible words for our greetings
const segments = [
    // salutations
    ['Hello', 'Hi', 'Hey', 'Hola', 'Salut', 'Hej'],
    // adjectives
    ['friendly', 'shy', 'European', 'Discord', 'mischievous', 'criminal', 'cool', 'genius'],
    // nouns
    ['person', 'guy', 'citizen', 'user', 'thug', 'criminal', 'enterprise', 'penguin'],
];

// Picks a new word for the segment of the 
const generateSegment = (index) => {
    // const salutations = ['Hello', 'Hi', 'Hey', 'Hola', 'Salut', 'Hej'];
    const value = randomFromArray(segments[index]);
    document.querySelectorAll('.greeting-segment')[index].innerHTML = value;

};

// Pick worjds for every elements
const generateGreeting = () => {

    // // while loop
    // let i = 0;
    
    // while (i<3) {   
    //     generateSegment(i);
    //     i++;
    // }

    // for loop
    for (let i = 0; i < 3; i++) {
        generateSegment(i);
    }

    // generateSegment(i); // 0
    // i++;
    // generateSegment(i); // 1
    // i++;
    // generateSegment(i); // 2
    // i++;
};


// const generateGreeting = () => {
//     console.log('hello!!!');

//     const salutations = [
//         'Hello',
//         'Hi',
//         'Hey',
//         'Hola',
//         'Salut',
//         'Hej',
//     ];

//     const adjectives = [
//         'friendly',
//         'shy',
//         'European',
//         'Discord',
//         'mischievous',
//         'criminal',
//         'cool',
//         'genius',
//     ];

//     const nouns = [
//         'person',
//         'guy',
//         'citizen',
//         'user',
//         'thug',
//         'criminal',
//         'enterprise',
//         'penguin',

//     ];

//     // Math.random * 5 // [0, less than 5]

//     const salutation = randomFromArray(salutations);
//     const adjective = randomFromArray(adjectives);
//     const noun = randomFromArray(nouns);

//     document.querySelectorAll('.greeting-segment')[0].innerHTML = salutation; // [span, span, span]
//     document.querySelectorAll('.greeting-segment')[1].innerHTML = adjective; // [span, span, span]
//     document.querySelectorAll('.greeting-segment')[2].innerHTML = noun; // [span, span, span]
// };


//task: add a pop up, notification that text is copied
// Copy current roll to clipboard
const copyToClipboard = () => {
    const values = [];

    const nodes = document.querySelectorAll('.greeting-segment');
    for (let i = 0; i < 3; i++) {
        values.push(nodes[i].innerHTML);
        // console.log(nodes[i]);
        // console.log(values);
        // console.log(values);
        
    }
    values.join()
    // console.log(values);
    navigator.clipboard.writeText(values.join(' '));
}

// Manage time roll
let intervalId = null;
let timeoutId = null;

// 
const rollGreeting = () => {
    
    // for (let i = 0; i < 10; i++) {
    //     setTimeout(() => {
    //         generateGreeting();
    //         console.log(i, 'foo');
    //     }, 100 * i); // execution is not paused. it's asynchronous code and execute after the timeout        
    // }

    // Stop roll on subsequent execution
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        timeoutId = null;
        return; // early return
    }

    // intervalId = setInterval(() => {
    //     generateGreeting();
    // }, 50)
    intervalId = setInterval(generateGreeting, 50)

    timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        intervalId = null;
    }, 5000)

};

document.addEventListener('DOMContentLoaded', () => {
    // Generates initial gretting when loading the page
    generateGreeting();

    // Action button handler
    // document.querySelector('.refresh-button').addEventListener('click', () => {
    //     generateGreeting();
    // });
    document.querySelector('.roll-button').addEventListener('click', rollGreeting);
    document.querySelector('.refresh-button').addEventListener('click', generateGreeting);
    document.querySelector('.clipboard-button').addEventListener('click', copyToClipboard);

    // Generate new greeting when pressing enter
    document.addEventListener('keypress', (event) => {

        if (event.key == 'Enter') {
            generateGreeting();
        };
        console.log('Key has been pressed!', event);
    });

    // Generate new word for individual segment when pressing on it
    const nodes = document.querySelectorAll('.greeting-segment');
    for (let i = 0; i < 3; i++) {
        console.log(nodes[i]);
        
        nodes[i].addEventListener('click', () => {
            generateSegment(i);
        });
    };
});
