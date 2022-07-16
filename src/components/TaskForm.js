import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Paper, Typography } from "@mui/material";

function TaskForm({ title: titleProp }) {
  const [title, setTitle] = React.useState("");
  const [taskId, setTaskId] = React.useState("");
  const [formValues, setFormValues] = React.useState({
    title: "",
    description: ""
  });

  const router = useRouter();

  const findTaskById = async () => {
    const task = await axios.get(`/api/tasks/${taskId}`);
    setTitle(task.data[0].title);
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
      <Paper>
        <Typography variant="h4" component="h4">titulo</Typography>
      </Paper>
    </>
  );
}

export default TaskForm;
