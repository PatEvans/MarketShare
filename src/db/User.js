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
      type: "varchar",
      length: 255
    },
    dob: {
      type: "date",
      nullable: true
    },
    employer: {
      type: "varchar",
      length: 255,
      nullable: true
    },
    education: {
      type: "varchar",
      length: 255,
      nullable: true
    },
    city: {
      type: "varchar",
      length: 255,
      nullable: true
    },
    likesDislikes: {
      type: "text",
      nullable: true
    }
  },
  relations: {
      portfolios: {
        target: "portfolio",
        type: "one-to-one",
      }
  }
};