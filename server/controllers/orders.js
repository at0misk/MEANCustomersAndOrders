var mongoose = require('mongoose');
var orders = mongoose.model('Order');
module.exports = (function() {
 return {
  index: function(req, res) {
     orders.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  create: function(req, res) {
     orders.create(req.body, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
 }
})();