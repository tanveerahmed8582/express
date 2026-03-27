//***************************************Express server setup**********************************

// const express = require("express");

// const app = express();

// app.get("", (req, res) => {
//   res.send("<h1>Hello From server</h1>");
// });

// app.listen(8000, () =>
//   console.log("Server is Running at http://localhost:8000"),
// );

//***************************************Simple Routing****************************************

// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//   res.send("<h1>This is Home Page</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>This is About Page</h1>");
// });
// app.get("/profile", (req, res) => {
//   res.send("<h1>This is Profile Page</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>This is Contact Page</h1>");
// });
// app.use((req, res) => {
//   res.status(404).send("<h1>404! Page Not Found</h1>");
// });

// app.listen(8000, () =>
//   console.log("Server is Running at http://localhost:8000"),
// );

//********************Request Parameter and Query Parameter**********************************

// const express = require("express");

// const app = express();

// app.get("", (req, res) => {
//   res.send("<h1>This is Home Page</h1>");
// });

// //Request Parameter
// //http://localhost:8000/profile/tanveer/engineer/18900
// app.get("/profile/:name/:dsg/:salery", (req, res) => {
//   console.log(req.params);
//   res.send(`<h1>This is Profile Page</h1>
//     ${req.params.name ? `<h2>Name : ${req.params.name}</h2>` : ""}
//     ${req.params.dsg ? `<h2>Dsg : ${req.params.dsg}</h2>` : ""}
//     ${req.params.salery ? `<h2>Salery : ${req.params.salery}</h2>` : ""}
//     `);
// });

// //Query Parameter
// //http://localhost:8000/contact?name=Alisha&dsg=Teacher&salery=7500
// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.send(`<h1>This is Contact Page</h1>
//     ${req.query.name ? `<h2>Name : ${req.query.name}</h2>` : ""}
//     ${req.query.dsg ? `<h2>Designation : ${req.query.dsg}</h2>` : ""}
//     ${req.query.salery ? `<h2>Salery : ${req.query.salery}</h2>` : ""}
//     `);
// });

// app.use((req, res) => {
//   res.status(404).send("<h1>404! Page Not Found</h1>");
// });

// app.listen(8000, () =>
//   console.log("Server is Running at http://localhost:8000"),
// );

//**************************Server Serving JSON Data********************************

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h2>This is Home Page</h2>");
// });

// app.get("/data", (req, res) => {
//   let data = [
//     {
//       id: 1001,
//       name: "Taneer Ahmed",
//       dsg: "developer",
//       salary: 25000,
//       city: "Siwan",
//       state: "Bihar",
//     },
//     {
//       id: 1002,
//       name: "Saurabh Singh",
//       dsg: "Marine Engineer",
//       salary: 89000,
//       city: "Faridabad",
//       state: "Haryana",
//     },
//     {
//       id: 1003,
//       name: "Manish Patel",
//       dsg: "CA",
//       salary: 38000,
//       city: "Delhi",
//       state: "Delhi",
//     },
//     {
//       id: 1004,
//       name: "Danish Ansari",
//       dsg: "Loco-Pilot",
//       salary: 80000,
//       city: "Kolkata",
//       state: "West Bengal",
//     },
//     {
//       id: 1005,
//       name: "Zishan Ali",
//       dsg: "Businessman",
//       salary: 91000,
//       city: "Noida",
//       state: "UP",
//     },
//   ];

//   res.send(data);
// });

// app.use((req, res) => {
//   res.status(404).send("<h2>404! Page Not Found</h2>");
// });

// app.listen(8000, () =>
//   console.log("Server is Running at http://localhost:8000"),
// );

// const express = require("express");
// let fs = require("fs");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h2>This is Home Page</h2>");
// });

// app.get("/data", (req, res) => {
//   let data = fs.readFileSync("data.json", "utf-8");
//   res.send(JSON.parse(data));
// });

// app.use((req, res) => {
//   res.status(404).send("<h2>404! Page Not Found</h2>");
// });

// app.listen(8000, () => {
//   console.log("Server is Running at http://localhost:8000");
// });

//**************************Templace Engine with Express********************************

// const express = require("express");
// const app = express();
// // app.set('view engine', 'hbs')

// app.get("", (req, res) => {
//   const name = "Tanveer Ahmed";
//   const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//   let data = [
//     {
//       id: 1001,
//       name: "Tanveer Ahmed",
//       designation: "Frontend Developer",
//       salary: 30000,
//       city: "Siwan",
//       state: "Bihar",
//     },
//     {
//       id: 1002,
//       name: "Saurabh Singh",
//       designation: "Marine Engineer",
//       salary: 90000,
//       city: "Faridabad",
//       state: "Haryana",
//     },
//     {
//       id: 1003,
//       name: "Manish Patel",
//       designation: "Chartered Accountant",
//       salary: 45000,
//       city: "Delhi",
//       state: "Delhi",
//     },
//     {
//       id: 1004,
//       name: "Danish Ansari",
//       designation: "Loco Pilot",
//       salary: 80000,
//       city: "Kolkata",
//       state: "West Bengal",
//     },
//     {
//       id: 1005,
//       name: "Zishan Ali",
//       designation: "Businessman",
//       salary: 95000,
//       city: "Noida",
//       state: "Uttar Pradesh",
//     },
//     {
//       id: 1006,
//       name: "Amit Kumar",
//       designation: "Backend Developer",
//       salary: 40000,
//       city: "Patna",
//       state: "Bihar",
//     },
//     {
//       id: 1007,
//       name: "Rahul Verma",
//       designation: "Software Engineer",
//       salary: 70000,
//       city: "Bangalore",
//       state: "Karnataka",
//     },
//     {
//       id: 1008,
//       name: "Pooja Sharma",
//       designation: "HR Manager",
//       salary: 50000,
//       city: "Mumbai",
//       state: "Maharashtra",
//     },
//     {
//       id: 1009,
//       name: "Neha Gupta",
//       designation: "UI/UX Designer",
//       salary: 55000,
//       city: "Jaipur",
//       state: "Rajasthan",
//     },
//     {
//       id: 1010,
//       name: "Arjun Mehta",
//       designation: "Data Analyst",
//       salary: 60000,
//       city: "Hyderabad",
//       state: "Telangana",
//     },
//   ];
//   res.render("index.hbs", {
//     name: name,
//     arr: arr,
//     data: data,
//   });
// });

// app.use((req, res) => {
//   res.status(404).send("<h2>404! Page Not Found</h2>");
// });

// app.listen(8000, () => {
//   console.log("Server is Running at http://localhost:8000");
// });

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const encoder = new bodyParser.urlencoded();

app.use("/public", express.static("public"));

app.get("", (req, res) => {
  res.render("home.hbs", {
    show: false,
    output: "",
  });
});

app.post("", encoder, (req, res) => {
  // console.log(req.body);
  if (req.body.option === "1")
    var output = req.body.message.split("").reverse().join("");
  else var output = req.body.message.split("").reverse().join(" ");

  res.render("home.hbs", {
    show: true,
    output: output,
  });
});

app.use((req, res) => {
  res.status(404).send("<h2>404! Page Not Found</h2>");
});

app.listen(8000, () => {
  console.log("Server is Running at http://localhost:8000");
});
