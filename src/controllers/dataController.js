var stockHelp = require('../util/stock/stockHelper')

exports.getPortfolioStocks = async function(req, res) {
  res.send(await stockHelp.getPortfolioOrders(req.cookies.id));
};

exports.getPortfolioIndustry = async function(req, res) {
  var data = await stockHelp.getPortfolioOrders(req.cookies.id);

  var toSend = {
    "financial": 0,
    "utilities": 0,
    "consumerDiscretionary": 0,
    "consumerStaples": 0,
    "energy": 0,
    "healthcare": 0,
    "industrial": 0,
    "technology": 0,
    "telecom": 0,
    "materials": 0,
    "realEstate": 0,
    "other": 0
  };
  
  for (const ele of data) {
    if (ele.industry in toSend) {
      toSend[ele.industry]++;
    } else {
      toSend[ele.industry] = 1;
    }
  }

  res.send({data: toSend});
};

