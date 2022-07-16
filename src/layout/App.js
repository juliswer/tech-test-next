import React from "react";
import Layout from "./Layout";
import axios from "axios";
import Task from "../components/Task";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
          <Grid container>
            {tasks.map((task) => (
              <Grid key={task._id} xs={12} md={6} lg={3} style={{ marginInline: "5px" }}>
                <Task task={task} />
              </Grid>
            ))}
          </Grid>
        </Box>
    </div>
  );
}

export default App;
