import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";

const FormStyle = {
  background: "rgba(204, 204, 204, 0.40)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  padding: "0px 10px 10px 10px",
  width: "35%",
  padding: "10px",
};

function TaskForm({ title: titleProp }) {
  const [title, setTitle] = React.useState("");
  const [editedTask, setEditedTask] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    title: "",
    description: "",
  });

  const router = useRouter();
  const { id: taskId } = router.query;

  const findTaskById = async () => {
    const task = await axios.get(`/api/tasks/${taskId}`);
    setTitle(task.data.title);
    setFormValues(task.data);
    setEditedTask(true);
  };

  const handleSubmit = async () => {
    if (editedTask) {
      try {
        await axios.put(`/api/tasks/${taskId}`, formValues);
        toast.success("Task updated successfully!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        console.log(error);
        toast.error("Error updating task!", {
          position: "top-center",
          duration: 5000,
        });
      }
    } else {
      try {
        await axios.post("/api/tasks", formValues);
        toast.success("Task created successfully!", {
          position: "top-center",
          duration: 5000,
        });
      } catch (error) {
        console.log(error);
        toast.error("Error creating task!", {
          position: "top-center",
          duration: 5000,
        });
      }
    }
    setFormValues({
      title: "",
      description: "",
    });
    setTitle("");
    router.push("/");
  };

  React.useEffect(() => {
    if (router.query.id === undefined) {
      setTitle(titleProp);
    } else if (router.query.id !== undefined) {
      findTaskById();
    }
  }, [router.query.id]);

  return (
    <>
      <Paper style={FormStyle}>
        <Typography
          variant="h4"
          component="h4"
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {title}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            label="Title"
            variant="standard"
            color="info"
            InputProps={{
              style: {
                color: "#fff",
              },
            }}
            required
            value={formValues.title}
            onChange={(e) =>
              setFormValues({ ...formValues, title: e.target.value })
            }
          />
          <TextField
            label="Description"
            variant="standard"
            required
            color="info"
            InputProps={{
              style: {
                color: "#fff",
              },
            }}
            value={formValues.description}
            onChange={(e) =>
              setFormValues({ ...formValues, description: e.target.value })
            }
          />
        </div>
        <Button
          style={{ width: "100%", marginTop: "20px" }}
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </>
  );
}

export default TaskForm;
