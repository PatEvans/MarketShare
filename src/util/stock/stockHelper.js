var dbConn = require('typeorm');
var stockHelp = require('../CalculationFunctions');
var userHelp = require('../../util/user/userHelper');

const getPortfolioIndustry = async (userID) => {
  var data = await getPortfolioOrders(userID);

  var toSend = {};
  
  for (const ele of data) {
    if (ele.industry in toSend) {
      toSend[ele.industry]++;
    } else {
      toSend[ele.industry] = 1;
    }
  }

  return toSend;
}

const getPortfolioOrders = async (userID) => {
  const user = await dbConn.getConnection()
    .getRepository('user')
    .find({ where: {id: userID } });
  if (user) {
    const portfolio_id = user[0].portfolioid;

    const portfolio = await dbConn.getConnection()
      .getRepository('portfolio')
      .find({ where: { portfolioid: portfolio_id } });
    var userStocks = [];

      for (const ele of portfolio) {
        const user_stock = (await dbConn.getConnection()
        .getRepository('orders')
        .find({
          where: {orderid: ele.orderid}
        }))[0];

        // console.log(user_stock);
        var formatted = {};
        formatted["qty"] = user_stock.qty;
        formatted["stockcode"] = user_stock.stockcode;
        formatted["industry"] = user_stock.industry;
        formatted["timeBought"] = user_stock.timeBought;
        formatted["priceBought"] = user_stock.priceBought;
    
        userStocks.push(formatted);
      }
      return userStocks;
    }
};

const createOrder = async (userid, orderData) => {
  const currentPrice = await stockHelp.getPrice(orderData.stockCode);

  const newData = {
    stockcode: orderData.stockCode,
    qty: orderData.quantity,
    timeBought: orderData.datePurchase,
    industry: orderData.industry,
    priceBought: currentPrice
  }
  
  const order_ID = (await dbConn.getConnection()
    .getRepository('orders')
    .createQueryBuilder()
    .insert()
    .values(newData)
    .execute()).identifiers[0].orderid;

  const _user = await userHelp.getUser(userid);

  const newOrder = {
    portfolioid: _user[0].portfolioid,
    orderid: order_ID
  }

  await dbConn.getConnection()
    .getRepository('portfolio')
    .createQueryBuilder()
    .insert()
    .values(newOrder)
    .execute();

    return true;
};

module.exports = { getPortfolioIndustry, getPortfolioOrders, createOrder };
