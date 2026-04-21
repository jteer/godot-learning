import { useState, useEffect } from "react";
import { phases } from "../data/phases-2d";
import type { Phase } from "../data/phases-2d";

const totalSkills = phases.reduce((acc, p) => acc + p.skills.length, 0);
const STORAGE_KEY = "godot-roadmap-2d-v1";

type CheckedState = Record<string, boolean>;

function phaseProgress(phase: Phase, checked: CheckedState) {
  const done = phase.skills.filter((_, i) => checked[`${phase.id}-${i}`]).length;
  return { done, total: phase.skills.length, pct: Math.round((done / phase.skills.length) * 100) };
}

export default function PhaseTracker() {
  const [checked, setChecked] = useState<CheckedState>({});
  const [activePhase, setActivePhase] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch (_) {}
    setLoaded(true);
  }, []);

  const toggleSkill = (phaseId: number | string, skillIdx: number) => {
    const key = `${phaseId}-${skillIdx}`;
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    setSaving(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (_) {}
    setTimeout(() => setSaving(false), 800);
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const overallPct = Math.round((completedCount / totalSkills) * 100);

  const phase = phases[activePhase];
  const pp = phaseProgress(phase, checked);

  if (!loaded) return (
    <div style={{ background: "#0a0e1a", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: "#4FC3F7", fontFamily: "monospace", fontSize: 18 }}>Loading…</span>
    </div>
  );

  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", fontFamily: "'Courier New', Courier, monospace", color: "#e0e6f0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #0a0e1a; } ::-webkit-scrollbar-thumb { background: #2a3a5a; border-radius: 3px; }
        .phase-btn { background: none; border: none; cursor: pointer; transition: all 0.2s; }
        .phase-btn:hover { filter: brightness(1.2); box-shadow: 0 0 14px rgba(79,195,247,0.18); }
        .skill-row { transition: background 0.15s; cursor: pointer; }
        .skill-row:hover { background: rgba(255,255,255,0.04) !important; }
        .skill-doc-link { text-decoration: none; transition: opacity 0.15s; }
        .skill-doc-link:hover { text-decoration: underline; opacity: 0.75; }
        .resource-link { color: #4FC3F7; text-decoration: none; font-size: 12px; }
        .resource-link:hover { text-decoration: underline; }
        .check-box { width: 20px; height: 20px; border: 2px solid; border-radius: 3px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; flex-shrink: 0; }
        .check-box:hover { transform: scale(1.1); }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes slideIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .slide-in { animation: slideIn 0.3s ease; }
      `}</style>

      {/* ── Header ── */}
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
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 28, color: phase.color, lineHeight: 1 }}>{overallPct}<span style={{ fontSize: 14 }}>%</span></div>
              <div style={{ color: "#7a9db8", fontSize: 13, marginTop: 4 }}>overall progress</div>
              {saving && <div style={{ color: "#81C784", fontSize: 10, marginTop: 4, animation: "pulse 1s infinite" }}>● saving…</div>}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* ── Phase tabs ── */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
          {phases.map((p, i) => {
            const pp2 = phaseProgress(p, checked);
            const isActive = i === activePhase;
            return (
              <button key={p.id} className="phase-btn" onClick={() => setActivePhase(i)} style={{
                padding: "10px 14px 8px", border: `2px solid ${isActive ? p.color : "#1a2a4a"}`, borderRadius: 6,
                background: isActive ? `${p.color}18` : "#0d1628", color: isActive ? p.color : "#7a9db8",
                fontFamily: "'Press Start 2P', monospace", fontSize: 9, lineHeight: 1.6,
                minWidth: 120, textAlign: "left", position: "relative",
                display: "flex", flexDirection: "column",
              }}>
                <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>{p.icon}</span>
                Phase {p.id}<br />
                <span style={{ color: isActive ? "#c0dff0" : "#6a90aa", fontSize: 10 }}>{pp2.done}/{pp2.total} done</span>
                {pp2.pct === 100 && <span style={{ position: "absolute", top: 6, right: 8, color: "#81C784", fontSize: 12 }}>✓</span>}
                {/* per-phase progress bar pinned to bottom */}
                <div style={{ marginTop: "auto", paddingTop: 10, width: "100%" }}>
                  <div style={{ height: 4, background: "#0a1220", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pp2.pct}%`, background: p.color, borderRadius: 2, transition: "width 0.4s ease", opacity: 0.85 }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Phase content ── */}
        <div className="slide-in" key={activePhase} style={{ display: "grid", gap: 16 }}>

          {/* Phase header card */}
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
                <div style={{ height: "100%", width: `${pp.pct}%`, background: phase.color, borderRadius: 4, transition: "width 0.4s ease" }} />
              </div>
              <span style={{ color: phase.color, fontFamily: "'Press Start 2P', monospace", fontSize: 10 }}>{pp.pct}%</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Portfolio project */}
            <div style={{ background: "#0d1628", border: `1px solid ${phase.color}50`, borderRadius: 8, padding: 20 }}>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: phase.color, marginBottom: 14, letterSpacing: 1 }}>🎮 PORTFOLIO PROJECT</div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "#fff", lineHeight: 1.6, marginBottom: 10 }}>{phase.project.title}</div>
              <p style={{ color: "#a0bdd4", fontSize: 13, lineHeight: 1.7, margin: "0 0 14px", fontFamily: "'Share Tech Mono', monospace" }}>{phase.project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {phase.project.tags.map(tag => (
                  <span key={tag} style={{ background: `${phase.color}18`, border: `1px solid ${phase.color}40`, color: phase.color, borderRadius: 4, padding: "3px 8px", fontSize: 10, fontFamily: "'Share Tech Mono', monospace" }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div style={{ background: "#0d1628", border: "1px solid #1a2a4a", borderRadius: 8, padding: 20 }}>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#FFB74D", marginBottom: 14, letterSpacing: 1 }}>📚 RESOURCES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {phase.resources.map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noreferrer" className="resource-link"
                    style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "'Share Tech Mono', monospace" }}>
                    <span style={{ color: "#FFB74D", flexShrink: 0, marginTop: 1 }}>→</span>
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Skills checklist */}
          <div style={{ background: "#0d1628", border: "1px solid #1a2a4a", borderRadius: 8, padding: 20 }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#4FC3F7", marginBottom: 16, letterSpacing: 1 }}>📋 SKILLS TO LEARN</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {phase.skills.map((skill, i) => {
                const key = `${phase.id}-${i}`;
                const done = !!checked[key];
                return (
                  <div key={i} style={{ borderRadius: 6, overflow: "hidden", marginBottom: 6 }}>
                    <div
                      className="skill-row"
                      onClick={() => toggleSkill(phase.id, i)}
                      style={{
                        display: "flex", alignItems: "flex-start", gap: 12,
                        padding: "10px 12px", borderRadius: "6px 6px 0 0",
                        background: done ? `${phase.color}0d` : "rgba(255,255,255,0.02)",
                      }}
                    >
                      <div className="check-box" style={{
                        borderColor: done ? phase.color : "#2a4a6a",
                        background: done ? `${phase.color}30` : "transparent",
                        color: phase.color, marginTop: 2,
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
                      background: done ? `${phase.color}07` : "rgba(255,255,255,0.01)",
                      borderTop: `1px solid ${done ? phase.color + "20" : "#1a2a3a"}`,
                      borderRadius: "0 0 6px 6px",
                    }}>
                      {skill.docs.map((doc, di) => (
                        <a
                          key={di}
                          href={doc.url}
                          target="_blank"
                          rel="noreferrer"
                          className="skill-doc-link"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            fontSize: 12, fontFamily: "'Share Tech Mono', monospace",
                            color: done ? "#3a6055" : `${phase.color}bb`,
                          }}
                        >
                          ↗ {doc.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Version control — only on phases that have it */}
          {phase.versionControl && (
            <div style={{ background: "#0d1628", border: "1px solid #2a3a5a", borderRadius: 8, padding: 20, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "radial-gradient(circle, rgba(99,179,237,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 18 }}>🔀</span>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#63B3ED", letterSpacing: 1 }}>VERSION CONTROL</div>
                <span style={{ background: "#63B3ED22", border: "1px solid #63B3ED44", color: "#63B3ED", borderRadius: 4, padding: "2px 8px", fontSize: 9, fontFamily: "'Share Tech Mono', monospace" }}>Git / GitHub</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {phase.versionControl.map((skill, i) => {
                  const key = `vc-${phase.id}-${i}`;
                  const done = !!checked[key];
                  return (
                    <div key={i} style={{ borderRadius: 6, overflow: "hidden", marginBottom: 6 }}>
                      <div
                        className="skill-row"
                        onClick={() => toggleSkill(`vc-${phase.id}`, i)}
                        style={{
                          display: "flex", alignItems: "flex-start", gap: 12,
                          padding: "10px 12px", borderRadius: "6px 6px 0 0",
                          background: done ? "rgba(99,179,237,0.06)" : "rgba(255,255,255,0.02)",
                        }}
                      >
                        <div className="check-box" style={{
                          borderColor: done ? "#63B3ED" : "#2a4a6a",
                          background: done ? "rgba(99,179,237,0.2)" : "transparent",
                          color: "#63B3ED", marginTop: 2,
                        }}>
                          {done && <span style={{ fontSize: 12 }}>✓</span>}
                        </div>
                        <span style={{
                          fontSize: 13, lineHeight: 1.5, fontFamily: "'Share Tech Mono', monospace",
                          color: done ? "#3a6a7a" : "#c0d8f0",
                          textDecoration: done ? "line-through" : "none",
                          transition: "all 0.15s",
                        }}>{skill.text}</span>
                      </div>
                      <div style={{
                        display: "flex", flexWrap: "wrap", gap: "5px 18px",
                        padding: "6px 12px 10px 44px",
                        background: done ? "rgba(99,179,237,0.04)" : "rgba(255,255,255,0.01)",
                        borderTop: `1px solid ${done ? "rgba(99,179,237,0.15)" : "#1a2a3a"}`,
                        borderRadius: "0 0 6px 6px",
                      }}>
                        {skill.docs.map((doc, di) => (
                          <a
                            key={di}
                            href={doc.url}
                            target="_blank"
                            rel="noreferrer"
                            className="skill-doc-link"
                            onClick={(e) => e.stopPropagation()}
                            style={{ fontSize: 12, fontFamily: "'Share Tech Mono', monospace", color: done ? "#2a5a6a" : "rgba(99,179,237,0.75)" }}
                          >
                            ↗ {doc.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        <div style={{ marginTop: 16, textAlign: "center", color: "#6a90aa", fontSize: 12, fontFamily: "'Share Tech Mono', monospace" }}>
          Progress auto-saves to your browser · Built for Godot 4 · ~16 weeks at ~5hrs/week
        </div>
      </div>
    </div>
  );
}
