const express = require("express");
/* ルーティング設計 */
const router = express.Router();

const {
  getAllTasks,
  createTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

/* エンドポイントを設定 */
router.get("/", getAllTasks);

router.post("/", createTasks);

router.get("/:id", getSingleTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;