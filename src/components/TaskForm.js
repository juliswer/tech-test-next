// ? Import React
import React from "react";

// ? Import Next Hooks
import { useRouter } from "next/router";

// ? Import axios to make async https petitions
import axios from "axios";

// ? Import Material UI Components
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// ? Import Library to make toasts
import toast from "react-hot-toast";

// ? Import Loading Component
import Loading from "./Loading";

// ? Import TaskForm Toast Config
import { taskFormEventConfig } from "../helpers/toast_config";

// * Form Styles
const FormStyle = {
  background: "rgba(204, 204, 204, 0.40)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  padding: "0px 10px 10px 10px",
  width: "35%",
  padding: "10px",
};

// * Form Component
function TaskForm({ title: titleProp }) {
  // useStates to the Form Component
  const [title, setTitle] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    title: "",
    description: "",
  });

  // Initialize Router
  const router = useRouter();

  // Get id from Router Query (url)
  const { id: taskId } = router.query;

  // Logic to handle the form values
  const findTaskById = async () => {
    try {
      setIsLoading(true);
      const task = await axios.get(`/api/tasks/${taskId}`);
      setIsLoading(false);
      setTitle(task.data.title);
      setFormValues(task.data);
      setEditedTask(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Logic to submit the form
  const handleSubmit = async () => {
    if (editedTask) {
      try {
        setIsLoading(true);
        await axios.put(`/api/tasks/${taskId}`, formValues);
        setIsLoading(false);
        toast.success("Task updated successfully!", taskFormEventConfig);
      } catch (error) {
        console.log(error);
        toast.error("Error updating task!", taskFormEventConfig);
      }
    } else {
      try {
        await axios.post("/api/tasks", formValues);
        toast.success("Task created successfully!", taskFormEventConfig);
      } catch (error) {
        console.log(error);
        toast.error("Error creating task!", taskFormEventConfig);
      }
    }
    setFormValues({
      title: "",
      description: "",
    });
    setTitle("");
    router.push("/");
  };

  // useEffect to set the title
  React.useEffect(() => {
    if (router.query.id === undefined) {
      setTitle(titleProp);
    } else if (router.query.id !== undefined) {
      findTaskById();
    }
  }, [router.query.id]);

  // * Render the Form Component
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
            {isLoading ? "Submiting" : "Submit"}
          </Button>
        </Paper>
      )}
    </>
  );
}

export default TaskForm;
