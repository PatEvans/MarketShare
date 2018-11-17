module.exports = {
  name: "friends",
  columns: {
    userid: {
      primary: true,
      type: "int",
    },
    list: {
      type: "varchar",
      length: 255
    }
  }
};