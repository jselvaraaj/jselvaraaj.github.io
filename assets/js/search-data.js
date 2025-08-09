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
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
          section: "News",},{id: "news-informal-research-with-andrea-baisero-on-memory-reactive-policy",
          title: 'Informal research with Andrea Baisero on memory reactive policy.',
          description: "",
          section: "News",},{id: "news-informal-work-with-siddharth-nayak-on-jax-implementation-of-informarl",
          title: 'Informal work with Siddharth Nayak on JAX implementation of InforMARL.',
          description: "",
          section: "News",},{id: "news-jax-implementation-of-vmas-simulator-that-supports-football-and-mpe-environments",
          title: 'JAX implementation of VMAS simulator that supports Football and MPE environments.',
          description: "",
          section: "News",},{id: "news-informal-work-with-jasmine-aloor-on-jax-implementation-of-fair-marl",
          title: 'Informal work with Jasmine Aloor on JAX implementation of Fair MARL.',
          description: "",
          section: "News",},{id: "news-informal-research-with-jasmine-aloor-on-sequential-social-dilemmas",
          title: 'Informal research with Jasmine Aloor on Sequential Social Dilemmas.',
          description: "",
          section: "News",},];
