#!/bin/bash

# Define the app directory
APP_DIR=$(pwd)

export NODE_ENV="production"

# Step 3: Always create or overwrite server.js in the .next directory
echo "Creating or updating server.js file in .next directory..."
cat > ./.next/server.js <<EOF
const express = require('express');
const next = require('next');

const port = 4000;
const appDir = '$APP_DIR'; // Use the app directory path
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
    console.log(\`> Ready on http://0.0.0.0:\${port}\`);
  });
});
EOF

# Change to .next directory to ensure Express is installed there
cd ./.next

# Ensure Express is installed in the .next directory
echo "Ensuring Express is installed in the .next directory..."
npm install express
npm install next@13.2.1

# Return to the original app directory
cd "$APP_DIR"

# Step 4: Start the application in production mode from the .next directory
echo "Starting Next.js application in production mode from the .next directory..."
pm2 start ./.next/server.js