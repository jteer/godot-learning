import type { Phase } from "../../data/phases-2d";

function phaseProgress(phase: Phase, checked: Record<string, boolean>) {
  const done = phase.skills.filter((_, i) => checked[`${phase.id}-${i}`]).length;
  return { done, total: phase.skills.length, pct: Math.round((done / phase.skills.length) * 100) };
}

interface Props {
  phases: Phase[];
  activePhase: number;
  checked: Record<string, boolean>;
  onSelect: (index: number) => void;
}

export default function PhaseTabs({ phases, activePhase, checked, onSelect }: Props) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
      {phases.map((p, i) => {
        const pp = phaseProgress(p, checked);
        const isActive = i === activePhase;
        return (
          <button key={p.id} className="phase-btn" onClick={() => onSelect(i)} style={{
            padding: "10px 14px 8px", border: `2px solid ${isActive ? p.color : "#1a2a4a"}`, borderRadius: 6,
            background: isActive ? `${p.color}18` : "#0d1628", color: isActive ? p.color : "#7a9db8",
            fontFamily: "'Press Start 2P', monospace", fontSize: 9, lineHeight: 1.6,
            minWidth: 120, textAlign: "left", position: "relative",
            display: "flex", flexDirection: "column",
          }}>
            <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>{p.icon}</span>
            Phase {p.id}<br />
            <span style={{ color: isActive ? "#c0dff0" : "#6a90aa", fontSize: 10 }}>{pp.done}/{pp.total} done</span>
            {pp.pct === 100 && <span style={{ position: "absolute", top: 6, right: 8, color: "#81C784", fontSize: 12 }}>✓</span>}
            <div style={{ marginTop: "auto", paddingTop: 10, width: "100%" }}>
              <div style={{ height: 4, background: "#0a1220", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pp.pct}%`, background: p.color, borderRadius: 2, transition: "width 0.4s ease", opacity: 0.85 }} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
