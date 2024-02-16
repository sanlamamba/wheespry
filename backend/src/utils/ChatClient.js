// ChatClient.js
class ChatClient {
  constructor(userId, socketId, username, status, lastSeen, color) {
    this.userId = userId;
    this.socketId = socketId;
    this.username = username;
    this.status = status;
    this.lastSeen = lastSeen;
    this.color = color;
  }
}

module.exports = ChatClient;
