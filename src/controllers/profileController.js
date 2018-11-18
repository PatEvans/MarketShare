var userHelp = require('../util/user/userHelper');

exports.index = async function(req, res) {
  if(!req.cookies.id) {
    res.render("pages/login");
  } else {
    const _user = await userHelp.getUser(req.cookies.id);
    res.render("pages/index", {user: _user[0]});
  }
};

exports.editInfo = function(req, res) {
  res.render("pages/editInfo");
};

exports.addInfo = async function(req, res) {
  await userHelp.updateInfo(req.cookies.id, req.body.valueType, req.body.value);
  if (req.body.returns) {
    res.render("pages/editInfo");
  }
  res.redirect("/");
};

exports.login = async function(req, res) {
  if(!req.cookies.id) {
    const loggedin = await userHelp.login(req.body.username, req.body.password);
    res.cookie('id', loggedin);
  }
  res.redirect("/profile");
};

exports.logout = function(req, res) {
  res.clearCookie("id");
  res.redirect("/profile")
};

exports.register = function(req, res) {
  res.render("pages/register");
}
