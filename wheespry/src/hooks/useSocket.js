import { useState, useEffect } from "react";

const useSocket = (url = "ws://192.168.7.40:3001") => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState(null);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket(url);

    newSocket.onopen = () => {
      console.log("Socket connected");
      // Fetch user and room information after socket connection is established
      newSocket.send(JSON.stringify({ type: "FETCH_USERS" }));
      newSocket.send(JSON.stringify({ type: "FETCH_ROOMS" }));
    };

    newSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case "USERS_INFO":
          setUsers(message.data.users);
          break;
        case "ROOMS_INFO":
          setRooms(message.data.rooms);
          break;
        default:
          setMessages((prevMessages) => [...prevMessages, message]);
          break;
      }
    };

    newSocket.onerror = (error) => {
      console.error("Socket error:", error);
    };

    newSocket.onclose = () => {
      console.log("Socket disconnected");
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [url]);

  const joinRoom = (newRoom) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      if (room) {
        socket.send(JSON.stringify({ type: "LEAVE", room }));
      }
      setRoom(newRoom);
      socket.send(JSON.stringify({ type: "JOIN", room: newRoom }));
    } else {
      console.error("Socket not connected");
    }
  };

  const leaveRoom = () => {
    if (socket && socket.readyState === WebSocket.OPEN && room) {
      socket.send(JSON.stringify({ type: "LEAVE", room }));
      setRoom(null);
    } else {
      console.error("Socket not connected or room not set");
    }
  };

  const sendMessage = (content) => {
    if (socket && socket.readyState === WebSocket.OPEN && room) {
      socket.send(JSON.stringify({ type: "MESSAGE", room, content }));
    } else {
      console.error("Socket not connected or room not set");
    }
  };

  const fetchUsers = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: "FETCH_USER" }));
    } else {
      console.error("Socket not connected");
    }
  };

  const fetchRooms = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: "FETCH_ROOMS" }));
    } else {
      console.error("Socket not connected");
    }
  };

  return {
    messages,
    joinRoom,
    leaveRoom,
    sendMessage,
    room,
    users,
    rooms,
    fetchUsers,
    fetchRooms,
  };
};

export default useSocket;
