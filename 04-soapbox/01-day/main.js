console.log("hello world!!!");

document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('form').addEventListener('submit', (event) => {
        // console.log(event);
        event.preventDefault(); // Prevent refreshing the page after submit event
        
        const data = new FormData(event.target);
        console.log(data);
        
        const name = data.get('name');
        const message = data.get('message');
        const soapbox = data.get('soapbox');
        
        console.log(name);
        console.log(message);
        console.log(soapbox);

    });
});