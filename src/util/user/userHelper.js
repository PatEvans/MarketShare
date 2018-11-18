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

const getUser = async (uid) => {
  const user = await dbConn.getConnection().getRepository('user')
  .find({ where: {id: uid } });

  return user;
};

const updateInfo = async (userid, valueType, value) => {
  var data = {};
  data[valueType] = value;
  await dbConn.getConnection()
    .createQueryBuilder()
    .update('user')
    .set(data)
    .where("id = :id1", { id1: Number(userid) })
    .execute();
};

module.exports = { updateInfo, createUser, login, getUser };