

exports.index = function(req, res) {
  res.render("pages/index");
};

exports.editInfo = function(req, res) {
  res.render("pages/editInfo");
}

exports.addStock = function(req, res) {
  res.render("pages/addStock");
}
