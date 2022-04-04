const express = require("express");
const app = express(); //objektas kuriame surasyti express metodai

const students = [
  { id: 1, name: "Jonas", age: 22 },
  { id: 2, name: "Jonė", age: 35 },
  { id: 3, name: "Jonas", age: 32 },
  { id: 4, name: "Ana", age: 35 },
  { id: 5, name: "Linas", age: 33 },
];

app.get("/", (req, res) => {
  res.status(200).send("Get metodo rezultatas NAUJAS");
});

app.get("/api/v1/students", (req, res) => {
  res.status(200).json({
    status: "success",
    results: students.length,
    data: {
      students: students,
    },
  });
});

app.get("/api/v1/students/:id", (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;

  const student = students.filter((item) => item.id == id);
  console.log(student);

  res.status(200).json({
    status: "success",
    results: student.length,
    data: {
      student: student,
    },
  });
});

app.get("/api/v1/students/:id/:next", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.next);
});

app.post("/", (req, res) => {
  res.send("Post metodo rezultatas");
});

const port = 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
