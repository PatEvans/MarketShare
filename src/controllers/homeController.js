exports.index = function(req, res) {
  res.render("pages/index");
};

exports.newsfeed = function(req, res) {
  res.render("pages/newsfeed");
}

exports.profile = function(req, res) {
  res.render("pages/profile");
}