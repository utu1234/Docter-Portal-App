import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "patient", text: "Hello Doctor, I have a headache." },
    { id: 2, sender: "doctor", text: "Hello! Since when are you experiencing this?" },
    { id: 3, sender: "patient", text: "Since yesterday evening." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([
      ...messages,
      { id: messages.length + 1, sender: "doctor", text: newMessage.trim() },
    ]);
    setNewMessage("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto flex flex-col h-[80vh] bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Chat with Patients</h2>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[70%] p-3 rounded-lg ${
              msg.sender === "doctor"
                ? "bg-blue-600 text-white self-end rounded-br-none"
                : "bg-gray-200 text-gray-800 self-start rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3 border-t pt-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

