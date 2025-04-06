// const http = require('http');
// const fetchAPIData = () => {
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     path: '/posts/1', // Example API endpoint
//     method: 'GET'
// };
// const req = http.request(options, (res) => {
//     let data = '';
//     // collect data
//     res.on('data',(chunk)=>{
//         data += chunk;
//     });
//     // print the compelte reponse
//     res.on('end', () =>{
//         console.log("Api response: " + data);
//     });
//     req.on('error', (err) => {
//         console.error('Error:', err);
//     });
//     // end the request
//     req.end();
// }
// );
//     console.log("Request ended");

// };

const http = require('http');

// Task 1: Create a simple HTTP client
const fetchAPIData = () => {
    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        path: '/posts', // Example API endpoint
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        let data = '';

        // Collect data chunks
        res.on('data', (chunk) => {
            data += chunk;
        });

        // Print the complete response
        res.on('end', () => {
            console.log('API Response:', data);
        });
    });

    req.on('error', (err) => {
        console.error('Error fetching API data:', err.message);
    });

    req.end(); // End the request
};

// Task 2: Create an HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/home') {
        res.statusCode = 200;
        res.end('Welcome to the Home Page');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('This is the About Page');
    } else {
        res.statusCode = 200;
        res.end('Hello, World!');
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Fetching API data...');
    fetchAPIData(); // Call the client function to fetch API data
});