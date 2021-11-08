const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (error, files) => {
    if (error) { console.log(error.message) };
    files.forEach((f, i) => {
        fs.stat(path.join(__dirname, 'secret-folder', f.name), (error, stats) => {
            if (error) {
                console.log(error);
            } else {
                if (stats.isFile()) {
                    let ext = path.extname(f.name);
                    let base = path.basename(f.name).replace(ext, '');
                    ext = ext.replace('.', '');
                    console.log(`${base} - ${ext} - ${stats.size}b`);
                }
            }
        });
    });
})