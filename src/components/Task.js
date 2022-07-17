import React from "react";
import Switch from "@mui/material/Switch";
import axios from "axios";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TimeAgo from "react-timeago";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const TaskStyles = {
  background: "rgba(204, 204, 204, 0.40)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  padding: "0px 10px 10px 10px",
  marginBottom: "10px"
};

function Task({ task }) {
  const router = useRouter();

  const [checked, setChecked] = React.useState(false);
  const [wasEdited, setWasEdited] = React.useState(false);
  const [showDateTask, setShowDateTask] = React.useState("");

  const checkEdited = () => {
    if (task.createdAt === task.updatedAt) {
      setWasEdited(false);
    } else {
      setWasEdited(true);
    }
  };

  const dateToShow = () => {
    if (!wasEdited) {
      const _formatedDate = new Date(task.createdAt);
      const formatDate = _formatedDate.toLocaleDateString("en-US");
      setShowDateTask(formatDate);
    } else {
      const _formatedDate = new Date(task.updatedAt);
      const formatDate = _formatedDate.toLocaleDateString("en-US");
      setShowDateTask(formatDate);
    }
  };

  React.useEffect(() => {
    checkEdited();
    dateToShow();
  }, [wasEdited]);

  React.useEffect(() => {
    if (task.done) {
      setChecked(true);
    }
  }, []);

  const handleCheckChange = async (event) => {
    setChecked(event.target.checked);
    try {
      await axios.put(`/api/tasks/${task._id}`, {
        done: event.target.checked,
      });
      if (event.target.checked === true) {
        toast.success(`Great! Task "${task.title}" was finished!`, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        toast.success(
          `Task ${task.title} was undone! I'm sure it will be done soon!`,
          {
            position: "bottom-left",
            duration: 5000,
          }
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Error finishing task!", {
        position: "bottom-left",
        duration: 5000,
      });
    }
  };

  const handleDelete = async () => {
    const res = await axios.delete(`/api/tasks/${task._id}`);
    router.reload(window.location.pathname);
    console.log(res);
  };

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
