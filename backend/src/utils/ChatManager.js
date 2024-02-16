// ChatManager.js
const ChatRoom = require("./ChatRoom");

class ChatManager {
  constructor() {
    this.rooms = new Map();
  }

  createRoom(roomId, type) {
    const room = new ChatRoom(roomId, type);
    this.rooms.set(roomId, room);
    return room;
  }

  getRoom(roomId) {
    return this.rooms.get(roomId);
  }

  deleteRoom(roomId) {
    this.rooms.delete(roomId);
  }
}

module.exports = ChatManager;
