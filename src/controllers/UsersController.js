const User = require('../models/User');

module.exports = {
  async create(request, response) {
      const { name, email } = request.body;

      const user = await User.create({ name, email });

      return response.json(user);
  },

  async index(reques, response) {
    const users = await User.findAll();

    return response.json(users)
  }
}