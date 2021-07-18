const express = require("express");
const { name } = require("faker");
const { people } = require("./models");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", async (_req, res) => {
  let all = [];
  try {
    await people.create({
      name: `${name.firstName()} ${name.lastName()}`,
    });

    all = await people.findAll();
  } catch (e) {
    console.log(e);
  }

  res.send(
    `<h1>Full Cycle Rocks!</h1><br><ul>${all
      .map((row) => `<li>${row.name}</li>`)
      .join("")}</ul>`
  );
});

app.listen(3000);
