const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const reviewRouter = require("./routes/review.router");
const ratingRouter = require("./routes/rating.router");
const seriesRouter = require("./routes/series.router");
const fileUpload = require("./routes/fileUpload.router");
const watchingRouter = require("./routes/watching.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/review", reviewRouter);
app.use("/api/rating", ratingRouter);
app.use("/api/series", seriesRouter);
app.use("/api/upload", fileUpload);
app.use("/api/watching", watchingRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
