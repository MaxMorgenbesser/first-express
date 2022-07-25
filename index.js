// importn express library
import express, { response } from "express";

// initialize express server
const app = express();
app.use(express.json())

//list requests that we want express to respond to
app.post("/students", (request, response) => {
  const newStudent = request.body;
  students.push(newStudent)
  response.status(201).send(students);
});
app.get("/hello", (request, response) => {
  // can be rec and res
  //do sonething
  response.send("Hello World");
});

const students = [
  { firstName: "jonathon", lastName: "Vegas" },
  { firstName: "Brigette", lastName: "Lemus" },
  { firstName: "Mason", lastName: "Madaras" },
  { firstName: "Logan", lastName: "McCalley" },
];
app.get("/students", (request, response) => {
  response.json(students);
});
//: makes a variable not a strig
///students/mason
app.get("/students/:fName", (request, response) => {
  const student = students.find(
    (stud) => stud.firstName === request.params.fName
  );
  if (!student) {
    response.status(404).send("Error: Student not found");
    failed = true;
    return;
  } else {
    response.send(student);
  }
});

// start listening on port
app.listen(3001, () => {
  console.log("Now listening on port 3001");
});
