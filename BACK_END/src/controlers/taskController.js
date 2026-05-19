import { tasks } from "../data/task.js";
export const createTask = (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Task title is required",
    });
  }
  const newTask = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

export const getAllTasks = (req, res) => {
  res.json(tasks);
};

export const getCompletedTasks = (req, res) => {
  res.json(tasks.filter((t) => t.completed));
};

export const getPendingTasks = (req, res) => {
  res.json(tasks.filter((t) => !t.completed));
};

export const markCompleted = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  task.completed = true;
  task.updatedAt = new Date();

  res.json(task);
};

export const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  tasks.splice(index, 1);

  res.json({
    message: "Task deleted",
  });
};