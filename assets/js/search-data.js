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
  },{id: "nav-publications",
          title: "publications",
          description: "Research publications and undergraduate honors thesis by Joseph Selvaraaj.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-research-assistant-for-prof-chengbo-ai",
          title: 'Research Assistant for Prof. Chengbo Ai',
          description: "",
          section: "News",},{id: "news-completed-honors-thesis-on-sequential-rollouts-with-neural-ordinary-differential-equations",
          title: 'Completed honors thesis on sequential rollouts with neural ordinary differential equations.',
          description: "",
          section: "News",},{id: "news-started-working-as-software-engineer-at-lucid-software",
          title: 'Started working as Software Engineer at Lucid Software',
          description: "",
          section: "News",},{id: "news-investigated-memory-reactive-policies-with-andrea-baisero",
          title: 'Investigated memory-reactive policies with Andrea Baisero.',
          description: "",
          section: "News",},{id: "news-built-a-jax-implementation-of-informarl-with-siddharth-nayak",
          title: 'Built a JAX implementation of InforMARL with Siddharth Nayak.',
          description: "",
          section: "News",},{id: "news-extended-the-vmas-simulator-with-football-and-mpe-environments-in-jaxvmas",
          title: 'Extended the VMAS simulator with Football and MPE environments in JaxVMAS.',
          description: "",
          section: "News",},{id: "news-built-a-jax-implementation-of-fair-marl-with-jasmine-aloor",
          title: 'Built a JAX implementation of Fair MARL with Jasmine Aloor.',
          description: "",
          section: "News",},{id: "news-investigated-sequential-social-dilemmas-with-jasmine-aloor",
          title: 'Investigated sequential social dilemmas with Jasmine Aloor.',
          description: "",
          section: "News",},];
