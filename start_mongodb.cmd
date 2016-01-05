@echo off
echo MongoDB must be installed with binaries in \Program Files\MongoDB\Server\3.2\bin
unzip -o db.zip
"\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --repair --repairpath=./db --dbpath=./db
"\Program Files\MongoDB\Server\3.2\bin\mongod.exe" -dbpath=db
pause