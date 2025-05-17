import React, { useState } from "react";

export default function App() {
  const [view, setView] = useState("home");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center", direction: "rtl" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎉 أهلاً بك في منصة المسابقة الثقافية</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
        <button onClick={() => setView("setup")}>إعداد المسابقة</button>
        <button onClick={() => setView("bank")}>بنك الأسئلة</button>
        <button onClick={() => setView("test")}>تجربة النظام</button>
      </div>
      {view === "home" && <p>اختر أحد الأقسام أعلاه للبدء 👆</p>}
      {view === "setup" && <p>🛠️ هذه صفحة الإعداد (ستُربط لاحقًا)</p>}
      {view === "bank" && <p>📚 هذه صفحة بنك الأسئلة (ستُربط لاحقًا)</p>}
      {view === "test" && <p>🧪 هذه صفحة تجربة النظام (ستُربط لاحقًا)</p>}
    </div>
  );
}