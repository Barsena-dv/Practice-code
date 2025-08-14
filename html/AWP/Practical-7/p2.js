const fs = require('fs');
    fs.writeFile('newfile.txt', 'Hello, this is written to the file.', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('2. File written successfully.');
        }
    });
