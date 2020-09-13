import * as http from 'http';
import * as dtenv from 'dotenv';
const port = process.env.PORT || 8000;
const server = http.createServer();
server.listen(port);
