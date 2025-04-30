const fs = require('fs');

// Create a readable stream with encoding
const readableStream = fs.createReadStream('greet.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
    console.log('Received a chunk of data:', chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading the file.');
});

readableStream.on('error', (err) => {
    console.error('Error reading the file:', err.message);
});
