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
    dob: {
      type: "date"
    },
    employer: {
      type: "varchar",
      length: 255
    },
    education: {
      type: "varchar",
      length: 255
    },
    city: {
      type: "varchar",
      length: 255
    },
    likesDislikes: {
      type: "text"
    },
    portfolioid: {
      type: "int"
    }
  },
  relations: {
      portfolios: {
        target: "portfolio",
        type: "one-to-one",
        cascade: true
      }
  }
};