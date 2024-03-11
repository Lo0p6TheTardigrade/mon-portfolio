// @flow

import { Custom_Date_Obj } from '../helpers/date.helper';

const html5 = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304720/assets/images/html5_s20v7u.webp';
const css3 = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304700/assets/images/css3_qeweu2.webp';
const sass = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304722/assets/images/sass_phpugm.webp';
const javascript = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304716/assets/images/javascript_osfxwf.webp';
const react = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304718/assets/images/react_tors8i.webp';
const redux = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304729/assets/images/redux_hir2em.webp';
const seo = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304727/assets/images/seo_l6vrlx.webp';
const github = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304705/assets/images/github_fs8xgw.webp';
const typescript = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304725/assets/images/typescript_atzxdi.webp';
const nodejs = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304714/assets/images/nodeJS_tzhqzd.webp';
const python = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304707/assets/images/python_ixz8pf.webp';
const django = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304698/assets/images/django_sjiesy.webp';
const email = 'https://res.cloudinary.com/dp5onh4yw/image/upload/v1709304696/assets/images/email_piosif.webp';

const OhMyFood = 'https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cbf90bb6aa01b2aeffc61/screenshot_2023-11-09-11-16-42-0000.png';
const PrintIt = 'https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cbd912e06c6190cc3eded/screenshot_2023-11-09-11-08-25-0000.png';
const NinaCarducci = 'https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc033b5dcf7156a942acf/screenshot_2023-11-09-11-19-24-0000.png';
const DebugEvent = 'https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc08057495a2146d6dc3f/screenshot_2023-11-09-11-21-07-0000.png';
const Kasa = 'https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/654cc66a413130287af09dce/screenshot_2023-11-09-11-46-21-0000.png';

