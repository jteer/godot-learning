export interface DocLink {
  label: string;
  url: string;
}

export interface Skill {
  text: string;
  docs: DocLink[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Phase {
  id: number;
  title: string;
  duration: string;
  color: string;
  icon: string;
  description: string;
  skills: Skill[];
  versionControl?: Skill[];
  resources: DocLink[];
  project: Project;
}

export const phases: Phase[] = [
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
