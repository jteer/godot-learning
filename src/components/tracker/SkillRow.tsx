import type { Skill } from "../../data/phases-2d";

interface Props {
  skill: Skill;
  done: boolean;
  color: string;
  onToggle: () => void;
}

export default function SkillRow({ skill, done, color, onToggle }: Props) {
  return (
    <div style={{ borderRadius: 6, overflow: "hidden", marginBottom: 6 }}>
      <div
        role="checkbox"
        aria-checked={done}
        aria-label={skill.text}
        tabIndex={0}
        className="skill-row"
        onClick={onToggle}
        onKeyDown={(e) => (e.key === " " || e.key === "Enter") && onToggle()}
        style={{
          display: "flex", alignItems: "flex-start", gap: 12,
          padding: "10px 12px", borderRadius: "6px 6px 0 0",
          background: done ? `${color}0d` : "rgba(255,255,255,0.02)",
        }}
      >
        <div className="check-box" style={{
          borderColor: done ? color : "#2a4a6a",
          background: done ? `${color}30` : "transparent",
          color, marginTop: 2,
        }}>
          {done && <span style={{ fontSize: 12 }}>✓</span>}
        </div>
        <span style={{
          fontSize: 13, lineHeight: 1.5, fontFamily: "'Share Tech Mono', monospace",
          color: done ? "#4a7a6a" : "#c0d8f0",
          textDecoration: done ? "line-through" : "none",
          transition: "all 0.15s",
        }}>{skill.text}</span>
      </div>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "5px 18px",
        padding: "6px 12px 10px 44px",
        background: done ? `${color}07` : "rgba(255,255,255,0.01)",
        borderTop: `1px solid ${done ? color + "20" : "#1a2a3a"}`,
        borderRadius: "0 0 6px 6px",
      }}>
        {skill.docs.map((doc) => (
          <a
            key={doc.url}
            href={doc.url}
            target="_blank"
            rel="noreferrer"
            className="skill-doc-link"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: 12, fontFamily: "'Share Tech Mono', monospace",
              color: done ? "#3a6055" : `${color}bb`,
            }}
          >
            ↗ {doc.label}
          </a>
        ))}
      </div>
    </div>
  );
}
