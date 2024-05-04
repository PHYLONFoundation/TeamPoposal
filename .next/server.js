const express = require('express');
const next = require('next');

const port = 4000;
const appDir = '/root/TeamPoposal'; // Use the app directory path
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: appDir });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://0.0.0.0:${port}`);
  });
});
