#!/bin/bash

# Background the server
http-server -p 5000 --silent &
SERVER_PID=$!

# Run the tests
casperjs test tests/*.js

# Kill the server
kill $SERVER_PID
