const fs = require('fs');
const path = require('path');
let newFileName = path.join(__dirname, 'project-dist', 'bundle.css');

fs.writeFile(newFileName, '', error => { if (error) throw error; });

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (error, files) => {
    if (error) { console.log(error.message) };
    files.forEach(f => {
        let fileName = path.join(__dirname, 'styles', f.name);
        fs.stat(fileName, (error, stats) => {
            if (error) {
                console.log(error);
            } else {
                let ext = path.extname(f.name);
                if (stats.isFile() && ext === '.css') {

                    fs.readFile(fileName, (err, data) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        fs.appendFile(newFileName, data.toString(), error => { if (error) throw error; });
                    })
                }
            }
        });
    });
});