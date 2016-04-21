var mongoose = require('mongoose');
var product = mongoose.model('Product');
module.exports = (function() {
 return {
  index: function(req, res) {
     product.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  create: function(req, res) {
    console.log(req.body);
     product.create(req.body, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  update: function(req, res){
  	console.log(req.body.productName);
    var productToUpdate = req.body.productName;
    var temp = req.body.quantity;
    product.update({name: productToUpdate},{$inc:{inventory: -temp}}, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
  }
 }
})();