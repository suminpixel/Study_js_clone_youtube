import routes from "./routes";

export const localsMiddleWare = (req, res, next) => {
    res.locals.siteName = "myStreamingTube";  //res.locals : 로컬 변수를 외부에서 사용하기 위한 응답 세팅
    res.locals.routes = routes;
    next();
};