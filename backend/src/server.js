const express = require("express");
const { Server } = require("ws");
const http = require("http");
const { v4: uuidv4 } = require("uuid"); // Import UUID

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

const clients = new Map(); // Track client, their room, and ID

app.get("/", (req, res) => {
  res.json({ message: "Hello World from Express!" });
});

function broadcastMessage(room, content) {
  clients.forEach((clientData, client) => {
    if (clientData.room === room) {
      client.send(JSON.stringify({ id: clientData.id, content }));
    }
  });
}

wss.on("connection", (ws) => {
  const clientId = uuidv4(); // Generate a unique ID for the client
  console.log(`New client connected: ${clientId}`);
  clients.set(ws, { room: null, id: clientId });

  ws.on("message", (message) => {
    let data;
    try {
      data = JSON.parse(message);
    } catch (error) {
      console.error("Invalid JSON", error);
      return;
    }

    const { type = "", room = "", content = "" } = data;
    const clientData = clients.get(ws);

    switch (type) {
      case "JOIN":
        clientData.room = room;
        console.log(`Client ${clientId} joined room: ${room}`);
        break;
      case "LEAVE":
        clientData.room = null;
        console.log(`Client ${clientId} left room`);
        break;
      case "MESSAGE":
        broadcastMessage(room, content);
        break;
      default:
        console.log("Unknown message type received");
    }
  });

  ws.on("close", () => {
    clients.delete(ws);
    console.log(`Client disconnected: ${clientId}`);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error", error);
  });
});

server.listen(3001, () => console.log("WebSocket server started on port 3001"));
