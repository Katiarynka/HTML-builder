const fs = require('fs');
const path = require('path');
const oldDir = 'files';
const newDir = 'files-copy';

fs.mkdir(path.join(__dirname, newDir), { recursive: true }, err => {
    if (err) throw err;
})

fs.readdir(path.join(__dirname, newDir), { withFileTypes: true }, (error, files) => {
    if (error) { console.log(error.message) };
    files.forEach(f => {
        fs.unlink(path.join(__dirname, newDir, f.name), (err) => {
            if (err) throw err;
        });
    })
})

fs.readdir(path.join(__dirname, oldDir), { withFileTypes: true }, (error, files) => {
    if (error) { console.log(error.message) };
    files.forEach(f => {
        fs.copyFile(path.join(__dirname, oldDir, f.name), path.join(__dirname, newDir, f.name), (err) => {
            if (err) throw err;
        })
    });
})