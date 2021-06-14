const { Router } = require("express");
const UsersController = require("./controllers/UsersController");
const AddressController = require("./controllers/AddressController");

const routes = Router();

routes.post("/users", UsersController.create);
routes.get("/users", UsersController.index);

routes.post("/users/:user_id/addresses", AddressController.create);
routes.get("/users/:user_id/addresses", AddressController.index);

module.exports = routes;
