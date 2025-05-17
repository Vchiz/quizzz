import React, { useState } from "react";
export default function App() {
  const [message, setMessage] = useState("مرحبًا بك في منصة المسابقة!");
  return <div style={{ padding: 20, fontSize: 24 }}>{message}</div>;
}