const language = [
  {
    name: 'HTML5',
    description: "HTML5 c'est les fondations de votre site comme pour votre maison, et on ne veut pas que le toit nous tombe sur la tête.",
    image: html5,
    id: 1,
    alt: 'logo de html5',
    class: 'logo-html5 logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/HTML5',
    info: 'https://www.google.com/search?q=html5+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn09KzCW-Sq89uG6LCG3Ke4RV9ILPUQ%3A1707912990805&ei=Hq_MZdrYMLL3kdUP3v-LkAc&oq=html5+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2h0bWw1IHdpa2lwZWRpYSoCCAAyChAjGIAEGIoFGCcyBhAAGAcYHkjuZFCbCljRVnACeACQAQCYAUygAYIDqgEBNrgBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIHEAAYgAQYDcICChAAGIAEGIoFGEPiAwQYACBBiAYBkAYJ&sclient=gws-wiz-serp#:~:text=HTML5%20(HyperText%20Markup%20Language%205)%20est%20la%20derni%C3%A8re%20r%C3%A9vision%20majeure%20du%20HTML%20(format%20de%20donn%C3%A9es%20con%C3%A7u%20pour%20repr%C3%A9senter%20les%20pages%20web).',
  },
  {
    name: 'CSS3',
    description: "CSS3 est le langage utilisé pour le style de votre site, c'est la décoration.",
    image: css3,
    id: 2,
    alt: 'logo de css3',
    class: 'logo-css3 logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade',
    info: 'https://www.google.com/search?q=css3+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn08mBtrGmoimLFth_lnudi57MHCEeA%3A1707913572723&ei=ZLHMZfneK5GpkdUP1I67iAI&ved=0ahUKEwj5oLzu6aqEAxWRVKQEHVTHDiEQ4dUDCBE&uact=5&oq=css3+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmNzczMgd2lraXBlZGlhMgwQIxiABBiKBRgTGCdIxp0BULF-WOSNAXACeAGQAQCYAXagAfwCqgEDNC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAgoQABiABBiKBRhDwgIQEAAYgAQYigUYQxixAxiDAcICCxAAGIAEGLEDGIMBwgIGEAAYBxgewgIIEAAYgAQYsQPCAggQABgHGB4YE-IDBBgAIEGIBgGQBgk&sclient=gws-wiz-serp#:~:text=Les%20feuilles%20de%20style%20en%20cascade%2C%20g%C3%A9n%C3%A9ralement%20appel%C3%A9es%20CSS%20de%20l%27anglais%20Cascading%20Style%20Sheets%2C%20forment%20un%20langage%20informatique%20qui%20d%C3%A9crit%20la%20pr%C3%A9sentation%C2%A0...',
  },
  {
    name: 'Sass',
    description: 'Sass est un préprocesseur CSS, il rend le code du style de vos page plus lisibles, plus performants et plus facilement maintenable.',
    image: sass,
    id: 3,
    alt: 'logo de sass',
    class: 'logo-sass logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/Sass_(langage)',
    info: 'https://www.google.com/search?q=sass+wikipedia&oq=sass+wiki&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMgoIBBAAGAoYFhgeMggIBRAAGBYYHjIKCAYQABgKGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDQ1OTlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#:~:text=Sass%20(Syntactically%20awesome%20stylesheets)%20est%20un%20langage%20de%20script%20pr%C3%A9processeur%20qui%20est%20compil%C3%A9%20ou%20interpr%C3%A9t%C3%A9%20en%20CSS%20(Cascading%20Style%20Sheets).',
  },
  {
    name: 'JavaScript',
    description: 'Vous souhaitez passer de votre page statique vers une page dynamique ? JavaScript fait le travail demandé sans rechigné.',
    image: javascript,
    id: 4,
    alt: 'logo de javascript',
    class: 'logo-javascript logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/JavaScript',
    info: 'https://www.google.com/search?q=javascript+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn09KzCW-Sq89uG6LCG3Ke4RV9ILPUQ%3A1707912990805&ei=Hq_MZdrYMLL3kdUP3v-LkAc&oq=java+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmphdmEgd2lraXBlZGlhKgIIADIGEAAYBxgeMgUQABiABDIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIIEAAYBxgeGAoyBhAAGAcYHkjBQFDtDFiiLHACeAGQAQCYAWGgAfYCqgEBNLgBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLAD4gMEGAAgQYgGAZAGCQ&sclient=gws-wiz-serp#:~:text=JavaScript%20est%20un%20langage%20de%20programmation%20de%20scripts%20principalement%20employ%C3%A9%20dans%20les%20pages%20web%20interactives%20et%20%C3%A0%20ce%20titre%20est%20une%20partie%20essentielle%20des%C2%A0...',
  },
  {
    name: 'TypeScript',
    description: 'Et si on gagnait du temps en évitant des comportement inattendu, rendait le code plus robuste et plus clair.',
    image: typescript,
    id: 5,
    alt: 'logo de typescript',
    class: 'logo-typescript logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/TypeScript',
    info: 'https://www.google.com/search?q=typescript+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn0_yNi4phUJ_t5lrlVZlnkOuvWJ-wg%3A1707913620789&ei=lLHMZebZL_ngkdUP8dSHwAE&oq=type+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiDnR5cGUgd2lraXBlZGlhKgIIADIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSO4jUK8IWKsRcAJ4AZABAJgBSKABlwKqAQE0uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCBAAGAcYHhgT4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#:~:text=%E2%80%BA%20wiki%20%E2%80%BA%20TypeScript-,TypeScript%20est%20un%20langage%20de%20programmation%20libre%20et%20open%20source%20d%C3%A9velopp%C3%A9%20par%20Microsoft%20qui%20a%20pour%20but%20d%27am%C3%A9liorer%20et%20de%20s%C3%A9curiser%20la%20production%20de%20code%C2%A0..,-.',
  },
  {
    name: 'React',
    description: "Le framework JavaScript par excellence, l'un des framework les plus utilisé pour la création d'interface utilisateur.",
    image: react,
    id: 6,
    alt: 'logo de react',
    class: 'logo-react logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/React',
    info: 'https://www.google.com/search?q=react+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn09ojTuHxqwJo87VNRJhVkHFRbBCbQ%3A1707913658484&ei=urHMZc6QHfOnkdUP1quG-AM&ved=0ahUKEwjO1a6X6qqEAxXzU6QEHdaVAT8Q4dUDCBE&uact=5&oq=react+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiD3JlYWN0IHdpa2lwZWRpYTIFEAAYgAQyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IxB5Q4gRY3hNwAngBkAEAmAFNoAGxAqoBATW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICExAuGIAEGIoFGEMYxwEY0QMYsAPiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp#:~:text=React%20(aussi%20appel%C3%A9%20React.js%20ou%20ReactJS)%20est%20une%20biblioth%C3%A8que%20JavaScript%20libre.%20Elle%20est%20maintenue%20par%20Meta%20(anciennement%20Facebook)%20ainsi%20que%20par%20une%C2%A0..',
  },
  {
    name: 'Redux',
    description: "Le gestionnaire d'état le plus utilisé en combinaison avec React. Grace à lui on dit bye-bye au prop drilling.",
    image: redux,
    id: 7,
    alt: 'logo de redux',
    class: 'logo-redux logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/Redux_(biblioth%C3%A8que_JavaScript)',
    info: 'https://www.google.com/search?q=redux+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn0-EPOdEwM8XkKWJLnbKud3siH-BCg%3A1707913935225&ei=z7LMZf6zDdKE7M8P_tyVGA&ved=0ahUKEwi-16mb66qEAxVSAvsDHX5uBQMQ4dUDCBE&uact=5&oq=redux+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiD3JlZHV4IHdpa2lwZWRpYTIGEAAYBxgeMgUQABiABDIGEAAYBxgeMgYQABgHGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB5IoTNQlwhYlCVwAngBkAEAmAFOoAGzAqoBATW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA-IDBBgAIEGIBgGQBgo&sclient=gws-wiz-serp#:~:text=Redux%20est%20une%20biblioth%C3%A8que%20open%2Dsource%20JavaScript%20de%20gestion%20d%27%C3%A9tat%20pour%20applications%20web.%20Elle%20est%20plus%20couramment%20utilis%C3%A9e%20avec%20des%20biblioth%C3%A8ques%20comme%C2%A0..',
  },
  {
    name: 'SEO',
    description: "L'optimisation pour les moteurs de recherche. Et si on essayait de faire remonter votre position dans les résultats d'un moteur de recherche.",
    image: seo,
    id: 8,
    alt: 'logo de seo',
    class: 'logo-seo logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche',
    info: 'https://www.google.com/search?q=seo+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn0-LKWSywoLKE9o1Dgxk5-9q3kYsew%3A1707913971615&ei=87LMZZr7JIqskdUPllo&ved=0ahUKEwjawNas66qEAxUKVqQEHRYtAAAQ4dUDCBE&uact=5&oq=seo+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiDXNlbyB3aWtpcGVkaWEyBhAAGAcYHjIKEAAYgAQYigUYQzIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IuRpQ1AlYvw5wAngBkAEAmAFEoAG6AaoBATO4AQPIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#:~:text=Le%20r%C3%A9f%C3%A9rencement%20local%20ou%20SEO%20local%20est%20l%27ensemble%20des%20techniques%20qu%27il%20est%20possible%20de%20mettre%20en%20place%2C%20pour%20am%C3%A9liorer%20la%20visibilit%C3%A9%20des%20entreprises%20dans%20un%C2%A0..',
  },
  {
    name: 'GitHub',
    description: 'Il est temps de prendre soin de votre projet en créant des versions, qui, dans le temps vous sauveront la vie, et bien plus encore.',
    image: github,
    id: 9,
    alt: 'logo de github',
    class: 'logo-github logo',
    url: {},
    wiki: 'https://fr.wikipedia.org/wiki/GitHub_(entreprise)',
    info: 'https://www.google.com/search?q=github+wikipedia&sca_esv=8c571d6edf011196&sxsrf=ACQVn09TPdxEQKOwzhQXgbikrAoDKLCoQQ%3A1707914060324&ei=TLPMZb2sE6GYkdUPvMumyAs&ved=0ahUKEwi9gv3W66qEAxUhTKQEHbylCbkQ4dUDCBE&uact=5&oq=github+wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGdpdGh1YiB3aWtpcGVkaWEyBRAAGIAEMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSI5CUL0LWJM3cAJ4AZABAJgBR6AB-gKqAQE2uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAg4QABjkAhjWBBiwA9gBAcICGRAuGIAEGIoFGEMYxwEY0QMYyAMYsAPYAQLCAgoQABiABBiKBRhDwgIHEAAYgAQYDeIDBBgAIEGIBgGQBhG6BgYIARABGAm6BgYIAhABGAg&sclient=gws-wiz-serp#:~:text=GitHub%20(/%C9%A1%C9%AAth%CA%8Cb/%2C%20entreprise%20GitHub%2C%20Inc.)%20est%20un%20service%20web%20d%27h%C3%A9bergement%20et%20de%20gestion%20de%20d%C3%A9veloppement%20de%20logiciels%2C%20utilisant%20le%20logiciel%20de%20gestion%20de%C2%A0..',
  },
];

