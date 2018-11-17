module.exports = {
  name: "user",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar",
      length: 255
    },
    password: {
      type: "varchar",
      length: 255
    },
    portfolioid: {
      type: "int"
    }
  },
  relations: {
      portfolios: {
        target: "portfolio",
        type: "one-to-one",
        joinTable: true,
        cascade: true
      }
  }
};