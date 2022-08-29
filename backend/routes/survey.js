import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  console.log("Test");
  res.send("This is response!");
});

export default router;
