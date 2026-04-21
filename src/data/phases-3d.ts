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
    title: "3D Foundations",
    duration: "Weeks 1–2",
    color: "#4FC3F7",
    icon: "🧊",
    description: "Learn to think in three dimensions — the editor, 3D nodes, transforms, and your first camera rig.",
    skills: [
      {
        text: "Switch to 3D workspace and navigate the viewport",
        docs: [
          { label: "Introduction to 3D", url: "https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html" },
          { label: "3D editor viewport controls", url: "https://docs.godotengine.org/en/stable/tutorials/editor/3d_viewports.html" },
        ],
      },
      {
        text: "Understand Transform3D — position, rotation, scale in 3D space",
        docs: [
          { label: "Transform3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_transform3d.html" },
          { label: "Using 3D transforms", url: "https://docs.godotengine.org/en/stable/tutorials/3d/using_transforms.html" },
        ],
      },
      {
        text: "Add MeshInstance3D and explore StandardMaterial3D",
        docs: [
          { label: "MeshInstance3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_meshinstance3d.html" },
          { label: "StandardMaterial3D overview", url: "https://docs.godotengine.org/en/stable/tutorials/3d/standard_material_3d.html" },
        ],
      },
      {
        text: "Set up Camera3D — FOV, near/far clip, projection",
        docs: [
          { label: "Camera3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_camera3d.html" },
          { label: "3D cameras overview", url: "https://docs.godotengine.org/en/stable/tutorials/3d/cameras_and_canvas_items.html" },
        ],
      },
      {
        text: "Build a SpringArm3D third-person camera rig",
        docs: [
          { label: "SpringArm3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_springarm3d.html" },
          { label: "3D game tutorial – camera setup", url: "https://docs.godotengine.org/en/stable/getting_started/first_3d_game/index.html" },
        ],
      },
      {
        text: "Understand basis vectors and gimbal lock — use quaternions for rotation",
        docs: [
          { label: "Vectors and transforms in Godot", url: "https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html" },
          { label: "Quaternion class reference", url: "https://docs.godotengine.org/en/stable/classes/class_quaternion.html" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – Introduction to 3D", url: "https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html" },
      { label: "Godot Docs – Your First 3D Game", url: "https://docs.godotengine.org/en/stable/getting_started/first_3d_game/index.html" },
    ],
    project: {
      title: "Orbiting Camera Scene",
      description: "A 3D scene with a mesh, a directional light, and a SpringArm3D camera that orbits the object with mouse input. Proves you can work in 3D space.",
      tags: ["Camera3D", "SpringArm3D", "Transform3D"],
    },
  },
  {
    id: 2,
    title: "Movement & Physics",
    duration: "Weeks 3–5",
    color: "#81C784",
    icon: "🏃",
    description: "Get a character moving, jumping, and colliding in 3D — the core feel of any 3D game.",
    skills: [
      {
        text: "CharacterBody3D + move_and_slide() for 3D player movement",
        docs: [
          { label: "CharacterBody3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html" },
          { label: "Kinematic character (3D) tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/physics/kinematic_character_2d.html" },
        ],
      },
      {
        text: "Jumping and gravity with ProjectSettings gravity vector",
        docs: [
          { label: "Physics introduction – gravity", url: "https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html" },
          { label: "PhysicsServer3D gravity", url: "https://docs.godotengine.org/en/stable/classes/class_physicsserver3d.html" },
        ],
      },
      {
        text: "CollisionShape3D — capsule, box, sphere shapes for characters",
        docs: [
          { label: "CollisionShape3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html" },
          { label: "3D physics shapes overview", url: "https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html" },
        ],
      },
      {
        text: "RigidBody3D for physics objects — impulses and forces",
        docs: [
          { label: "RigidBody3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_rigidbody3d.html" },
          { label: "Physics body types comparison", url: "https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html" },
        ],
      },
      {
        text: "RayCast3D and ShapeCast3D for ground detection and interactions",
        docs: [
          { label: "RayCast3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_raycast3d.html" },
          { label: "ShapeCast3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_shapecast3d.html" },
        ],
      },
      {
        text: "Physics layers and masks — separate player, enemy, world collisions",
        docs: [
          { label: "Collision layers and masks", url: "https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks" },
          { label: "Layer naming in project settings", url: "https://docs.godotengine.org/en/stable/classes/class_projectsettings.html" },
        ],
      },
    ],
    versionControl: [
      {
        text: "Set up a .gitignore for Godot 4 projects (same as 2D)",
        docs: [
          { label: "Godot .gitignore template", url: "https://github.com/github/gitignore/blob/main/Godot.gitignore" },
          { label: "Godot docs – version control", url: "https://docs.godotengine.org/en/stable/tutorials/best_practices/version_control_systems.html" },
        ],
      },
      {
        text: "Use Git LFS for 3D assets — .glb, .gltf, textures, audio",
        docs: [
          { label: "Git LFS getting started", url: "https://git-lfs.com/" },
          { label: "GitHub docs – managing large files", url: "https://docs.github.com/en/repositories/working-with-files/managing-large-files" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – CharacterBody3D", url: "https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html" },
      { label: "Godot Docs – Physics Introduction", url: "https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html" },
    ],
    project: {
      title: "Rolling Ball / FPS Controller",
      description: "A player-controlled character that walks, jumps, and collides with a simple environment. Optionally: a rolling ball with physics pickups scattered around a plane.",
      tags: ["CharacterBody3D", "RigidBody3D", "Physics"],
    },
  },
  {
    id: 3,
    title: "Environment & Lighting",
    duration: "Weeks 6–8",
    color: "#FFB74D",
    icon: "💡",
    description: "Make your 3D world look like a world — sky, lighting, shadows, fog, and a real sense of place.",
    skills: [
      {
        text: "WorldEnvironment + Sky — ProceduralSkyMaterial and panorama HDRIs",
        docs: [
          { label: "WorldEnvironment class reference", url: "https://docs.godotengine.org/en/stable/classes/class_worldenvironment.html" },
          { label: "Sky and environment tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/3d/environment_and_post_processing.html" },
        ],
      },
      {
        text: "DirectionalLight3D for sun — shadows, shadow map size, bias",
        docs: [
          { label: "DirectionalLight3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_directionallight3d.html" },
          { label: "3D lights and shadows", url: "https://docs.godotengine.org/en/stable/tutorials/3d/lights_and_shadows.html" },
        ],
      },
      {
        text: "OmniLight3D and SpotLight3D for scene accent lighting",
        docs: [
          { label: "OmniLight3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_omnilight3d.html" },
          { label: "SpotLight3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_spotlight3d.html" },
        ],
      },
      {
        text: "Baked lighting with LightmapGI — bake workflow and UV2",
        docs: [
          { label: "LightmapGI tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/3d/global_illumination/using_lightmap_gi.html" },
          { label: "LightmapGI class reference", url: "https://docs.godotengine.org/en/stable/classes/class_lightmapgi.html" },
        ],
      },
      {
        text: "ReflectionProbe for shiny surfaces in indoor scenes",
        docs: [
          { label: "ReflectionProbe class reference", url: "https://docs.godotengine.org/en/stable/classes/class_reflectionprobe.html" },
          { label: "Reflection probes tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/3d/reflection_probes.html" },
        ],
      },
      {
        text: "Fog and depth of field via Environment — volumetric fog",
        docs: [
          { label: "Environment post-processing", url: "https://docs.godotengine.org/en/stable/tutorials/3d/environment_and_post_processing.html" },
          { label: "VolumetricFog properties", url: "https://docs.godotengine.org/en/stable/classes/class_environment.html#class-environment-property-volumetric-fog-enabled" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – Environment & Post-Processing", url: "https://docs.godotengine.org/en/stable/tutorials/3d/environment_and_post_processing.html" },
      { label: "Godot Docs – Lights and Shadows", url: "https://docs.godotengine.org/en/stable/tutorials/3d/lights_and_shadows.html" },
    ],
    project: {
      title: "Lit Outdoor Scene",
      description: "A terrain-like environment with a procedural sky, directional sun with shadows, at least one OmniLight, and fog in the distance. Screenshot-worthy.",
      tags: ["WorldEnvironment", "LightmapGI", "DirectionalLight3D"],
    },
  },
  {
    id: 4,
    title: "Game Systems",
    duration: "Weeks 9–12",
    color: "#CE93D8",
    icon: "⚙️",
    description: "Wire up the systems that make a 3D game playable — AI navigation, animation, UI, and save data.",
    skills: [
      {
        text: "Import .glb / .gltf models from Blender — scene structure and retargeting",
        docs: [
          { label: "Importing 3D scenes", url: "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/index.html" },
          { label: "Blender to Godot pipeline", url: "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/import_configuration.html" },
        ],
      },
      {
        text: "AnimationPlayer in 3D — skeletal animation, blending clips",
        docs: [
          { label: "Introduction to AnimationPlayer", url: "https://docs.godotengine.org/en/stable/tutorials/animation/introduction.html" },
          { label: "3D animation tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/3d/animating_thousands_of_fish.html" },
        ],
      },
      {
        text: "AnimationTree with BlendSpace2D for directional movement",
        docs: [
          { label: "AnimationTree overview", url: "https://docs.godotengine.org/en/stable/tutorials/animation/animation_tree.html" },
          { label: "BlendSpace2D for locomotion", url: "https://docs.godotengine.org/en/stable/classes/class_animationnodeblendinput.html" },
        ],
      },
      {
        text: "NavigationRegion3D + NavigationAgent3D — bake navmesh, move enemies",
        docs: [
          { label: "Navigation overview (3D)", url: "https://docs.godotengine.org/en/stable/tutorials/navigation/navigation_introduction_3d.html" },
          { label: "NavigationAgent3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_navigationagent3d.html" },
        ],
      },
      {
        text: "Area3D for triggers — pickups, damage zones, portals",
        docs: [
          { label: "Area3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_area3d.html" },
          { label: "Area3D body_entered signal", url: "https://docs.godotengine.org/en/stable/classes/class_area3d.html#signals" },
        ],
      },
      {
        text: "3D UI — SubViewport for world-space UI, and CanvasLayer for HUD",
        docs: [
          { label: "SubViewport in 3D", url: "https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html" },
          { label: "CanvasLayer class reference", url: "https://docs.godotengine.org/en/stable/classes/class_canvaslayer.html" },
        ],
      },
      {
        text: "Save / Load 3D game state with FileAccess",
        docs: [
          { label: "Saving games guide", url: "https://docs.godotengine.org/en/stable/tutorials/io/saving_games.html" },
          { label: "FileAccess class reference", url: "https://docs.godotengine.org/en/stable/classes/class_fileaccess.html" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – Importing 3D Scenes", url: "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/index.html" },
      { label: "Godot Docs – Navigation in 3D", url: "https://docs.godotengine.org/en/stable/tutorials/navigation/navigation_introduction_3d.html" },
    ],
    project: {
      title: "3D Platformer with Enemies",
      description: "A multi-platform level with an animated character, patrolling enemies that use navmesh pathfinding, a health HUD, and a save checkpoint. Full game loop.",
      tags: ["NavigationAgent3D", "AnimationTree", "Area3D", "Save System"],
    },
  },
  {
    id: 5,
    title: "Shaders & Visual Polish",
    duration: "Weeks 13–16",
    color: "#F48FB1",
    icon: "✨",
    description: "Write your first spatial shaders, add particles and VFX, then optimize and ship.",
    skills: [
      {
        text: "Spatial shader basics — vertex and fragment functions, uniforms",
        docs: [
          { label: "Spatial shader reference", url: "https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/spatial_shader.html" },
          { label: "Introduction to shaders", url: "https://docs.godotengine.org/en/stable/tutorials/shaders/introduction_to_shaders.html" },
        ],
      },
      {
        text: "Common shader effects — rim lighting, dissolve, outline, scrolling texture",
        docs: [
          { label: "Your first shader", url: "https://docs.godotengine.org/en/stable/tutorials/shaders/your_first_shader/your_first_spatial_shader.html" },
          { label: "Shader language overview", url: "https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/shading_language.html" },
        ],
      },
      {
        text: "GPUParticles3D for explosions, smoke, dust, and magic effects",
        docs: [
          { label: "GPUParticles3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_gpuparticles3d.html" },
          { label: "Particle systems overview", url: "https://docs.godotengine.org/en/stable/tutorials/3d/particles/index.html" },
        ],
      },
      {
        text: "LOD (Level of Detail) — GeometryInstance3D LOD settings",
        docs: [
          { label: "LOD in Godot 4", url: "https://docs.godotengine.org/en/stable/tutorials/3d/level_of_detail.html" },
          { label: "GeometryInstance3D LOD bias", url: "https://docs.godotengine.org/en/stable/classes/class_geometryinstance3d.html#class-geometryinstance3d-property-lod-bias" },
        ],
      },
      {
        text: "Occlusion culling — OccluderInstance3D baking",
        docs: [
          { label: "Occlusion culling tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/3d/occlusion_culling.html" },
          { label: "OccluderInstance3D class reference", url: "https://docs.godotengine.org/en/stable/classes/class_occluderinstance3d.html" },
        ],
      },
      {
        text: "Export to Web and desktop — export templates, compression, itch.io",
        docs: [
          { label: "Exporting for the Web", url: "https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html" },
          { label: "Exporting projects overview", url: "https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html" },
        ],
      },
    ],
    resources: [
      { label: "Godot Docs – Spatial Shaders", url: "https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/spatial_shader.html" },
      { label: "Godot Docs – 3D Performance", url: "https://docs.godotengine.org/en/stable/tutorials/performance/index.html" },
    ],
    project: {
      title: "Published 3D Game on itch.io",
      description: "A polished 3D game — any genre — with at least one custom shader, particle effects, and an exported build live on itch.io. Your 3D portfolio centerpiece.",
      tags: ["Spatial Shader", "GPUParticles3D", "LOD", "Export", "itch.io"],
    },
  },
];
