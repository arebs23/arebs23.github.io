// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Robotics systems and experiments in task planning, object affordances, and embodied AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Conference papers and preprints on robotic task planning, manipulation, object affordances, and embodied AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "Robotics software and research in planning, perception, and robot learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-viplan",
          title: 'ViPlan',
          description: "From camera images and a natural-language instruction to symbolic plans for robot execution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/viplan/";
            },},{id: "projects-object-affordance-distillation",
          title: 'Object affordance distillation',
          description: "Training a discriminative model to predict feasible interactions between objects using large language model supervision.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/affordance-distillation/";
            },},{id: "projects-affordance-based-goal-imagination",
          title: 'Affordance-based goal imagination',
          description: "Using object affordances to guide image generation toward feasible goals for embodied agents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/goal-imagination/";
            },},{id: "projects-memento",
          title: 'MEMENTO',
          description: "Evolving executable policies in simulation and transferring a Tower of Hanoi policy to a physical Franka Panda.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/memento/";
            },},{id: "projects-mode-aware-3d-object-to-object-affordance-learning",
          title: 'Mode-Aware 3D Object-to-Object Affordance Learning',
          description: "Learning where a source object can interact with a target object across multiple interaction modes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mode-aware-affordance/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%69%63%74%6F%72.%61%72%65%67%62%65%64%65@%6F%72%75.%73%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/arebs23", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/victor-aregbede-b378b8124", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=53npTToAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/AregbedeV", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
