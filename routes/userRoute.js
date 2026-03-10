
import express from "express";
import { getUsers,addUserForm,addUser,deleteUser,editUserForm,saveUser} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/add", addUserForm);
userRouter.post("/add", addUser);
userRouter.get("/:id/delete", deleteUser);
userRouter.get("/:id/edit", editUserForm);
userRouter.post("/:id/save", saveUser);

export { userRouter };