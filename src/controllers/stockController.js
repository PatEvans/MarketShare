var stockHelp = require('../util/stock/stockHelper');

exports.index = function(req, res) {
  res.render("pages/newstock");
};

exports.create = async function(req, res) {
  await stockHelp.createOrder(req.body);
  res.send("Added");
};

