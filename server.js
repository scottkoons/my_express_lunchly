/** Start server for Lunchly. */
const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(`server.js listening at http://localhost:${port}`);
});
