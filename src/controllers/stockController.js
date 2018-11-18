var stockHelp = require('../util/stock/stockHelper');

exports.index = function(req, res) {
  res.render("pages/newstock");
};

exports.create = async function(req, res) {
  const done = await stockHelp.createOrder(req.cookies.id, req.body);
  if (done)
    res.redirect("/");
  else
    res.send("failed");
};