// PROJECTS ARRAY
const projects = [
  {
    name: 'OhMyFood',
    type: 'SCSS:',
    description: 'Utilisation de SASS et des animations.',
    skill: 'Compétences SCSS',
    link: 'https://pc-web-ohmyfood.netlify.app',
    image: OhMyFood,
    id: 1,
    alt: 'scss oh my food preview',
    class: 'project-ohmyfood',
  },
  {
    name: 'Print-It',
    type: 'JS:',
    description: "Premiers pas sur JavaScript avec l'implémentation d'un carousel.",
    skill: 'Compétences JavaScript',
    link: 'https://pc-web-print-it.netlify.app',
    image: PrintIt,
    id: 2,
    alt: 'js print it preview',
    class: 'project-print-it',
  },
  {
    name: 'Nina Carducci',
    type: 'SEO:',
    description: "Optimisation du référencement du site d'une photographe.",
    skill: 'Compétences SEO',
    link: 'https://pc-web-nina-carducci.netlify.app',
    image: NinaCarducci,
    id: 3,
    alt: 'seo nina carducci preview',
    class: 'project-nina-carducci',
  },
  {
    name: '724Event',
    type: 'Debug:',
    description: "Debug d'un site d'évènementiel à l'aide des outils de debug et des tests unitaire.",
    skill: 'Compétences Debug',
    link: 'https://pc-web-724event.netlify.app',
    image: DebugEvent,
    id: 4,
    alt: 'debug 724Event preview',
    class: 'project-724event',
  },
  {
    name: 'Kasa',
    type: 'REACT:',
    description: "Création d'une application d'agence de voyage avec le framework React",
    skill: 'Compétences REACT',
    link: 'https://pc-web-kasa.netlify.app',
    image: Kasa,
    id: 5,
    alt: 'kasa preview',
    class: 'project-kasa',
  },
];

