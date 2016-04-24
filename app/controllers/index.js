/*
 * index controller.
 */

exports.index = function(req, res){
  res.render('index')
}
exports.contactUs = function(req, res){
  console.log(11)
  res.render('contact-1')
}