import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import surveyRoute from "./routes/survey.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/survey", surveyRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
