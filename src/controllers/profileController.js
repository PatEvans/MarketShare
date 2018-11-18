var userHelp = require('../util/user/userHelper');

exports.index = function(req, res) {
  res.render("pages/index");
};

exports.editInfo = function(req, res) {
  res.render("pages/editInfo");
};

exports.login = async function(req, res) {
  if(!req.cookies.id) {
    const loggedin = await userHelp.login(req.body.username, req.body.password);
    res.cookie('id', loggedin);
    res.send(loggedin?"Logged in!":"Something went wrong");
  } else {
    res.send("Already logged in!");
  }
};

exports.createAccount = async function(req, res) {
  const id = await userHelp.createUser(req.body.username, req.body.password);
  res.cookie('id', id);

  res.send(id?"Created account!":"Something went wrong");
};
