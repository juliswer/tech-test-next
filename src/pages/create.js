import React from "react";
import TaskForm from "../components/TaskForm";

function create() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "17%" }}>
      <TaskForm title={"Create Your Task!"} />
    </div>
  );
}

export default create;
