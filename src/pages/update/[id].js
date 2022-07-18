// ? Import React
import React from "react";

// ? Import TaskForm Component
import TaskForm from "../../components/TaskForm";

// * UpdateTask Page
function UpdateTask() {
  // * Render UpdateTask Page
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "17%" }}
    >
      <TaskForm />
    </div>
  );
}

export default UpdateTask;
