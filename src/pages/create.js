// ? Import React
import React from "react";

// ? Import TaskForm component
import TaskForm from "../components/TaskForm";

// * Create Page
function create() {
  // * Render Create Page
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "17%" }}>
      <TaskForm title={"Create Your Task!"} />
    </div>
  );
}

export default create;
