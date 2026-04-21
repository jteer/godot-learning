import type { Skill } from "../../data/phases-2d";
import SkillRow from "./SkillRow";

const VC_COLOR = "#63B3ED";

interface Props {
  phaseId: number;
  skills: Skill[];
  checked: Record<string, boolean>;
  onToggle: (phaseId: number | string, skillIdx: number) => void;
}

export default function VersionControlSection({ phaseId, skills, checked, onToggle }: Props) {
  return (
    <div style={{ background: "#0d1628", border: "1px solid #2a3a5a", borderRadius: 8, padding: 20, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "radial-gradient(circle, rgba(99,179,237,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 18 }}>🔀</span>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: VC_COLOR, letterSpacing: 1 }}>
          VERSION CONTROL <span style={{ color: "#4a7a9a", fontSize: 8 }}>(OPTIONAL)</span>
        </div>
        <span style={{ background: "#63B3ED22", border: "1px solid #63B3ED44", color: VC_COLOR, borderRadius: 4, padding: "2px 8px", fontSize: 9, fontFamily: "'Share Tech Mono', monospace" }}>Git / GitHub</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {skills.map((skill, i) => {
          const key = `vc-${phaseId}-${i}`;
          return (
            <SkillRow
              key={key}
              skill={skill}
              done={!!checked[key]}
              color={VC_COLOR}
              onToggle={() => onToggle(`vc-${phaseId}`, i)}
            />
          );
        })}
      </div>
    </div>
  );
}
