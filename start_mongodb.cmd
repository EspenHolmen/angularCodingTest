unzip -o db.zip
"\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --repair --repairpath=./db --dbpath=./db
"\Program Files\MongoDB\Server\3.2\bin\mongod.exe" -dbpath=db
pause