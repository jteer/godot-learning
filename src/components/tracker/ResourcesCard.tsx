import type { DocLink } from "../../data/phases-2d";

interface Props {
  resources: DocLink[];
}

export default function ResourcesCard({ resources }: Props) {
  return (
    <div style={{ background: "#0d1628", border: "1px solid #1a2a4a", borderRadius: 8, padding: 20 }}>
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#FFB74D", marginBottom: 14, letterSpacing: 1 }}>📚 RESOURCES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {resources.map((r) => (
          <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="resource-link"
            style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "'Share Tech Mono', monospace" }}>
            <span style={{ color: "#FFB74D", flexShrink: 0, marginTop: 1 }}>→</span>
            {r.label}
          </a>
        ))}
      </div>
    </div>
  );
}
