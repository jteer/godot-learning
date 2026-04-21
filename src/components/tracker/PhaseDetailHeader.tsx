import type { Phase } from "../../data/phases-2d";

interface Progress {
  done: number;
  total: number;
  pct: number;
}

interface Props {
  phase: Phase;
  progress: Progress;
}

export default function PhaseDetailHeader({ phase, progress }: Props) {
  return (
    <div style={{ background: `linear-gradient(135deg, ${phase.color}12, #0d1628)`, border: `1px solid ${phase.color}40`, borderRadius: 8, padding: "20px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 28 }}>{phase.icon}</span>
        <div>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 13, color: phase.color }}>Phase {phase.id}: {phase.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
            <span style={{
              background: `${phase.color}22`, border: `1px solid ${phase.color}55`,
              color: phase.color, borderRadius: 4, padding: "3px 10px",
              fontFamily: "'Share Tech Mono', monospace", fontSize: 11, fontWeight: "bold",
            }}>⏱ {phase.duration}</span>
            <span style={{ color: "#6a90aa", fontFamily: "'Share Tech Mono', monospace", fontSize: 13 }}>{phase.skills.length} skills</span>
          </div>
        </div>
      </div>
      <p style={{ color: "#8aabcc", fontSize: 13, margin: "12px 0 16px", lineHeight: 1.6, fontFamily: "'Share Tech Mono', monospace" }}>{phase.description}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, background: "#0a1628", borderRadius: 4, height: 6, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress.pct}%`, background: phase.color, borderRadius: 4, transition: "width 0.4s ease" }} />
        </div>
        <span style={{ color: phase.color, fontFamily: "'Press Start 2P', monospace", fontSize: 10 }}>{progress.pct}%</span>
      </div>
    </div>
  );
}
