const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('El Podcasters 1.4.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('pdf_text.txt', data.text);
    console.log('Pages:', data.numpages);
    console.log('Metadata:', data.metadata);
    console.log('Info:', data.info);
}).catch(err => console.error(err));
