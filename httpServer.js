const http = require('http');
const { requestListener } = require('./requestHandler');

const server = http.createServer(requestListener);

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
