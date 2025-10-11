import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <style>
        {`
          .greeting-button {
            padding: 0.5rem 1rem;
            background-color: steelblue;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        className="greeting-button"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
