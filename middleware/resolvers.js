const Plan = require("../models/plan");
const Contact = require("../models/contact");
const Employee = require("../models/employee");

const resolvers = {
  Query: {
    plans: () => Plan.find(),
    employees: () =>
      Employee.aggregate([
        {
          $lookup: {
            from: "position",
            localField: "position",
            foreignField: "_id",
            as: "position",
          },
        },
        // {
        //   $lookup: {
        //     from: "department",
        //     localField: "position.department",
        //     foreignField: "_id",
        //     as: "position.department",
        //   },
        // },
      ]),
  },
  Mutation: {
    createContect: (parent, args) => {
      Contact.create(args);
      return args;
    },
  },
};

module.exports = resolvers;
