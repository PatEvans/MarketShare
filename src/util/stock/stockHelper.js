var dbConn = require('typeorm');
var stockHelp = require('../CalculationFunctions');
var userHelp = require('../../util/user/userHelper');

const getPortfolioOrders = async (userID) => {
  const portfolio = await dbConn.getConnection()
    .getRepository('portfolio')
    .find({ where: {id: userID } });

  const stocks = await dbConn.getConnection()
  .getRepository('Order')
  .find({
    relations: ["orders"],
    where: {
      portfolioid: portfolio.portfolioid
    }
  });
  console.log(stocks);

  return undefined;
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

module.exports = { getPortfolioOrders, createOrder };
