/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// let respondWrap = require('../services/respondWrap');

var builder = require('xmlbuilder');

module.exports = {
    index: (req, res)=>{
        let {echostr} = req.query;
        res.send(echostr);
    },
    xml: (req, res)=>{
        console.log("content-type: "+req.get('Content-Type'));
        let {xml: {ToUserName, FromUserName, MsgType, Content}} = req.body;
        console.log(req.body);
        var root = builder.create('xml', {headless: true});
            root.ele('ToUserName').dat(FromUserName);
            root.ele('FromUserName').dat(ToUserName);
        root.ele('CreateTime').dat((new Date()).getTime());
        root.ele('MsgType').dat("text");
        root.ele('Content').dat("Hello, " + ToUserName);

        var xml = root.end({ pretty: true});
        res.set('Content-Type', 'application/xml');
        res.send(xml);
    }
};

