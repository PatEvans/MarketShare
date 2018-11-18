var dbConn = require('typeorm');

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



module.exports = { getPortfolioOrders };
