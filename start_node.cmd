@echo off
echo Node and NPM must be installed
call npm install
call bower install
call nodemon server.js