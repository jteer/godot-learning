type Track = "2d" | "3d";

interface Props {
  overallPct: number;
  activeColor: string;
  saving: boolean;
  track: Track;
  onSwitchTrack: (t: Track) => void;
}

const TRACK_META: Record<Track, { label: string; subtitle: string; accentColor: string }> = {
  "2d": { label: "2D GAME DEV", subtitle: "5 phases · 16 weeks · 5 portfolio projects", accentColor: "#81C784" },
  "3d": { label: "3D GAME DEV", subtitle: "5 phases · 16 weeks · 5 portfolio projects", accentColor: "#CE93D8" },
};

export default function TrackerHeader({ overallPct, activeColor, saving, track, onSwitchTrack }: Props) {
  const meta = TRACK_META[track];
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

        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {(["2d", "3d"] as Track[]).map((t) => {
            const m = TRACK_META[t];
            const active = track === t;
            return (
              <button
                key={t}
                onClick={() => onSwitchTrack(t)}
                style={{
                  border: "none", cursor: "pointer", transition: "all 0.2s",
                  fontFamily: "'Press Start 2P', monospace", fontSize: 9,
                  padding: "8px 16px", borderRadius: 4, letterSpacing: 1,
                  outline: `2px solid ${active ? m.accentColor : "#1a3a6a"}`,
                  background: active ? `${m.accentColor}22` : "#0d1628",
                  color: active ? m.accentColor : "#4a6a8a",
                }}
              >
                {t === "2d" ? "📺 2D" : "🧊 3D"}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "#4FC3F7", letterSpacing: 2, marginBottom: 8 }}>GODOT ROADMAP</div>
            <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 22, color: meta.accentColor, margin: "0 0 10px", lineHeight: 1.4 }}>
              {meta.label}
            </h1>
            <p style={{ color: "#a0bdd4", fontSize: 14, margin: 0, fontFamily: "'Share Tech Mono', monospace" }}>{meta.subtitle}</p>
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
