(async function(){
    const fetch = require('node-fetch');
    const fs = require('fs')
    async function download() {
        url = "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh0n9pHJW1st5lhmo1_1280.jpg"
        const response = await fetch(url);
        const buffer = await response.buffer();
        fs.writeFile(`./image.jpg`, buffer, () => 
        console.log('finished downloading!'));
    }
    await download()
})()