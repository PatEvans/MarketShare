module.exports = {
  name: "friends",
  columns: {
    userid: {
      primary: true,
      generated: true,
      type: "int",
    },
    list: {
      type: "varchar",
      length: 255
    }
  }
};