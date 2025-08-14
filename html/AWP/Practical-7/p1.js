  const fs = require('fs');
  fs.open('newfile.txt', 'w', (err, file) => {
    if (err) {
      console.error('Error creating file:', err);
      return;
    }
    console.log('File created successfully.');
  });
