const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

/*
    cors 옵션 주지 않으면 전체 허용
*/
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/dog", function (req, res) {
  res.send("dog");
});

app.get("/cat", function (req, res) {
  res.json({ sound: "야옹" });
});

app.get("/user/:id", function (req, res) {
  const q = req.params;
  console.log(q);
  console.log(q.id);

  const q2 = req.query;
  console.log(q2);

  res.json({
    q: q2.q,
  });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;

  if (name === "dog") {
    res.json({
      name,
    });
  } else if (name === "cat") {
    res.json({
      name,
    });
  } else if (name === "pig") {
    res.json({
      name,
    });
  } else {
    res.send("not pound");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
