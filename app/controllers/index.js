/*
 * index controller.
 */

exports.index = function(req, res){
	console.log("TEST")
  res.redirect('/index.html')
}
exports.contactUs = function(req, res){
  res.render('contact-1')
}