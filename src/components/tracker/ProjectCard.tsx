import type { Project } from "../../data/phases-2d";

interface Props {
  project: Project;
  color: string;
}

export default function ProjectCard({ project, color }: Props) {
  return (
    <div style={{ background: "#0d1628", border: `1px solid ${color}50`, borderRadius: 8, padding: 20 }}>
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color, marginBottom: 14, letterSpacing: 1 }}>🎮 PORTFOLIO PROJECT</div>
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "#fff", lineHeight: 1.6, marginBottom: 10 }}>{project.title}</div>
      <p style={{ color: "#a0bdd4", fontSize: 13, lineHeight: 1.7, margin: "0 0 14px", fontFamily: "'Share Tech Mono', monospace" }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ background: `${color}18`, border: `1px solid ${color}40`, color, borderRadius: 4, padding: "3px 8px", fontSize: 10, fontFamily: "'Share Tech Mono', monospace" }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
