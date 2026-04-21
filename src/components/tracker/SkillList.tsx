import type { Phase } from "../../data/phases-2d";
import SkillRow from "./SkillRow";

interface Props {
  phase: Phase;
  checked: Record<string, boolean>;
  onToggle: (phaseId: number | string, skillIdx: number) => void;
}

export default function SkillList({ phase, checked, onToggle }: Props) {
  return (
    <div style={{ background: "#0d1628", border: "1px solid #1a2a4a", borderRadius: 8, padding: 20 }}>
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#4FC3F7", marginBottom: 16, letterSpacing: 1 }}>📋 SKILLS TO LEARN</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {phase.skills.map((skill, i) => {
          const key = `${phase.id}-${i}`;
          return (
            <SkillRow
              key={key}
              skill={skill}
              done={!!checked[key]}
              color={phase.color}
              onToggle={() => onToggle(phase.id, i)}
            />
          );
        })}
      </div>
    </div>
  );
}
