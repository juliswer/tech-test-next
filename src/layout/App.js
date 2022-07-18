// ? Import React
import React from "react";

// ? Import Next Hooks
import Head from "next/head";

// ? Import Axios to make async HTTPS petitions
import axios from "axios";

// ? Import Material UI Components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// ? Import Task Components
import Task from "../components/Task";
import TaskForm from "../components/TaskForm";

// ? Import Toastes components
import toast from "react-hot-toast";

function App() {
  // Initialize State
  const [tasks, setTasks] = React.useState([]);

  // Logic to get tasks from the API
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

  // useEffect to get tasks when the component is mounted
  React.useEffect(() => {
    getTasks();
  }, [tasks]);

  // * Render App
  return (
    <div>
      <Head>
        <title>Tasks - Julian Swerdlin ©</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {tasks.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
          className="animate__animated animate__fadeInLeft"
        >
          <div style={{display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-between"}}>
            {tasks.map((task) => (
              <div key={task._id} style={{maxWidth: "70%", marginInline: "7px", minWidth: "32%"}}>
                <Task task={task} />
              </div>
            ))}
          </div>
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
