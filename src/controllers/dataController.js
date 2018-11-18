var stockHelp = require('../util/stock/stockHelper')
var dbConn = require('typeorm');

exports.getAllIndustry = async function(req, res) {
  const allUsers = await dbConn.getConnection()
    .getRepository('user')
    .createQueryBuilder()
    .getMany();

  var userData = [];

  for (const ele of allUsers) {
    var nextUser = await getPortfolioIndustryByID(ele.id);
    userData.push(nextUser);
  }
  
  return userData;
};

getPortfolioIndustryByID = async function(userID) {
  var data = await stockHelp.getPortfolioOrders(userID);

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

  return toSend;
};



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

