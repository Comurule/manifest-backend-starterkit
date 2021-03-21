const http = require('http');
const app = require('../src');


const server = http.createServer(app);

//App listens
const port = process.env.PORT || 8081;
server.listen(port, () => { console.log(`Listening on PORT: ${port}`); });