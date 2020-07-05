require("./startup/config")();

const express = require("express");
const app = express();

const winston = require("winston");

require("./startup/logger")();
require("./startup/routes")(app);
require("./startup/mongo")();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  winston.info(`Listning on port ${port}`);
});
