import session from "express-session";
import express from "express";
function insecureFunction() {
    const sessionMiddleware = session({
        secret: "changeit",
        resave: false,
        saveUninitialized: false
    });
    // create an app that uses the session middleware
    const app = express();
    app.use(sessionMiddleware);
}
