var dbConn = require('typeorm');
var crypto = require('crypto');

const createUser = async (username, password) => {
  const newPortfolioID = crypto.randomBytes(16).toString("hex");
  var newUser = {
    name: username,
    password: password,
    portfolioid: newPortfolioID
  };

  await dbConn.getConnection().getRepository('user')
  .save(newUser);

  const user = await dbConn.getConnection().getRepository('user')
  .find({ where: {name: username } });

  return user[0].id;
}

const login = async (username, password) => {
  const user = await dbConn.getConnection().getRepository('user')
  .find({ where: {name: username, password: password } });

  return user[0].id;
};

module.exports = { createUser, login };