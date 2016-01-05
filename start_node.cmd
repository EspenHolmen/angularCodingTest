@echo off
echo Node and NPM must be installed
call npm install
call bower install
node node_modules\nodemon\bin\nodemon.js server.js