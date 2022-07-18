// ? Import Mongoose Libraries
import { connect, connection } from "mongoose";

// * Initialize Mongoose Connected Variable
const conn = {
  isConnected: false,
};

// * Function to get the connection
export async function dbConnect() {
  if (conn.isConnected) return;
  const db = await connect(process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost:27017/techTest");
  conn.isConnected = db.connections[0].readyState;
  console.log(db.connection.db.databaseName);
}

// ! Handle "connected" event
connection.on("connected", () => {
  console.log("Mongodb is connected");
});

// ! Handle "error" event
connection.on("error", (err) => {
  console.log(`Error Database: ${err}`);
});
