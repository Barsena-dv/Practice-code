const fs = require('fs');
        fs.readFile('newfile.txt', 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading file:', err);
            } else {
              console.log('1. File content:', data);
            }
    });
