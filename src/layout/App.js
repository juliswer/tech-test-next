import React from "react";
import Layout from "./Layout";
import axios from "axios";
import Task from "../components/Task";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TaskForm from "../components/TaskForm";
import toast from "react-hot-toast";

function App() {
  const [tasks, setTasks] = React.useState([]);

  const getTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
      toast.error(
        "Something went wrong fetching tasks! If the error persists please contact our support team.",
        {
          position: "top-center",
          duration: 5000,
        }
      );
    }
  };

  React.useEffect(() => {
    getTasks();
  }, [tasks]);

  return (
    <div>
      {tasks.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Grid container>
            {tasks.map((task) => (
              <Grid
                key={task._id}
                xs={12}
                md={6}
                lg={3}
                style={{ marginInline: "5px" }}
              >
                <Task task={task} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "17%",
          }}
        >
          <TaskForm title={"There are no tasks! You can start writing one!"} />
        </div>
      )}
    </div>
  );
}

export default App;
