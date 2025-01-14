// פהמי והבי + מאור דוד

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("Hello1");
  next();
});

app.use((req, res, next) => {
  console.log("Hello2");
  next();
});

app.use("/users", (req, res, next) => {
  res.send(`
    <html>
      <head><title>Users Page</title></head>
      <body>
        <h1>Welcome to the "Users" Page</h1>
        <p>This is content specific to the users section.</p>
      </body>
    </html>
  `);
});

app.use("/", (req, res, next) => {
  res.send(`
    <html>
      <head><title>Default Page</title></head>
      <body>
        <h1>Hello from Express!</h1>
        <p>This is the default content for all other routes.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
