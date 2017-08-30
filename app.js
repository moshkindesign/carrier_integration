let AdmZip = require('adm-zip');
let User = require('./user');
let fs = require('fs');

let arrayOfUsers = [];
let allRowsAsArray = [];
let data = '';

let zip = new AdmZip("./data/Carrier_Integration_-_Data.zip");
let zipEntries = zip.getEntries();

zipEntries.forEach(file=>{
    data += file.getData();
});

let allRows = data.match(/".*/g);

allRows.forEach(row => {
    if(!row.match('first_name')) allRowsAsArray.push(row.split('||'));
});

allRowsAsArray.forEach(rowArray => {
    arrayOfUsers.push(new User(rowArray[0],rowArray[1],rowArray[2],rowArray[3],rowArray[4],rowArray[5],
        rowArray[6],rowArray[7],rowArray[8]).getStructure());
});

fs.writeFile('./data/out.json', JSON.stringify(arrayOfUsers), err => {
    if (err) throw err;
    console.log('DONE!!!');
    console.log('file: ' + __dirname +'\\data\\out.js)!');
});