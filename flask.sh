#!/bin/bash
cd full-stack
npm run build:prod
cd flask
python3 run.py
exit
