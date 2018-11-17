module.exports = {
  name: "portfolio",
  columns: {
    portfolioid: {
      primary: true,
      type: "varchar",
      length: 255
    },
    orderid: {
      type: "varchar",
      length: 255
    }
  },
  relations: {
    orders: {
      target: "orders",
      type: "many-to-many",
      cascade: true,
      joinTable: true
    }
  }
};