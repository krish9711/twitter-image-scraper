const request = require('request');
const cheerio = require('cheerio');
const download = require('node-image-downloader');

request('https://twitter.com/elonmusk', (err, res, body)=> {
    if(!err && res.statusCode == 200){

        const $ = cheerio.load(body);
    
        $('div img').each((index, item)=>{

            //reading images URL
            var imageUrls = item.attribs['src'];
            console.log(imageUrls);
            console.log('------------------------------');
            if(imageUrls != undefined){

                //downloading images
                download({
                    imgs: [
                        {
                            uri: imageUrls
                        }
                    ],
                    dest: './downloads'
                }).then((info) => {
                    console.log('Download Complete');
                })
            }

        });


    }
});