import React from "react";
import Layout from "./Layout";
import axios from "axios";
import Task from "../components/Task";
import Grid from "@mui/material/Grid";

function App() {
  const [tasks, setTasks] = React.useState([]);

  const getTasks = async () => {
    const res = await axios.get("/api/tasks");
    setTasks(res.data);
  };

  React.useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Layout>
        <Grid container spacing={2}>
          {tasks.map((task) => (
            <Grid key={task._id} xs={3} style={{margin: "10px"}}>
              <Task task={task} />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
