/**
 * Created by joah.zhang on 2017/3/3.
 */
var Crawler = require("crawler");
var url = require('url');

var c = new Crawler({
    forceUTF8:true,
    incomingEncoding: 'gb2312',
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            // console.log(JSON.stringify(res.headers, null, 2));
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("meta[http-equiv]").attr('content'));
            $("div.tBorderTop_box div.jtag p.t2 span").each((i, node)=>{
                console.log($(node).text())
            });
            // console.log(res.body);
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue([
    'http://jobs.51job.com/guangzhou-thq/75080835.html?s=01&t=0',
    'http://jobs.51job.com/guangzhou-thq/83621735.html?t=2&s=01'
]);