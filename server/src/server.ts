import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import memberRoutes from "./routes/member.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/dashboard", dashboardRoutes);
app.use("/members", memberRoutes);
app.use("/auth", authRoutes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "OMANA HUB API",
    version: "1.0.0",
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "OK",
    time: new Date(),
  });
});

const PORT = process.env.PORT || 5000;

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`🚀 OMANA HUB API démarrée sur le port ${PORT}`);
});
