// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-almosts",
          title: "Almosts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/almosts/";
          },
        },{id: "nav-map",
          title: "Map",
          description: "A growing map of National Trust and heritage places I have visited.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/national-trust-map/";
          },
        },{id: "post-ashridge-estate-in-different-seasons",
        
          title: "Ashridge Estate in different seasons",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nt-ashridge/";
          
        },
      },{id: "post-farne-islands-puffins-boardwalks-and-a-very-wobbly-boat",
        
          title: "Farne Islands: Puffins, Boardwalks, and a Very Wobbly Boat",
        
        description: "A windy spring visit to Inner Farne, one of the most unusual National Trust places I have been to",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nt-farne/";
          
        },
      },{id: "post-office-move",
        
          title: "Office move",
        
        description: "A very short office move, and some memories from the old office",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/office-move/";
          
        },
      },{id: "post-reflections-from-the-fa-symposium",
        
          title: "Reflections from the FA Symposium",
        
        description: "Reflections after attending the FA/PFA Brain Health Symposium",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/fa-brain-health-symposium/";
          
        },
      },{id: "post-lyveden",
        
          title: "Lyveden",
        
        description: "A muddy winter walk to an unfinished Elizabethan lodge",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nt-lyveden/";
          
        },
      },{id: "post-cream-the-cat",
        
          title: "Cream the Cat",
        
        description: "A photo collection of Cream",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cream-collection/";
          
        },
      },{id: "post-patent-attorney",
        
          title: "Patent Attorney?",
        
        description: "A career-decision SWOT after my internship at Mewburn Ellis",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mewburn-internship/";
          
        },
      },{id: "post-beatrix-potter-and-the-national-trust",
        
          title: "Beatrix Potter and the National Trust",
        
        description: "Beatrix Potter&#39;s home in the Lakes and family connections to Melford Hall",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nt-melford-hilltop/";
          
        },
      },{id: "post-wimpole-estate",
        
          title: "Wimpole Estate",
        
        description: "My favourite National Trust place near home",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nt-wimpole/";
          
        },
      },{id: "post-go-swansea-boys",
        
          title: "Go Swansea boys!",
        
        description: "from the front row at Twickenham Stoop",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/twickenham/";
          
        },
      },{id: "post-error-the-request-could-not-be-satisfied",
        
          title: 'ERROR: The request could not be satisfied <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.imperial.ac.uk/human-experience-analysis-design/", "_blank");
          
        },
      },{id: "post-membership-join-the-national-trust-national-trust",
        
          title: 'Membership | Join the National Trust | National Trust <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "With a National Trust membership, you&#39;ll help protect unforgettable places for future generations. Find out how to join the National Trust today.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.nationaltrust.org.uk/membership", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-presented-at-ircobi-2025-in-vilnius-on-using-bayesian-methods-to-investigate-how-brain-anatomy-influences-brain-strain-under-sporting-head-impacts",
          title: 'I presented at IRCOBI 2025 in Vilnius on using Bayesian methods to investigate...',
          description: "",
          section: "News",},{id: "news-our-paper-about-xgb-and-neural-networks-for-real-time-brain-strain-prediction-is-now-published-in-engineering-applications-of-artificial-intelligence",
          title: 'Our paper about XGB and neural networks for real-time brain strain prediction, is...',
          description: "",
          section: "News",},{id: "news-i-served-as-a-reviewer-for-wcb-2026",
          title: 'I served as a reviewer for WCB 2026.',
          description: "",
          section: "News",},{id: "news-i-was-invited-by-prof-mike-loosemore-mbe-to-give-a-presentation-at-the-inaugural-concussion-working-group-meeting-at-iseh-about-using-biomechanics-model-to-study-brain-injury",
          title: 'I was invited by Prof Mike Loosemore, MBE to give a presentation at...',
          description: "",
          section: "News",},{id: "news-microphone-i-gave-a-talk-at-the-sports-engineering-seminar-day-at-heriot-watt-university-where-i-shared-our-recent-work-in-sports-biomechanics",
          title: ':microphone: I gave a talk at the Sports Engineering Seminar Day at Heriot-Watt...',
          description: "",
          section: "News",},{id: "news-multiple-abstracts-accepted-at-wcb-2026",
          title: 'Multiple abstracts accepted at WCB 2026!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-26-wcb-accepted/";
            },},{id: "news-tada-our-work-on-comparing-brain-injury-metrics-across-sports-has-been-accepted-for-presentation-at-isbs-2026-at-loughborough-university",
          title: ':tada: Our work on comparing brain injury metrics across sports has been accepted...',
          description: "",
          section: "News",},{id: "news-short-communication-about-subject-specific-brain-strain-prediction-accepted-for-ircobi-2026",
          title: 'Short communication about subject-specific brain strain prediction accepted for IRCOBI 2026.',
          description: "",
          section: "News",},{id: "projects-contactless-jigsaw-puzzle",
          title: 'Contactless Jigsaw Puzzle',
          description: "Gesture-controlled assistive game for children with ASD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/contactless-puzzle-pieces/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6D%69%6C%79.%63%68%61%6E%32%31@%69%6D%70%65%72%69%61%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=aWYBkBAAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/emilyykchan", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/emilyykchan", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-5255-8236", "_blank");
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
