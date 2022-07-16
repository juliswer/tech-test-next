import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

function TaskForm({ title: titleProp }) {
  const [title, setTitle] = React.useState("");
  const [taskId, setTaskId] = React.useState("");
  const [editedTask, setEditedTask] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    title: "",
    description: "",
  });

  const router = useRouter();

  const findTaskById = async () => {
    const task = await axios.get(`/api/tasks/${taskId}`);
    setTitle(task.data[0].title);
    setFormValues(task.data[0]);
    setEditedTask(true);
  };

  const handleSubmit = () => {

    if (editedTask) {
      axios.put(`/api/tasks/${taskId}`, formValues);
    } else {
      axios.post("/api/tasks", formValues);
    }

    router.push("/");
  };

  React.useEffect(() => {
    if (router.query.id === undefined) {
      setTitle(titleProp);
    } else if (router.query.id !== undefined) {
      setTaskId(router.query.id);
      findTaskById();
    }
  }, [router.query.id]);

  return (
    <>
      <Paper style={{ width: "35%", padding: "10px" }}>
        <Typography variant="h4" component="h4" style={{ textAlign: "center" }}>
          {title}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            label="Title"
            variant="outlined"
            required
            value={formValues.title}
            onChange={(e) =>
              setFormValues({ ...formValues, title: e.target.value })
            }
          />
          <TextField
            label="Description"
            variant="outlined"
            required
            value={formValues.description}
            onChange={(e) =>
              setFormValues({ ...formValues, description: e.target.value })
            }
          />
        </div>
        <Button
          style={{ width: "100%", marginTop: "20px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </>
  );
}

export default TaskForm;
