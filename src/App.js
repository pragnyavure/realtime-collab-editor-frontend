import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [text, setText] = useState("");

  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [inputName, setInputName] = useState("");

  // JOIN
  const handleJoin = () => {
    if (!inputName.trim()) return;

    setUsername(inputName);
    setJoined(true);
  };

  useEffect(() => {
    if (!joined) return;

    socket.on("load-document", (data) => {
      setText(data);
    });

    socket.on("receive-changes", (data) => {
      setText(data);
    });

    // join AFTER listeners
    socket.emit("join", username);

    return () => {
      socket.off("load-document");
      socket.off("receive-changes");
    };
  }, [joined, username]);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    socket.emit("send-changes", value);
  };

  // 🔹 JOIN SCREEN
  if (!joined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center w-80">
          <h1 className="text-2xl font-bold mb-4">
            Join Editor
          </h1>

          <input
            type="text"
            placeholder="Enter your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 border border-gray-600 mb-4 w-full outline-none"
          />

          <button
            onClick={handleJoin}
            className="bg-blue-600 px-6 py-2 rounded w-full hover:bg-blue-700"
          >
            Join
          </button>
        </div>
      </div>
    );
  }

  // 🔹 MAIN EDITOR
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">
          Real-Time Collaborative Editor
          <p className="text-sm text-gray-400 mb-4">
            Edit documents collaboratively in real-time
          </p>
        </h1>


        <span className="text-green-400 text-sm">
          You: {username}
        </span>
      </div>

      {/* Editor */}
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        className="w-full h-[500px] p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
      />

    </div>
  );
}

export default App;