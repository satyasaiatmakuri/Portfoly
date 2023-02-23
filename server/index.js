const express = require("express");
const cors = require("cors");
const educationRoutes = require("./routes/EducationRoutes");
const experienceRoutes = require("./routes/ExperienceRoutes");
const languageRoutes = require("./routes/LanguageRoutes");
const projetRoutes = require("./routes/ProjetRoutes");
const skillRoutes = require("./routes/SkillRoutes");
const userRoutes = require("./routes/UserRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const mongoose = require("mongoose");
require("dotenv").config({ path: "server/config/config.env" });
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/educations", educationRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/projects", projetRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

app.use("/uploads", express.static("uploads"));

if (process.env.NODE_ENV === 'PRODUCTION') {
  //*Set static folder up in production
  app.use(express.static('client/build'));

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}

app.listen(process.env.PORT, () =>
  console.log(`server is running in port ${process.env.PORT}`)
);

mongoose
  .connect(process.env.DATA_BASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));
