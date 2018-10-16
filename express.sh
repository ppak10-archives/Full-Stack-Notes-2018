#!/bin/bash
cd full-stack
npm run build:prod
cd express
node server.js
exit
