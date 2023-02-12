
const { isAdmin } = require("../../middlewares/auth");
const { register, getAllUsers, getUserById, getUserByEmail, deleteUser, login } = require("./user.controller");

const UserRoutes = require("express").Router();

UserRoutes.post("/", [isAdmin], register);
UserRoutes.post("/login", login);
UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserById);
UserRoutes.get("/email/:email", getUserByEmail);
UserRoutes.delete("/:id" [isAdmin], deleteUser);

module.exports = UserRoutes;