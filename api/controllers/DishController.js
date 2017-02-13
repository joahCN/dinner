/**
 * DishController
 *
 * @description :: Server-side logic for managing Dishes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

let asyncEach = require('async/each');

module.exports = {
	addDishes: (req, res)=>{
	  let dishes = [
      {name: '宫保鸡丁', price: 12},
      {name: '回锅肉', price: 18},
      {name: '鱼香肉丝', price: 10},
      {name: '茄子肉末', price: 11}
    ];
    asyncEach(dishes, (dish, cb)=>{
      sails.models.dish.create(dish).then(()=>{cb()}).catch(cb);
    }, (err)=>{
      if(err) {
        res.serverError();
      } else {
        res.ok("dishes added success");
      }
    });
  }
};

