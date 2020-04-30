require("dotenv").config();
const app = require("./app");
const { PORT, NODE_ENV } = require("./configconfig");

app.listen(PORT, () => console.log(`Server running in ${NODE_ENV} on ${PORT}`));
