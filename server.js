const http = require('http'); // redeployed
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4028;
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'));

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(indexHtml);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.end(indexHtml);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
