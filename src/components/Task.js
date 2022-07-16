import React from "react";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { Button, FormControlLabel, FormGroup, Paper } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "react-timeago";
import en from "javascript-time-ago/locale/en.json";
import { useRouter } from "next/router";

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
    await axios.put(`/api/tasks/${task._id}`, {
      done: event.target.checked,
    });
  };

  const handleDelete = async () => {
    const res = await axios.delete(`/api/tasks/${task._id}`);
    router.reload(window.location.pathname);
    console.log(res);
  };

  return (
    <Paper elevation={2} style={{ padding: "0 10px 10px 10px" }}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>
        {wasEdited ? "Edited " : "Created "} <TimeAgo date={showDateTask} />
      </p>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              label="Finished"
              onChange={handleCheckChange}
            />
          }
          label={checked ? "Unfinished" : "Finished"}
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
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button variant="outlined" color="primary" startIcon={<EditIcon />}>
          Edit
        </Button>
      </Box>
    </Paper>
  );
}

export default Task;
