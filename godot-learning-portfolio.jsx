import { useState, useEffect } from "react";

const phases = [
  {
    id: 1,
    title: "Godot Foundations",
    duration: "Weeks 1–2",
    color: "#4FC3F7",
    icon: "🧱",
    description: "Get comfortable with Godot's editor, GDScript basics, and thinking in nodes & scenes.",
    skills: [
      {
        text: "Install Godot 4 and tour the editor layout",
        docs: [
          { label: "Downloading & Installing Godot", url: "https://docs.godotengine.org/en/stable/tutorials/editor/project_manager.html" },
          { label: "First look at the editor", url: "https://docs.godotengine.org/en/stable/getting_started/introduction/first_look_at_the_editor.html" },
        ],
      },
      {
        text: "Understand Scenes, Nodes, and the Scene Tree",
        docs: [
          { label: "Nodes and Scenes overview", url: "https://docs.godotengine.org/en/stable/getting_started/introduction/key_concepts_overview.html" },
          { label: "Scene Tree explained", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/scene_tree.html" },
        ],
      },
      {
        text: "GDScript basics: variables, functions, if/else, for loops",
        docs: [
          { label: "GDScript basics reference", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" },
          { label: "GDScript style guide", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_styleguide.html" },
        ],
      },
      {
        text: "Add a Sprite2D and move it with code",
        docs: [
          { label: "Sprite2D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_sprite2d.html" },
          { label: "Your first 2D game – coding the player", url: "https://docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html" },
        ],
      },
      {
        text: "Use the Inspector and signals tab",
        docs: [
          { label: "Inspector dock overview", url: "https://docs.godotengine.org/en/stable/tutorials/editor/inspector_dock.html" },
          { label: "Introduction to Signals", url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html" },
        ],
      },
      {
        text: "Save & run your first scene",
        docs: [
          { label: "Running a project", url: "https://docs.godotengine.org/en/stable/getting_started/introduction/first_look_at_the_editor.html" },
          { label: "Project Settings & main scene", url: "https://docs.godotengine.org/en/stable/classes/class_projectsettings.html" },
        ],
      },
    ],
    resources: [
      { label: "Official Godot Docs – Intro to GDScript", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" },
      { label: "GDQuest – Godot 4 Beginner Series", url: "https://www.gdquest.com/" },
    ],
    project: {
      title: "Moving Character Demo",
      description: "A single sprite that you can move with arrow keys. Simple — but proves you can make something respond to input.",
      tags: ["Sprite2D", "Input", "GDScript"],
    },
  },
  {
    id: 2,
    title: "2D Core Mechanics",
    duration: "Weeks 3–5",
    color: "#81C784",
    icon: "🕹️",
    description: "Build real platformer-ready movement, physics, and your first actual level.",
    skills: [
      {
        text: "CharacterBody2D + move_and_slide() for player physics",
        docs: [
          { label: "Using CharacterBody2D", url: "https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html" },
          { label: "CharacterBody2D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html" },
        ],
      },
      {
        text: "Jumping, gravity, and coyote-time logic",
        docs: [
          { label: "Physics introduction – gravity", url: "https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html" },
          { label: "Input handling reference", url: "https://docs.godotengine.org/en/stable/tutorials/inputs/inputevent.html" },
        ],
      },
      {
        text: "CollisionShape2D and physics layers",
        docs: [
          { label: "CollisionShape2D reference", url: "https://docs.godotengine.org/en/stable/classes/class_collisionshape2d.html" },
          { label: "Collision layers and masks", url: "https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html" },
        ],
      },
      {
        text: "TileMap & TileSet for building levels",
        docs: [
          { label: "Using TileMaps", url: "https://docs.godotengine.org/en/stable/tutorials/2d/using_tilemaps.html" },
          { label: "Using TileSets", url: "https://docs.godotengine.org/en/stable/tutorials/2d/using_tilesets.html" },
        ],
      },
      {
        text: "Camera2D with smoothing and limits",
        docs: [
          { label: "Camera2D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_camera2d.html" },
          { label: "2D movement overview", url: "https://docs.godotengine.org/en/stable/tutorials/2d/2d_movement.html" },
        ],
      },
      {
        text: "Understand Signals — connect nodes without tight coupling",
        docs: [
          { label: "Signals in depth", url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html" },
          { label: "Custom signals & emit_signal()", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" },
        ],
      },
    ],
    versionControl: [
      {
        text: "Set up a .gitignore for Godot 4 projects",
        docs: [
          { label: "Godot .gitignore template (GitHub)", url: "https://github.com/github/gitignore/blob/main/Godot.gitignore" },
          { label: "Godot docs – version control", url: "https://docs.godotengine.org/en/stable/tutorials/best_practices/version_control_systems.html" },
        ],
      },
      {
        text: "Understand which Godot files to commit (.tscn, .gd, .tres) vs ignore (.godot/)",
        docs: [
          { label: "Godot project file structure", url: "https://docs.godotengine.org/en/stable/tutorials/best_practices/project_organization.html" },
          { label: "Git – tracking binary files", url: "https://git-scm.com/book/en/v2/Git-Tools-Submodules" },
        ],
      },
      {
        text: "Use Git LFS for large assets (audio, textures, exported builds)",
        docs: [
          { label: "Git LFS getting started", url: "https://git-lfs.com/" },
          { label: "GitHub docs – managing large files", url: "https://docs.github.com/en/repositories/working-with-files/managing-large-files" },
        ],
      },
      {
        text: "Branch per feature (e.g. feature/jump-logic) and merge cleanly",
        docs: [
          { label: "Git branching basics", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" },
          { label: "GitHub flow guide", url: "https://docs.github.com/en/get-started/using-github/github-flow" },
        ],
      },
      {
        text: "Tag releases (v0.1, v0.2) to mark playable milestones",
        docs: [
          { label: "Git tagging", url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging" },
          { label: "GitHub releases", url: "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – CharacterBody2D", url: "https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html" },
      { label: "Brackeys – Godot 4 Platformer Tutorial", url: "https://www.youtube.com/@Brackeys" },
    ],
    project: {
      title: "Playable Platformer Level",
      description: "One scrolling level with platforms, a player who can run and jump, and a tilemap. This is the skeleton of any 2D game.",
      tags: ["TileMap", "Physics", "Camera2D"],
    },
  },
  {
    id: 3,
    title: "Game Systems",
    duration: "Weeks 6–9",
    color: "#FFB74D",
    icon: "⚙️",
    description: "Add enemies, UI, and the systems that make a game feel like a real game.",
    skills: [
      {
        text: "HUD with health bars using Control nodes",
        docs: [
          { label: "Control node & UI overview", url: "https://docs.godotengine.org/en/stable/tutorials/ui/index.html" },
          { label: "ProgressBar class reference", url: "https://docs.godotengine.org/en/stable/classes/class_progressbar.html" },
        ],
      },
      {
        text: "Enemy with basic patrol AI using a State Machine",
        docs: [
          { label: "Finite State Machine pattern", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" },
          { label: "NavigationAgent2D for pathfinding", url: "https://docs.godotengine.org/en/stable/classes/class_navigationagent2d.html" },
        ],
      },
      {
        text: "AnimationPlayer for sprite animations",
        docs: [
          { label: "Introduction to AnimationPlayer", url: "https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html" },
          { label: "AnimationPlayer class reference", url: "https://docs.godotengine.org/en/stable/classes/class_animationplayer.html" },
        ],
      },
      {
        text: "Scene instancing — spawn enemies and pickups",
        docs: [
          { label: "Instancing scenes guide", url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/instancing.html" },
          { label: "PackedScene & instantiate()", url: "https://docs.godotengine.org/en/stable/classes/class_packedscene.html" },
        ],
      },
      {
        text: "Scene switching (main menu → game → game over)",
        docs: [
          { label: "SceneTree.change_scene_to_file()", url: "https://docs.godotengine.org/en/stable/classes/class_scenetree.html" },
          { label: "Scene organization best practices", url: "https://docs.godotengine.org/en/stable/tutorials/best_practices/scene_organization.html" },
        ],
      },
      {
        text: "AudioStreamPlayer for sound effects & music",
        docs: [
          { label: "Audio streams overview", url: "https://docs.godotengine.org/en/stable/tutorials/audio/audio_streams.html" },
          { label: "AudioStreamPlayer class reference", url: "https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – AnimationPlayer", url: "https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html" },
      { label: "HeartBeast – Action RPG Tutorial", url: "https://www.youtube.com/@uheartbeast" },
    ],
    project: {
      title: "Mini-Platformer with Enemies & HUD",
      description: "A level with patrolling enemies, a health system, collectible coins, and a win/lose screen. Your first complete game loop.",
      tags: ["State Machine", "HUD", "Scene Management"],
    },
  },
  {
    id: 4,
    title: "RPG Essentials",
    duration: "Weeks 10–14",
    color: "#CE93D8",
    icon: "⚔️",
    description: "Layer in the RPG pillars: dialogue, inventory, an overworld map, and polish.",
    skills: [
      {
        text: "Dialogue system with a Resource-based data structure",
        docs: [
          { label: "Custom Resources in Godot", url: "https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html" },
          { label: "Resource class reference", url: "https://docs.godotengine.org/en/stable/classes/class_resource.html" },
        ],
      },
      {
        text: "Inventory UI with drag-and-drop or slot grid",
        docs: [
          { label: "GUI drag and drop", url: "https://docs.godotengine.org/en/stable/tutorials/ui/gui_drag_and_drop.html" },
          { label: "GridContainer for slot layouts", url: "https://docs.godotengine.org/en/stable/classes/class_gridcontainer.html" },
        ],
      },
      {
        text: "Overworld tilemap with NPCs and teleporters",
        docs: [
          { label: "TileMap layers & terrains", url: "https://docs.godotengine.org/en/stable/tutorials/2d/using_tilemaps.html" },
          { label: "Area2D for interaction zones", url: "https://docs.godotengine.org/en/stable/classes/class_area2d.html" },
        ],
      },
      {
        text: "Save / Load game data with FileAccess",
        docs: [
          { label: "Saving games guide", url: "https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html" },
          { label: "FileAccess class reference", url: "https://docs.godotengine.org/en/stable/classes/class_fileaccess.html" },
        ],
      },
      {
        text: "Particle effects for hit sparks, pickups, and ambiance",
        docs: [
          { label: "GPUParticles2D tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html" },
          { label: "CPUParticles2D (lighter alternative)", url: "https://docs.godotengine.org/en/stable/classes/class_cpuparticles2d.html" },
        ],
      },
      {
        text: "Intro to shaders — a simple outline or screen flash",
        docs: [
          { label: "Introduction to shaders", url: "https://docs.godotengine.org/en/stable/tutorials/shaders/introduction_to_shaders.html" },
          { label: "Shader language reference", url: "https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shader_types.html" },
        ],
      },
    ],
    resources: [
      { label: "GDQuest – RPG Systems in Godot 4", url: "https://www.gdquest.com/" },
      { label: "Godot Docs – Saving Games", url: "https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html" },
    ],
    project: {
      title: "Top-Down RPG Demo",
      description: "A town + dungeon overworld, one NPC with branching dialogue, a working inventory, and save/load. This is your portfolio centerpiece.",
      tags: ["Dialogue", "Inventory", "Save System", "Shaders"],
    },
  },
  {
    id: 5,
    title: "Ship It 🚀",
    duration: "Weeks 15–16",
    color: "#F48FB1",
    icon: "🌐",
    description: "Polish, export, publish — and show the world what you built.",
    skills: [
      {
        text: "Export to Web (HTML5) for instant sharing",
        docs: [
          { label: "Exporting for the Web", url: "https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html" },
          { label: "Export templates setup", url: "https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html" },
        ],
      },
      {
        text: "Optimize: texture compression, audio compression",
        docs: [
          { label: "Importing images & compression", url: "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_images.html" },
          { label: "Importing audio files", url: "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_audio_samples.html" },
        ],
      },
      {
        text: "Write a readable README / game description",
        docs: [
          { label: "itch.io game page best practices", url: "https://itch.io/docs/creators/game-pages" },
          { label: "GitHub README guide", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" },
        ],
      },
      {
        text: "Publish to itch.io with screenshots",
        docs: [
          { label: "itch.io developer docs", url: "https://itch.io/developers" },
          { label: "Uploading & distributing on itch.io", url: "https://itch.io/docs/creators/faq" },
        ],
      },
      {
        text: "Write a portfolio case study (what you built & learned)",
        docs: [
          { label: "itch.io devlog feature", url: "https://itch.io/docs/creators/devlogs" },
          { label: "GDC vault – portfolio talks", url: "https://www.gdcvault.com/" },
        ],
      },
      {
        text: "Gather feedback and do one polish pass",
        docs: [
          { label: "Godot performance optimization", url: "https://docs.godotengine.org/en/stable/tutorials/performance/index.html" },
          { label: "r/godot community", url: "https://www.reddit.com/r/godot/" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – Exporting for Web", url: "https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html" },
      { label: "itch.io – Publish your game", url: "https://itch.io/developers" },
    ],
    project: {
      title: "Published Game on itch.io",
      description: "A live link anyone can play in their browser. This is the thing you put on your résumé or share in a Discord. Make it real.",
      tags: ["Export", "itch.io", "Portfolio"],
    },
  },
];

const totalSkills = phases.reduce((acc, p) => acc + p.skills.length, 0);
const STORAGE_KEY = "godot-portfolio-v1";

export default function GodotPortfolio() {
  const [checked, setChecked] = useState({});
  const [activePhase, setActivePhase] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (result?.value) setChecked(JSON.parse(result.value));
      } catch (_) {}
      setLoaded(true);
    })();
  }, []);

  const toggleSkill = async (phaseId, skillIdx) => {
    const key = `${phaseId}-${skillIdx}`;
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    setSaving(true);
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next));
    } catch (_) {}
    setTimeout(() => setSaving(false), 800);
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const overallPct = Math.round((completedCount / totalSkills) * 100);

  const phaseProgress = (phase) => {
    const done = phase.skills.filter((_, i) => checked[`${phase.id}-${i}`]).length;
    return { done, total: phase.skills.length, pct: Math.round((done / phase.skills.length) * 100) };
  };

  const phase = phases[activePhase];
  const pp = phaseProgress(phase);

  if (!loaded) return (
    <div style={{ background: "#0a0e1a", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: "#4FC3F7", fontFamily: "monospace", fontSize: 18 }}>Loading your portfolio…</span>
    </div>
  );

  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", fontFamily: "'Courier New', Courier, monospace", color: "#e0e6f0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #0a0e1a; } ::-webkit-scrollbar-thumb { background: #2a3a5a; border-radius: 3px; }
        .phase-btn { background: none; border: none; cursor: pointer; transition: all 0.2s; }
        .phase-btn:hover { transform: translateY(-2px); }
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
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "#4FC3F7", letterSpacing: 2, marginBottom: 8 }}>LEARNING PORTFOLIO</div>
              <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 20, color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>
                GODOT 4<br /><span style={{ color: "#81C784" }}>2D GAME DEV</span>
              </h1>
              <p style={{ color: "#7a9ab8", fontSize: 12, margin: 0, fontFamily: "'Share Tech Mono', monospace" }}>5 phases · 16 weeks · 5 portfolio projects</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 28, color: phase.color, lineHeight: 1 }}>{overallPct}<span style={{ fontSize: 14 }}>%</span></div>
              <div style={{ color: "#4a6a8a", fontSize: 11, marginTop: 4 }}>overall progress</div>
              {saving && <div style={{ color: "#81C784", fontSize: 10, marginTop: 4, animation: "pulse 1s infinite" }}>● saving…</div>}
            </div>
          </div>
          <div style={{ marginTop: 20, background: "#0a1628", borderRadius: 4, height: 8, overflow: "hidden", border: "1px solid #1a3a5a" }}>
            <div style={{ height: "100%", width: `${overallPct}%`, background: "linear-gradient(90deg, #4FC3F7, #81C784)", borderRadius: 4, transition: "width 0.4s ease" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            {phases.map((p) => {
              const pp2 = phaseProgress(p);
              return <div key={p.id} style={{ fontSize: 10, color: pp2.pct === 100 ? p.color : "#3a5a7a", fontFamily: "'Share Tech Mono', monospace" }}>{pp2.pct === 100 ? "✓" : `${pp2.done}/${pp2.total}`}</div>;
            })}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* ── Phase tabs ── */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
          {phases.map((p, i) => {
            const pp2 = phaseProgress(p);
            const isActive = i === activePhase;
            return (
              <button key={p.id} className="phase-btn" onClick={() => setActivePhase(i)} style={{
                padding: "10px 14px", border: `2px solid ${isActive ? p.color : "#1a2a4a"}`, borderRadius: 6,
                background: isActive ? `${p.color}18` : "#0d1628", color: isActive ? p.color : "#4a6a8a",
                fontFamily: "'Press Start 2P', monospace", fontSize: 9, lineHeight: 1.6,
                minWidth: 120, textAlign: "left", position: "relative",
              }}>
                <span style={{ display: "block", fontSize: 16, marginBottom: 4 }}>{p.icon}</span>
                Phase {p.id}<br />
                <span style={{ color: isActive ? "#a0c8e8" : "#2a4a6a", fontSize: 8 }}>{pp2.done}/{pp2.total} done</span>
                {pp2.pct === 100 && <span style={{ position: "absolute", top: 6, right: 8, color: "#81C784", fontSize: 12 }}>✓</span>}
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
                  <span style={{ color: "#3a5a7a", fontFamily: "'Share Tech Mono', monospace", fontSize: 11 }}>{phase.skills.length} skills</span>
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
              <p style={{ color: "#7a9ab8", fontSize: 12, lineHeight: 1.7, margin: "0 0 14px", fontFamily: "'Share Tech Mono', monospace" }}>{phase.project.description}</p>
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
                    {/* Clickable skill row */}
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
                    {/* Doc links — indented below each skill */}
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
                            fontSize: 11, fontFamily: "'Share Tech Mono', monospace",
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

          {/* Version control — only shown on phases that have it */}
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
                            style={{ fontSize: 11, fontFamily: "'Share Tech Mono', monospace", color: done ? "#2a5a6a" : "rgba(99,179,237,0.75)" }}
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

        <div style={{ marginTop: 16, textAlign: "center", color: "#2a4a6a", fontSize: 10, fontFamily: "'Share Tech Mono', monospace" }}>
          Progress auto-saves to your browser · Built for Godot 4 · ~16 weeks at ~5hrs/week
        </div>
      </div>
    </div>
  );
}
