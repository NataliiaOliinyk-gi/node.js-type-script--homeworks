import { Router } from "express";

import {
    addUserController,
    changeUserPasswordController,
    changeUserEmailController,
    deleteUserController,
    getAdminsController,
} from "../controllers/users.controller.js";
import { authenticate, isAdmin } from "../midllewares/authorization.js";

const userRouter = Router();

userRouter.post("/register", addUserController);
userRouter.post("/change-password/", authenticate, changeUserPasswordController);
userRouter.post("/change-email/", authenticate, changeUserEmailController);
userRouter.delete("/delete-account/", authenticate, deleteUserController);

userRouter.get("/admin", authenticate, isAdmin, getAdminsController);


export default userRouter;