/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// let respondWrap = require('../services/respondWrap');

module.exports = {
	getUserInfo: (req, res)=>{
	  sails.models.user.find({name: req.query.name}).then((result)=>{
	    res.send(result);
    });
  },

  login: (req, res) => {
	  let name = req.query.name;
	  let password = req.query.pas;
    sails.models.user.find({where: {name: name, password: password}, limit: 1}).then((result)=>{
      if(!result || sails.util._.isEmpty(result)) {
        res.ok(RespondService.fail(1000));
      } else {
        req.session.user = result[0];
        res.ok(RespondService.success({user: result[0]}));
      }
    }).catch((error)=> {
      res.serverError(error);
    });
  },

  logout: (req, res) => {
	  sails.log.info("user logout");
	  req.session.user = null;
	  res.ok({
	    status: 0,
      message: 'logout success'
    })
  }
};

