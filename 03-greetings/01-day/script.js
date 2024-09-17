console.log('¡Hola, mundo!');

const randomFromArray = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];

    // return array[Math.floor(Math.random() * nouns.length)];

}

const generateGreeting = () => {
    console.log('hello!!!');


    const salutations = [
        'Hello', 'Hi', 'Hey', 'Hola', 'Salut', 'Hej'
    ];

    const adjectives = [
        'friendly', 'shy', 'European', 'Discord', 'mischievous', 'criminal', 'cool', 'genius'
    ];

    const nouns = [
        'person', 'guy', 'citizen', 'user', 'thug', 'criminal', 'enterprise', 'penguin'

    ]; 

    // Math.random * 5 // [0, less than 5]

    const salutation = randomFromArray(salutations);
    const adjective = randomFromArray(adjectives);
    const noun = randomFromArray(nouns);

    document.querySelectorAll('.greeting-segment')[0].innerHTML = salutation; // [span, span, span]
    document.querySelectorAll('.greeting-segment')[1].innerHTML = adjective; // [span, span, span]
    document.querySelectorAll('.greeting-segment')[2].innerHTML = noun; // [span, span, span]
};


document.addEventListener('DOMContentLoaded', () => {
    generateGreeting();

    // document.querySelector('.refresh-button').addEventListener('click', () => {
    //     generateGreeting();
    // });
    document.querySelector('.refresh-button').addEventListener('click', generateGreeting);

    document.addEventListener('keypress', (event) => {

        if (event.key == 'Enter') {
            generateGreeting();
        }
        console.log('Key has been pressed!', event);
    })

})
