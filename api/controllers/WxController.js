/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// let respondWrap = require('../services/respondWrap');

module.exports = {
    index: (req, res)=>{
        let {echostr} = req.query;
        res.send(echostr);
    }
};

