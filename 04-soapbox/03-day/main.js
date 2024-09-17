console.log("hello world!!!");

const soapboxes = [
    { id: 'default', label: 'Default'},
    { id: 'sports',  label: 'Sports'},
    { id: 'games',   label: 'Games'},
    { id: 'music',   label: 'Music'},
    { id: 'meh',   label: 'Meh'},
];

const escapeHtml = (s) => {
    if (typeof s != 'string') {
        return s;       
    }

    return s
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    
};

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

            continue;
        }
        
        html += `<article>
            <h1>${soapbox.label}</h1>
            <div>${escapeHtml(entry.message)}</div>
            <address>${escapeHtml(entry.author)}</address>
            <time datetime="2024-09-03">03 September 2024</time>
        </article>`;     
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

const populateFormInputs = () => {
    // // A:
    // let html = '';

    // for (const soapbox of soapboxes) {
    //     html += `<option value="${soapbox.id}">${soapbox.label}</option>`;
        
    // }
 
    // document.querySelector('select').innerHTML = html;

    // B:
    document.querySelector('select').innerHTML = soapboxes.map(
        soapbox => `<option value="${soapbox.id}">${soapbox.label}</option>`
    ).join('');

    // // C:
    // const arr = soapboxes.map((soapbox) => {
    //     return `<option value="${soapbox.id}">${soapbox.label}</option>`;
    // }).join('');


};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();

    // polling
    setInterval(fetchData, 2 * 1000);
    
    populateFormInputs();

    document.querySelector('form').addEventListener('submit', async (event) => {
        // console.log(event);
        event.preventDefault(); // Prevent refreshing the page after submit event
        
        const data = new FormData(event.target);
        console.log(data);
        
        const author = data.get('name');
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
                    soapbox, //shorthand of  soapbox: soapbox,. Works only if the key and value variable name are same.
                    message, //shorthand of  message: message,. Works only if the key and value variable name are same.
                    author, //shorthand of  author: author,. Works only if the key and value variable name are same.
                }),
            }
        );

        // Clear inputs
        event.target.reset();

        // fetch the data
        fetchData();

    });
});
