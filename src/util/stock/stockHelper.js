var dbConn = require('typeorm')
const getPortfolio = (userID) => {
  dbConn.getConnection()
    .getRepository('Portfolio')
    .find({ where: {id: userID } });
};

module.exports = { initialInvestment };
