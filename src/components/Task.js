// ? Import React
import React from "react";

// ? Import Next Hooks
import { useRouter } from "next/router";

// ? Import axios to handle async code
import axios from "axios";

// ? Import Material UI Components
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/system";

// ? Import TimeAgo library
import TimeAgo from "react-timeago";

// ? Import Toast Library
import toast from "react-hot-toast";

// ? Import Material UI Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// ? Import ToastConfig
import { taskEventConfig } from "../helpers/toast_config";

// * Styles for Task component
const TaskStyles = {
  background: "rgba(204, 204, 204, 0.40)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  padding: "0px 10px 10px 10px",
  marginBottom: "10px",
  marginInLine: "10px"
};

// * Task Component
function Task({ task }) {
  // Initialize Router
  const router = useRouter();

  // States for the Task component
  const [checked, setChecked] = React.useState(false);
  const [wasEdited, setWasEdited] = React.useState(false);
  const [showDateTask, setShowDateTask] = React.useState("");

  // Logic to handle the wasEdited state
  const checkEdited = () => {
    if (task.createdAt === task.updatedAt) {
      setWasEdited(false);
    } else {
      setWasEdited(true);
    }
  };

  // Logic to handle the timeago component
  const dateToShow = () => {
    if (!wasEdited) {
      const formatDate = task.createdAt;
      setShowDateTask(formatDate);
    } else {
      const formatDate = task.updatedAt;
      setShowDateTask(formatDate);
    }
  };

  // useEffect to always be pendient of wasEdited and time state
  React.useEffect(() => {
    checkEdited();
    dateToShow();
  }, [wasEdited, task.createdAt, task.updatedAt]);

  // Logic to handle the switch component
  React.useEffect(() => {
    if (task.done) {
      setChecked(true);
    }
  }, []);

  // Logic to handle the check and make petitions in real time
  const handleCheckChange = async (event) => {
    setChecked(event.target.checked);
    try {
      await axios.put(`/api/tasks/${task._id}`, {
        done: event.target.checked,
      });
      if (event.target.checked === true) {
        toast.success(
          `Great! Task "${task.title}" was finished!`,
          taskEventConfig
        );
      } else {
        toast.success(
          `Task "${task.title}" was undone! I'm sure it will be done soon!`,
          taskEventConfig
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Error finishing task!", taskEventConfig);
    }
  };

  // Logic to handle the delete task petition
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tasks/${task._id}`);
      toast.success(`Task "${task.title}" was deleted!`, taskEventConfig);
    } catch (error) {
      console.log(error);
      toast.error("Error deleting task!", taskEventConfig);
    }
  };

  // * Render the Task Component
  return (
    <Paper elevation={2} style={TaskStyles}>
      <Typography
        variant="h4"
        component="h1"
        style={{ fontWeight: "bold", color: "#fff" }}
      >
        {task.title}
      </Typography>
      <Typography variant="h6" component="p" style={{ color: "#e1e1e1" }}>
        {task.description}
      </Typography>
      <Typography
        variant="p"
        component="p"
        style={{
          fontStyle: "italic",
          fontSize: "15px",
          color: "#ccc",
          textAlign: "right",
          marginTop: "5px",
        }}
      >
        {wasEdited ? "Edited " : "Created "} <TimeAgo date={showDateTask} />
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              color="warning"
              onChange={handleCheckChange}
              style={{ color: "#ccc" }}
            />
          }
          label={checked ? "Unfinished" : "Finished"}
          style={{ color: "#fff" }}
        />
      </FormGroup>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          onClick={() => router.push(`/update/${task._id}`)}
        >
          Edit
        </Button>
      </Box>
    </Paper>
  );
}

export default Task;
