import * as http from 'http';
const port = process.env.PORT || 8000;
const server = http.createServer();
server.listen(port);
