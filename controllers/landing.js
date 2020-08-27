exports.getLanding=function(req, res, next) {
    res.render('landing', { title: 'Express' });
  };

  exports.submitLead=function(req, res, next) {
  console.log(req.body.email);
  res.redirect('/')
  }