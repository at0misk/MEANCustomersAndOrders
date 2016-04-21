var mongoose = require('mongoose');
var customer = mongoose.model('Customer');
// this is our customers.js file located at /server/controllers/customers.js
// note the immediate function and the object that is returned
// Edit the show method as follows
module.exports = (function() {
 return {
  index: function(req, res) {
     customer.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  create: function(req, res) {
    console.log(req.body);
     customer.create(req.body, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  delete: function(req, res){
    console.log(req.params.id);
    customer.remove({_id: req.params.id}).exec(function(){
     res.json(200);
   });
  }
 }
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports