import http from 'http';
import webApp from './webApp.js';

let server = http.createServer(webApp);

server.listen(3005, () => {
    console.log('Started!');
});


