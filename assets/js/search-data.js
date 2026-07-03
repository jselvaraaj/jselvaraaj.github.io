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
  },{id: "software-released-jaxinformarl-a-jax-implementation-of-informarl",
          title: 'Released JaxInforMARL, a JAX implementation of InforMARL.',
          description: "",
          section: "Software",},{id: "software-released-jaxvmas-a-jax-implementation-of-vmas-with-football-and-mpe-environments",
          title: 'Released JaxVMAS, a JAX implementation of VMAS with Football and MPE environments.',
          description: "",
          section: "Software",},{id: "software-released-jaxfairmarl-a-jax-implementation-of-fair-marl",
          title: 'Released JaxFairMARL, a JAX implementation of Fair MARL.',
          description: "",
          section: "Software",},];
