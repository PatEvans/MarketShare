var dbConn = require('typeorm');
var stockHelp = require('../CalculationFunctions');

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

const createOrder = async (orderData) => {
  const currentPrice = stockHelp.getPrice(orderData.stockcode);

  const newData = {
    stockcode: orderData.stockcode,
    quantity: Number(orderData.quantity),
    timeBought: Date(orderData.datePurchase),
    industry: orderData.industry,
    priceBought: currentPrice
  }
  
  const orderID = await dbConn.getConnection()
    .getRepository('order')
    .createQueryBuilder()
    .insert(newData)
    .values(orderData)
    .execute();

  console.log(orderID);
};

module.exports = { getPortfolioOrders, createOrder };
