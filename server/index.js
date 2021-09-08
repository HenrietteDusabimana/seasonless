import express from "express";
import router from "./routes/index.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
// app.use("/", express.static("./public"));
app.use(router);

app.listen(8080, () => console.log("Server running on port 8080"));
