import { Router } from "express";
// import { User } from "./app/models/User";

import UserController from "./app/controllers/UserController";

const routes = new Router();

// routes.post("/users", UserController.store);

routes.get("/", async (req, res) => {
  // const user = await User.create({
  //   name: 'teste',
  //   email: 'teste@gmail.com',
  //   password: 'fla',
  //   birth_date: '08/09/1998',
  //   main_role: 'Sequelize.STRING',
  //   kick: 8,
  //   speed: 9,
  //   pass: 10,
  //   drible: 10,
  //   defense: 10,
  //   goals: 10,
  //   victories: 10,
  //   assistances: 10,
  // });
  return res.json({ message: "user api" });
  // return res.json(user);
});

export default routes;
