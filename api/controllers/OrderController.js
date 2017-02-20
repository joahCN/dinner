/**
 * OrderController
 *
 * @description :: Server-side logic for managing Orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addOrder: (req, res)=>{
    sails.models.dish.find({}).then(dishes=>{
      let dishedIds = [];
      let userId = req.session.user.id;
      dishes.forEach(dish=>{
        dishedIds.push(dish.id);
      });
      sails.models.order.create({
        tableId: 1,
        owner: userId,
        dishes: dishedIds,
        sum: 100
      }).then((result)=>{
        res.send(result);
      });
    });
  },

  watchOrder: (req, res)=>{
    if(!req.isSocket) {
      return res.badRequest();
    }
    let room = req.param("room");
    let userName = req.param("userName");

    sails.sockets.join(req, room, (err)=>{
      if(err) {
        return res.serverError(err);
      }
      res.json({
        msg: `${userName} join room: ${room}`
      })
    })
  },

  unwatchOrder: (req, res)=>{
    if (!req.isSocket) {
      return res.badRequest('This endpoints only supports socket requests.');
    }
    let roomName = req.param('room');
    let userName = req.param("userName");
    sails.sockets.leave(req, roomName, function(err) {
      if (err) {return res.serverError(err);}
      return res.json({
        message: `${userName} leave room: ${roomName}`
      });
    });
  }

};

