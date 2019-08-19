var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var machesRouter = require("./routes/matches");
var predictionsRouter = require("./routes/predictions");

const graphql = require("graphql");
const { postgraphile } = require("postgraphile");

const cors = require("cors");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const { GraphQLSchema } = graphql;
const PostGraphileConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");

var app = express();

app.use(cors());

app.use(
  postgraphile("postgres://admin:@localhost:5432/tipsters", "tipsters", {
    extendedErrors: ["hint", "detail", "errcode"],
    graphiql: true,
    enableCors: true,
    exportGqlSchemaPath: "../client/schema.graphql",
    //appendPlugins: [MyPlugin],
    //appendPlugins: [PostGraphileConnectionFilterPlugin],
    subscriptions: true
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Cross domain --DT
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  if ("OPTIONS" === req.method) {
    //respond with 200
    res.send(200);
  } else {
    //move on
    next();
  }
};
app.use(allowCrossDomain);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

//use routes --DT
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/matches", machesRouter);
app.use("/matches", predictionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
