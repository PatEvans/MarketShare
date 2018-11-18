module.exports = {
  name: "portfolio",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true
    },
    portfolioid: {
      type: "varchar",
      length: 255
    },
    orderid: {
      type: "int"
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