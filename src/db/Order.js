module.exports = {
  name: "orders",
  columns: {
    orderid: {
      primary: true,
      type: "int",
      generated: true
    },
    stockcode: {
      type: "varchar",
      length: 20
    },
    qty: {
      type: "int"
    },
    industry: {
      type: "varchar",
      length: 50
    },
    timeBought: {
      type: "datetime",
    },
    priceBought: {
      type: "double",
    }
  },
  relations: {
    portfolios: {
      target: "portfolio",
      type: "many-to-many",
    }
  }
};