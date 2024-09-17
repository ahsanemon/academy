console.log("hello world!!!");

const soapboxes = [
    { id: 'default', label: 'Default'},
    { id: 'sports',  label: 'Sports'},
    { id: 'games',   label: 'Games'},
    { id: 'music',   label: 'Music'},
]
const fetchData = async () => {
    // fetch data from the API endpoint
    // https://academy.will-industries.fr/project-api/04-soapbox/

    // asynchronous call
    const response = await fetch('https://academy.will-industries.fr/project-api/04-soapbox');
    // const text = await response.text();
    // console.log(text);
    // console.log(JSON.parse(text));

    const data = await response.json();

    console.log(soapboxes);
    console.log(data);
    
    let html = '';

    // Generate HTML
    for (const soapbox of soapboxes) {
        
        // falsy value -> false undefined null 0 ''
        // truthy value -> true 'string' 123 [] {}
        // ![] -> false
        // !![] -> true
        const entry = data[soapbox.id];

        if (!entry) {
            // No message found
            html += `<article>
            <h1>${soapbox.label}</h1>
            <div>(no message found)</div>
        </article>`;
        }
        else {
            html += `<article>
            <h1>${soapbox.label}</h1>
            <div>${entry.message}</div>
            <address>${entry.author}</address>
            <time datetime="2024-09-03">03 September 2024</time>
        </article>`;
        };

        // console.log(
        //     'My soapbox:', 
        //     soapbox.label,
        //     data[soapbox.id]
        // );       
    }
    
    // add to page
    document.getElementById('soapbox-wrapper').innerHTML = html;

    // // literal, template string
    // `<article>
    //     <h1>default</h1>
    //     <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptatibus obcaecati voluptates sunt accusamus velit blanditiis, iusto quis veritatis doloremque eaque, recusandae quidem possimus officia odit saepe rerum esse voluptate?</div>
    //     <address>Firstname</address>
    //     <time datetime="2024-09-03">03 September 2024</time>
    // </article>`;


    console.log('2');


    // Create html for it and add it to the page, or modify the html
};

document.addEventListener('DOMContentLoaded', ()=> {
    fetchData();
    // polling
    setInterval(fetchData, 2 * 1000);

    document.querySelector('form').addEventListener('submit', async (event) => {
        // console.log(event);
        event.preventDefault(); // Prevent refreshing the page after submit event
        
        const data = new FormData(event.target);
        console.log(data);
        
        const name = data.get('name');
        const message = data.get('message');
        const soapbox = data.get('soapbox');
        
        // console.log(name, message, soapbox);

        // Submit to API
        const response = await fetch('https://academy.will-industries.fr/project-api/04-soapbox/' + soapbox, 
            {
                method: 'POST',
                headers: {
                    'Accepts': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    soapbox: soapbox,
                    message: message,
                    author: name,
                }),
            }
        );

        // Clear inputs
        event.target.reset();

        // fetch the data
        fetchData();

    });
});

const functionA = () => {
console.log('a');
console.log('b');
console.log('c');
for (let i = 0; i < 100; i++) {
    console.log('xx');
}

console.log('d');
console.log('e');
console.log('f');
};

const onClick = () => {
    alert('Hello World!');
};