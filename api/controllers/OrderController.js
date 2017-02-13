/**
 * OrderController
 *
 * @description :: Server-side logic for managing Orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addOrder: (req, res)=>{
    sails.models.order.create({
      tableId: 1,
      owner: 1,
      dishes: [4,5,6],
      sum: 100
    }).then((result)=>{
      res.send(result);
    });
  }

};

