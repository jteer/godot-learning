import { useState, useEffect, useRef } from "react";
import { phases } from "../data/phases-2d";
import type { Phase } from "../data/phases-2d";
import TrackerHeader from "./tracker/TrackerHeader";
import PhaseTabs from "./tracker/PhaseTabs";
import PhaseDetailHeader from "./tracker/PhaseDetailHeader";
import ProjectCard from "./tracker/ProjectCard";
import ResourcesCard from "./tracker/ResourcesCard";
import SkillList from "./tracker/SkillList";
import VersionControlSection from "./tracker/VersionControlSection";

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
  const savingTimer = useRef<ReturnType<typeof setTimeout>>();

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
    clearTimeout(savingTimer.current);
    savingTimer.current = setTimeout(() => setSaving(false), 800);
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

      <TrackerHeader overallPct={overallPct} activeColor={phase.color} saving={saving} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
        <PhaseTabs phases={phases} activePhase={activePhase} checked={checked} onSelect={setActivePhase} />

        <div className="slide-in" key={activePhase} style={{ display: "grid", gap: 16 }}>
          <PhaseDetailHeader phase={phase} progress={pp} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <ProjectCard project={phase.project} color={phase.color} />
            <ResourcesCard resources={phase.resources} />
          </div>

          <SkillList phase={phase} checked={checked} onToggle={toggleSkill} />

          {phase.versionControl && (
            <VersionControlSection
              phaseId={phase.id}
              skills={phase.versionControl}
              checked={checked}
              onToggle={toggleSkill}
            />
          )}
        </div>

        <div style={{ marginTop: 16, textAlign: "center", color: "#6a90aa", fontSize: 12, fontFamily: "'Share Tech Mono', monospace" }}>
          Progress auto-saves to your browser · Built for Godot 4 · ~16 weeks at ~5hrs/week
        </div>
      </div>
    </div>
  );
}
