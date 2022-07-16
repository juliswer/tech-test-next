import { dbConnect } from "../../../utils/mongoose";
import Task from "../../../models/Task";

dbConnect();

export default async function hanlderId(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json({ error });
      }
    case "PUT":

      const bodyUpdated = {
        title: body.title,
        description: body.description,
        done: body.done,
      };

      try {
        const task = await Task.findByIdAndUpdate(id, bodyUpdated, {
          new: true,
        });
        if (!task) return res.status(404).json({ error: "Task not found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json({ error });
      }
      
    case "DELETE":
      try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        return res.status(200).json(task);
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
