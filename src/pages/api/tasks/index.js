// import Task from "models/Task";
// import {dbConnect} from "../../../utils/mongoose"
import { dbConnect } from "../../../utils/mongoose";
import Task from "../../../models/Task";

export default async function handler(req, res) {

  const { method, body } = req;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(500).json({ error: error });
      }
    case "POST":
      try {
        const newTask = new Task(body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (error) {
        return res.status(500).json({ error: error });
      }
    default:
      return res.status(405).json({ 
        error: "Method not allowed",
        method,
        msg: "If this is an error, please report it to the developer"
    });
  }
}
