// server.js
const express = require("express");
const { Server } = require("ws");
const http = require("http");
const { v4: uuidv4 } = require("uuid");
const ChatClient = require("./utils/ChatClient");
const ChatManager = require("./utils/ChatManager");

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

const chatManager = new ChatManager();

wss.on("connection", (ws) => {
  const socketId = uuidv4();
  const client = new ChatClient(socketId);
  console.log("Client connected:", socketId);
  console.log("Total clients connected:", wss.clients.size);
  console.log("Total rooms:", chatManager.rooms.size);

  wss.on("message", (message) => {
    // Handle incoming messages
    try {
      const data = JSON.parse(message);
      console.log("Received message:", data);

      switch (data.type) {
        case "JOIN":
          handleJoinRoom(data.roomType, client);
          break;
        case "LEAVE":
          handleLeaveRoom(client);
          break;
        case "MESSAGE":
          handleMessage(data.roomId, client, data.content);
          break;
        case "FETCH_USER":
          console.log("HIT HERE");
          sendUserInfo(client);
          break;
        case "FETCH_ROOMS":
          sendRoomsInfo(client);
          break;
        default:
          console.log("Unknown message type:", data.type);
      }
    } catch (error) {
      console.error("Error parsing incoming message:", error);
    }
  });

  ws.on("close", () => {
    // Handle client disconnection
    console.log("Client disconnected:", socketId);
    handleClientDisconnect(client);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error", error);
  });
});

function handleJoinRoom(roomType, client) {
  let room = findRandomRoom(roomType);
  // If no available random room found, create a new one
  if (!room) {
    const roomId = uuidv4(); // Generate unique room ID
    chatManager.createRoom(roomId, roomType);
    room = chatManager.getRoom(roomId);
  }

  // Add participant to the room
  room.addParticipant(client);
}

function findRandomRoom(roomType) {
  // Find available rooms
  const availableRooms = Array.from(chatManager.rooms.values()).filter(
    (room) => room.participants.size < (roomType === "group" ? 4 : 2)
  );
  // Filter rooms based on the specified roomType
  const filteredRooms = availableRooms.filter((room) => room.type === roomType);
  const oppositeTypeRooms = availableRooms.filter(
    (room) => room.type !== roomType
  );
  // Prioritize rooms of opposite type if no rooms of the specified type are available
  const roomsToConsider =
    filteredRooms.length > 0 ? filteredRooms : oppositeTypeRooms;
  // Return a random room from the available ones
  if (roomsToConsider.length > 0) {
    return roomsToConsider[Math.floor(Math.random() * roomsToConsider.length)];
  }
  // If no available rooms, return null
  return null;
}

function sendUserInfo(client) {
  console.log("CLIENT INFO :", client);
  // Retrieve user information from ChatManager
  const usersInfo = Array.from(chatManager.rooms.values())
    .flatMap((room) => Array.from(room.participants.values()))
    .map((client) => ({
      userId: client.userId,
      username: client.username,
      status: client.status,
      lastSeen: client.lastSeen,
      color: client.color,
    }));

  // Find the current user
  const currentUser = usersInfo.find((user) => user.userId === client.userId);

  client.send(
    JSON.stringify({
      type: "USERS_INFO",
      data: { users: usersInfo, currentUser },
    })
  );
}

function sendRoomsInfo(client) {
  // Retrieve room information from ChatManager
  const roomsInfo = Array.from(chatManager.rooms.values()).map((room) => ({
    roomId: room.roomId,
    type: room.type,
    participantsCount: room.participants.size,
    createdAt: room.metadata.createdAt,
    lastActivity: room.metadata.lastActivity,
    unreadCount: room.metadata.unreadCount,
    customSettings: room.metadata.customSettings,
  }));

  // Find the current room
  const currentRoom = roomsInfo.find((room) =>
    Array.from(room.participants.keys()).includes(client.socketId)
  );

  client.send(
    JSON.stringify({
      type: "ROOMS_INFO",
      data: { rooms: roomsInfo, currentRoom },
    })
  );
}

function handleLeaveRoom(client) {
  chatManager.rooms.forEach((room) => {
    if (room.participants.has(client.socketId)) {
      room.removeParticipant(client.socketId);

      // If the room is empty, delete it
      if (room.participants.size === 0) {
        chatManager.deleteRoom(room.roomId);
        console.log("Room deleted:", room.roomId);
      }
    }
  });
}

function handleMessage(roomId, client, content) {
  const room = chatManager.getRoom(roomId);
  if (room) {
    const message = {
      senderId: client.userId,
      content,
      timestamp: new Date().toISOString(),
      status: "sent",
      type: "text", // Assuming default type is "text"
    };
    room.sendMessage(message);
    console.log("Message sent:", message);
  } else {
    console.log("Room not found:", roomId);
  }
}

function handleClientDisconnect(client) {
  handleLeaveRoom(client);
}

server.listen(3001, () => console.log("WebSocket server started on port 3001"));
