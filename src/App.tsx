import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  const theme = dark
    ? { bg: "#1a1a1f", text: "#d4d0c8", heading: "#e8e4da", muted: "#6b6760", link: "#4ade80", toggle: "#6b6760" }
    : { bg: "#f5f2eb", text: "#2a2825", heading: "#0d0d0d", muted: "#9e9a94", link: "#16a34a", toggle: "#9e9a94" };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: "'Courier Prime', 'Courier New', Courier, monospace",
        minHeight: "100vh",
        padding: "80px 20px 60px",
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
        <button
          onClick={() => setDark(!dark)}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: theme.toggle,
            fontFamily: "inherit",
            fontSize: "0.875rem",
            padding: 0,
          }}
          aria-label="Toggle light/dark mode"
        >
          {dark ? "light" : "dark"}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <rect x="1" y="1" width="50" height="50" rx="6" stroke={theme.heading} strokeWidth="1.5" />
            {/* Left eye */}
            <path d="M15 19 L17 17 L19 19" stroke={theme.heading} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Right eye */}
            <path d="M33 19 L35 17 L37 19" stroke={theme.heading} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Nose */}
            <path d="M28 24 L24 30" stroke={theme.heading} strokeWidth="1.5" strokeLinecap="round" />
            {/* Mouth */}
            <path d="M17 36 L35 36" stroke={theme.heading} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h1 style={{ fontWeight: 700, fontSize: "1.5rem", color: theme.heading, margin: 0 }}>
            Populus
          </h1>
        </div>

        <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: theme.heading }}>
          The future is our focus.
        </p>

        <p style={{ marginBottom: "1.25rem", lineHeight: "1.65", fontSize: "1rem" }}>
          The world is changing faster than we can understand it.
        </p>

        <p style={{ marginBottom: "1.25rem", lineHeight: "1.65", fontSize: "1rem" }}>
          Populus exists to understand where it&apos;s going.
        </p>

        <p style={{ marginBottom: "1.25rem", lineHeight: "1.65", fontSize: "1rem" }}>
          We&apos;re building a system that can look at the world as it is today,
          understand the forces shaping it, and reason about what could happen next.
        </p>

        <p style={{ marginBottom: "0.5rem", lineHeight: "1.65", fontSize: "1rem" }}>
          Not by guessing.
        </p>
        <p style={{ marginBottom: "0.5rem", lineHeight: "1.65", fontSize: "1rem" }}>
          Not by pretending to know what it can&apos;t know.
        </p>
        <p style={{ marginBottom: "1.25rem", lineHeight: "1.65", fontSize: "1rem" }}>
          By understanding the world, following the evidence, and thinking ahead.
        </p>

        <p style={{ marginBottom: "1.25rem", lineHeight: "1.65", fontSize: "1rem" }}>
          The future is uncertain. We believe it can still be understood.
        </p>

        <p style={{ marginBottom: "3rem", lineHeight: "1.65", fontSize: "1rem" }}>
          Our mission is to understand where the world is going.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <a
            href="https://x.com/ryhn_pwr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.link, textDecoration: "none", fontSize: "1rem" }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "underline")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "none")}
          >
            Contact
          </a>
          <a
            href="mailto:mohammedaakifrayhan@gmail.com?subject=Early Access Request"
            style={{ color: theme.link, textDecoration: "none", fontSize: "1rem" }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "underline")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "none")}
          >
            Early Access
          </a>
        </div>

        <p style={{ fontSize: "1rem", color: theme.muted }}>
          Populus &copy; 2026
        </p>
      </div>
    </div>
  );
}
