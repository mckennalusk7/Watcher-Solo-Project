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
const watchingRouter = require("./routes/watching.router");

const UploaderS3Router = require("react-dropzone-s3-uploader/s3router");

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
app.use("/api/watching", watchingRouter);

app.use(
  "/s3",
  UploaderS3Router({
    bucket: "watcherprojectbucket", // required
    region: "us-west-2", // optional
    headers: { "Access-Control-Allow-Origin": "*" }, // optional
    ACL: "public-read", // this is the default - set to `public-read` to let anyone view uploads
  })
);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
