/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
        res.ok("username or password not exist");
      } else {
        req.session.user = result[0];
        res.ok("login success");
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

