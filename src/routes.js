import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import authUser from "./app/utils/util";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.get("/users/all", UserController.listAll);
routes.get("/users/:id", UserController.searchByid);

routes.get("/auth", authUser);

routes.use(authMiddleware);

routes.put("/users", UserController.update);

routes.delete("/users/:id", UserController.deleteById);

routes.post("/files", upload.single("file"), FileController.store);


export default routes;
