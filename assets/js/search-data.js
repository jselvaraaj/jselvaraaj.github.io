// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-implemented-ppo-to-solve-partially-observable-variations-of-gridworld-environment",
          title: 'Implemented PPO to solve partially observable variations of gridworld environment.',
          description: "",
          section: "News",},{id: "news-built-a-jax-implementation-of-informarl",
          title: 'Built a JAX implementation of InforMARL.',
          description: "",
          section: "News",},{id: "news-extended-the-vmas-simulator-with-football-and-mpe-environments-in-jaxvmas",
          title: 'Extended the VMAS simulator with Football and MPE environments in JaxVMAS.',
          description: "",
          section: "News",},{id: "news-built-a-jax-implementation-of-fair-marl",
          title: 'Built a JAX implementation of Fair MARL.',
          description: "",
          section: "News",},];
