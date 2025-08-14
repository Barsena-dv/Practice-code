const fs = require('fs');
            fs.unlink('newfile.txt', (err) => {
                if (err) {
                  console.error('Error deleting file:', err);
                } else {
                  console.log('4. File deleted successfully.');
                }
    });
