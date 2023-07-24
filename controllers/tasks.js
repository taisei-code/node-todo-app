/* アルゴリズム */
const getAllTasks = (req, res) => {
  res.send("タスクを全て取得しました");
};

const createTasks = (req, res) => {
  res.send("タスクを新規作成");
};

const getSingleTask = (req, res) => {
  res.send("ある特定のタスクを取得しました");
};

const updateTask = (req, res) => {
  res.send("ある特定のタスクを更新しました");
};

const deleteTask = (req, res) => {
  res.send("ある特定のタスクを削除しました");
};

module.exports = {
  getAllTasks,
  createTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};