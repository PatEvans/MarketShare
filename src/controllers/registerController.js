var userHelp = require('../util/user/userHelper');

exports.createAccount = async function(req, res) {
  const id = await userHelp.createUser(req.body.username, req.body.password);
  res.cookie('id', id);

  res.send(id?"Created account!":"Something went wrong");
};

exports.index = function(req, res) {
  res.render("pages/register");
}
