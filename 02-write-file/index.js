const fs = require('fs');
const path = require('path');

const { stdin, stdout, exit } = process;

const newFileName = path.join(__dirname, 'notes.txt');

fs.writeFile(newFileName, '', error => { if (error) throw error; });

stdout.write('Please, enter text:\n');
stdin.on('data', data => {
    const text = data.toString();
    if (data.toString().trim() === 'exit') {
        process.exit();
    };
    fs.appendFile(newFileName, data, error => { if (error) throw error; });
});

process.on('exit', () => {
    stdout.write('Goodbye! Good luck!\n');
});

process.on('SIGINT', () => {
    process.exit();
});