// SKILLS ARRAY
const skills = [
  {
    name: 'HTML5 & CSS3',
    type: 'graduation',
    description: 'Formation HTML5 & CSS3',
    link: 'https://www.cegefos.com',
    skill: 'Compétences HTML5 & CSS3',
    image: {
      src: html5,
      class: 'logo',
      alt: 'language HTML5 & CSS3',
    },
    id: 1,
    class: 'graduate-list-item',
    school: 'Cegefos',
    year: Custom_Date_Obj.full.year,
  },
  {
    name: 'Développeur Frontend',
    type: 'graduation',
    description: 'Formation Développeur Frontend',
    link: 'https://openclassrooms.com/fr/search?query=%20developpement%20web',
    skill: 'Compétences HTML5, CSS3, Sass, JavaScript, React, Redux, and others ',
    image: {
      src: javascript,
      class: 'logo',
      alt: 'language HTML5, CSS3, Sass, JavaScript, React, Redux, and others',
    },
    id: 2,
    class: 'graduate-list-item',
    school: 'OpenClassroom',
    year: Custom_Date_Obj.full.year + 1,
  },
  {
    name: 'TypeScript ',
    type: 'graduation:',
    description: 'Formation TypeScript',
    link: 'https://www.udemy.com/courses/search/?q=typescript',
    skill: 'Compétences TypeScript',
    image: {
      src: typescript,
      class: 'logo',
      alt: 'language TypeScript',
    },
    id: 3,
    class: 'graduate-list-item',
    school: 'Udemy',
    year: Custom_Date_Obj.full.year + 2,
  },
];

