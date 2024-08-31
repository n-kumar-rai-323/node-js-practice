const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: "Hello Get" });
});

router.post("/", (req, res) => {
  res.json({ data: "Hello Put" });
});

router.patch("/", (req, res) => {
  res.json({ data: "Hello Patch" });
});

router.put("/", (req, res) => {
  res.json({ data: "Hello Put" });
});

router.delete("/", (req, res) => {
  res.json({ data: "Hello Delete" });
});
module.exports = router;
