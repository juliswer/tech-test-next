// ? Import Database Connection
import { dbConnect } from "../../../utils/mongoose";

// ? Import Task Model
import Task from "../../../models/Task";

// * Database Connection
dbConnect();

// * HandlerId
export default async function handlerID(req, res) {
  // ! Get req params
  const {
    method,
    body,
    query: { id },
  } = req;

  // ! Handle HTTPS Requestes
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