// LEARN ARRAY
const learns = [
  {
    name: 'React ',
    type: 'graduation:',
    description: 'Intermediate',
    image: { alt: 'logo de react', src: react, class: 'learns-skills-logo logo' },
    link: 'https://www.udemy.com/courses/search/?q=react',
    skill: 'Compétences React',
    id: 1,
    class: 'learn-list-item',
    school: 'Udemy',
    year: Custom_Date_Obj.full.year + 2,
  },
  {
    name: 'Redux ',
    type: 'graduation:',
    description: 'Intermediate',
    image: { alt: 'logo de redux', src: redux, class: 'learns-skills-logo logo' },
    link: 'https://www.udemy.com/courses/search/?q=redux',
    skill: 'Compétences Redux',
    id: 2,
    class: 'learn-list-item',
    school: 'Udemy',
    year: Custom_Date_Obj.full.year + 2,
  },
  {
    name: 'TypeScript ',
    type: 'graduation:',
    description: 'Intermediate',
    image: { alt: 'logo de typescript', src: typescript, class: 'learns-skills-logo logo' },
    link: 'https://www.udemy.com/courses/search/?q=typescript',
    skill: 'Compétences TypeScript',
    id: 3,
    class: 'learn-list-item',
    school: 'Udemy',
    year: Custom_Date_Obj.full.year + 2,
  },
];

// ROADMAP ARRAY
const roadmap = [
  {
    name: 'Développeur Backend',
    type: 'graduation',
    description: 'Formation Développeur Backend',
    link: 'https://www.udemy.com/courses/search/?q=%20developpeur%20backend',
    image: { src: nodejs, class: 'logo roadmap-course', alt: 'logo des langages de la formation API REST, NodeJS, Express, MongoDB, Mongoose ect...' },
    skill: 'Compétences API REST, NodeJS, Express, MongoDB, Mongoose ect...',
    id: 2,
    class: 'roadmap-list-item',
    school: 'Udemy',
    year: `${Custom_Date_Obj.date.now.year}`,
  },
  {
    name: 'Python',
    type: 'graduation',
    description: 'Formation Python',
    link: 'https://www.udemy.com/courses/search/?q=python',
    image: { src: python, class: 'logo roadmap-course', alt: 'logo de python' },
    skill: 'Python',
    id: 2,
    class: 'roadmap-list-item',
    school: 'Udemy',
    year: `${Custom_Date_Obj.date.now.year + 1}`,
  },
  {
    name: 'Django',
    type: 'graduation',
    description: 'Formation Django',
    link: 'https://www.udemy.com/courses/search/?q=django',
    image: { src: django, class: 'logo roadmap-course', alt: 'logo de django' },
    skill: 'Django',
    id: 3,
    class: 'roadmap-list-item',
    school: 'Udemy',
    year: `${Custom_Date_Obj.date.now.year + 2}`,
  },
];

