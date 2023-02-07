import mongoose, { ConnectionStates } from "mongoose";

const connection = { isConnected: false };

async function connectDb() {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }
  if (mongoose.connections.length > 0) {
    const connectionState = mongoose.connections[0].readyState;
    if (connectionState === ConnectionStates.connected) {
      console.log("Use previous connection to database");
      connection.isConnected = true;
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions);
  console.log("New connection to the database");
  connection.isConnected =
    db.connections[0].readyState === ConnectionStates.connected;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_END === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnecting from the database");
    }
  }
}

const db = { connectDb, disconnectDb };
export default db;
