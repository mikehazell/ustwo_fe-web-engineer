#!/bin/bash
echo "Hit CTRL-C to exit"

# Start server on port 3000
http-server -p 3000 -o --silent &
SERVER_PID=$!

# Build and update sass
node-sass -w src/styles.scss styles.css

echo "Cleaning up"
# kill the server when node-sass dies
kill $SERVER_PID
