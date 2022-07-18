// ? Import Connect Function (Connects the database);
import { dbConnect } from "../../../utils/mongoose";

// ? Import Task Model
import Task from "../../../models/Task";

// * Database Connection
dbConnect();

// * Index Page
export default async function handler(req, res) {
  // ! Get req params
  const { method, body } = req;

  // ! Handle HTTPS Requestes
  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(500).json({ error });
      }
    case "POST":
      try {
        const newTask = new Task(body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (error) {
        return res.status(500).json({ error });
      }
    default:
      return res.status(405).json({
        error: "Method not allowed",
        method,
        msg: "If this is an error, please report it to the developer",
      });
  }
}
