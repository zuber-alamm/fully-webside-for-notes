import express from "express"

const Routes = express.Router()

import {
  createTask,
  getAllTasks,
  getCompletedTasks,
  getPendingTasks,
  markCompleted,
  deleteTask,
} from "../controlers/taskController";

router.post("/taskes", createTask);

router.get("/taskes", getAllTasks);

router.get("/taskes/completed", getCompletedTasks);

router.get("/taskes/pending", getPendingTasks);

router.patch("/taskes/:id", markCompleted);

router.delete("/taskes/:id", deleteTask);

export default router;