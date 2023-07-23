/* ローカルサーバーをexpressで構築 */
const express = require("express");
const app     = express();
const PORT    = 8000;

/* エンドポイントを設定 */
app.get("/api/vi/tasks", (req, res) => {
  res.send("タスクを全て取得");
});

app.post("/api/vi/tasks", (req, res) => {
  res.send("タスクを新規作成");
});

app.get("/api/vi/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを取得しました");
});

app.patch("/api/vi/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを更新しました");
});

app.delete("/api/vi/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを削除しました");
});

app.listen(PORT, console.log("サーバーが起動"));
