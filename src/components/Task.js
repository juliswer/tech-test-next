import React from "react";
import Switch from "@mui/material/Switch";
import axios from "axios";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Task({ task }) {
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
      setShowDateTask(task.createdAt);
    } else {
      setShowDateTask(task.updatedAt);
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

  return (
    <Paper elevation={2} style={{ padding: "0 10px 10px 10px" }}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{showDateTask}</p>
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
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
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
