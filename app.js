const fs = require("fs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const users = JSON.parse(fs.readFileSync(__dirname + "/users.json"));

// Get all users
app.get("/", (req, res) => {
  res.status(200).json(users);
});

// Get all users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// Get users by age range
app.get("/api/users/filter", (req, res) => {
  const { minAge, maxAge } = req.query;

  if (!minAge || !maxAge) {
    return res.status(400).send("minAge and maxAge must be provided.");
  }

  const min = Number(minAge);
  const max = Number(maxAge);

  const filteredUsers = users.filter(
    (user) => user.age >= min && user.age <= max
  );

  if (filteredUsers.length === 0) {
    return res.status(404).send("No users found in the specified age range.");
  }

  res.status(200).json(filteredUsers);
});

// Get user by ID
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const singleUser = users.find((user) => user.id === Number(id));

  if (!singleUser) {
    return res.status(404).send("Product Does Not Exist");
  }

  res.status(200).json(singleUser);
});

app.get("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const singleUser = users.find((user) => user.id === Number(id));

  if (!singleUser) {
    return res.status(404).send("Product Does Not Exist");
  }

  res.send(
    `<html>
      <head></head>
      <body>
        <h1>PersonID: ${singleUser.id}</h1>
        <h1>PersonName: ${singleUser.name}</h1>
        <h1>PersonEmail: ${singleUser.email}</h1>
        <h1>PersonEmail: ${singleUser.ages}</h1>
      </body>
    </html>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
