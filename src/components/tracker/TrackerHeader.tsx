interface Props {
  overallPct: number;
  activeColor: string;
  saving: boolean;
}

export default function TrackerHeader({ overallPct, activeColor, saving }: Props) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0d1b3e 0%, #0a1628 50%, #0d1b2e 100%)",
      borderBottom: "2px solid #1a3a6a",
      padding: "32px 24px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(79,195,247,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(129,199,132,0.06) 0%, transparent 50%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "#4FC3F7", letterSpacing: 2, marginBottom: 8 }}>GODOT ROADMAP</div>
            <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 22, color: "#81C784", margin: "0 0 10px", lineHeight: 1.4 }}>
              2D GAME DEV
            </h1>
            <p style={{ color: "#a0bdd4", fontSize: 14, margin: 0, fontFamily: "'Share Tech Mono', monospace" }}>5 phases · 16 weeks · 5 portfolio projects</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 28, color: activeColor, lineHeight: 1 }}>
              {overallPct}<span style={{ fontSize: 14 }}>%</span>
            </div>
            <div style={{ color: "#7a9db8", fontSize: 13, marginTop: 4 }}>overall progress</div>
            {saving && <div style={{ color: "#81C784", fontSize: 10, marginTop: 4, animation: "pulse 1s infinite" }}>● saving…</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
