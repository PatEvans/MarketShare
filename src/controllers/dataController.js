var stockHelp = require('../util/stock/stockHelper')

exports.getPortfolioStocks = async function(req, res) {
  res.send(await stockHelp.getPortfolioOrders());
};

