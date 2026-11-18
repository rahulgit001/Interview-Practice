import React from "react";

export default function CodeBlock({ code }) {
  if (!code) return null;
  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  );
}
