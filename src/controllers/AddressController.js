const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
  async create(request, response) {
    const { user_id } = request.params;
    const { zipcode, street, number } = request.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return response.status(400).json({ error: "User does not exist" });
    }

    const address = await Address.create({ user_id, zipcode, street, number });

    return response.json(address);
  },

  async index(request, response) {
    const { user_id } = request.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });

    return response.json(user);
  },
};
