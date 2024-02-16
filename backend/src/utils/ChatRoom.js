const generateRandomUsername = require("./generateRandomUsername");

// ChatRoom.js
class ChatRoom {
  constructor(roomId, type) {
    this.roomId = roomId;
    this.type = type;
    this.participants = new Map();
    this.messages = [];
    this.metadata = {
      createdAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      type: type,
      unreadCount: 0,
      customSettings: {
        muteNotifications: false,
        theme: "light",
      },
    };
  }

  addParticipant(client) {
    console.log("CLIENT : ", generateRandomUsername());

    this.participants.set(client.socketId, client);
  }

  removeParticipant(socketId) {
    this.participants.delete(socketId);
  }

  sendMessage(message) {
    this.messages.push(message);
  }
}

module.exports = ChatRoom;