// CONTACT INFORMATION ARRAY
const contacts = [
  {
    name: 'GitHub ',
    type: 'Repository:',
    description: 'Public and private repositories projects',
    image: { src: github, alt: 'logo de github', class: 'logo-github logo', size: { width: 27, height: 27 } },
    link: 'https://github.com/Lo0p6TheTardigrade',
    id: 1,
    class: 'contact-list-item',
  },
  {
    name: 'Mail ',
    type: 'Email:',
    description: 'Send an email for a project, auditory or any',
    image: { src: email, alt: 'logo de contact email', class: 'logo-email logo', size: { width: 27, height: 27 } },
    link: '/contact',
    id: 2,
    class: 'contact-list-item',
  },
];

// COPYRIGHT NOTICE ARRAY
const copyright = [
  {
    watermark: { copy: '©Copyright', year: Custom_Date_Obj.copyright, who: 'Tardigrade-Web', class: 'copyright' },
    class: 'copyright-container',
  },
];

// SERVICE
const services = [
  {
    name: 'Redesign',
    id: 'redesign-content',
    class: 'redesign-content',
    description: "Une refonte de site internet consiste à modifier en profondeur son site web. Il s'agit d'une intervention de fond sur l'aspect visuel, technique et structurel d'un site internet.",
  },
  {
    name: 'SEO',
    id: 'seo-content',
    class: 'seo-content',
    description: "Le SEO on-page, ce sont toutes les optimisations que vous pouvez implémenter sur vos pages web pour améliorer leur référencement sur les moteurs de recherche. Cet ensemble de critères permettra à vos contenus d'être compréhensibles pour les robots des moteurs de recherche.",
  },
  {
    name: 'Debug',
    id: 'debug-content',
    class: 'debug-content',
    description: "Le débogage est le processus qui consister à trouver et à corriger les erreurs ou les bogues dans le code source d'un logiciel. Lorsqu'un logiciel ne fonctionne pas comme prévu, les programmeurs informatiques étudient le code pour déterminer la raison des erreurs.",
  },
  {
    name: 'Advice',
    id: 'advice-content',
    class: 'advice-content',
    description: "Le conseil est un point déterminant quant à l'élaboration du produit. Un design attractif et professionnel. Un site qui se charge rapidement. Une ergonomie fluide et intuitive. Une organisation claire. Du contenu de qualité. Une sécurité à toute épreuve. Des éléments de réassurance.",
  },
  {
    name: 'Build',
    id: 'build-content',
    class: 'build-content',
    description: 'Les applications web, comme nous le disions, reposent sur des bases de données et sur un programme, qui va piocher dans ces bases de données pour afficher des informations aux utilisateurs. Le site web, lui, va être construit via des contenus statiques.',
  },
  {
    name: 'Functionality',
    id: 'functionality-content',
    class: 'functionality-content',
    description: "On appelle fonctionnalité toute caractéristique ou capacité spécifique qu'un site web offre à ses utilisateurs. Il peut s'agir d'une action à effectuer, d'une information à trouver ou d'une interaction que les visiteurs peuvent avoir avec le site.",
  },
  {
    name: 'Collaboration',
    id: 'collaboration-content',
    class: 'collaboration-content',
    description: "Collaboration: La collaboration en entreprise fait passer le travail d'équipe à la vitesse supérieure, notamment en permettant à vos collègues d'unir leurs compétences, atouts et idées pour atteindre un objectif commun. Une collaboration efficace au travail peut avoir un effet positif sur votre équipe et votre organisation.",
  },
];

// ARRAY OBJECT
const Custom_Data_Array_Obj = {
  language: language,
  projects: projects,
  skills: skills,
  learns: learns,
  roadmap: roadmap,
  contacts: contacts,
  copyright: copyright,
  services: services,
};
export { language, projects, skills, learns, roadmap, contacts, copyright, services, Custom_Data_Array_Obj };
