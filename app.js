import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import {localsMiddleWare} from "./middlewares";

const app = express();

// MiddleWares
app.use(helmet());
app.set('view engine', 'pug'); //controller.render(view) : .pug file connect
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(localsMiddleWare);

//Routing middleware
//사용자가 정의한 Router 모듈을 미들웨어로 세팅 (./routers/)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;