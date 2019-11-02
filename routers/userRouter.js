import express from 'express';
import routes from "../routes";
const userRouter = express.Router();
import {users, editProfile, changePassword, userDetail} from "../controllers/userController"

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, changePassword);
userRouter.get(routes.changePassword, userDetail);

export default userRouter;