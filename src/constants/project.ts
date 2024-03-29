export interface Project {
  img: string;
  title: string;
  desc: string;
  category: string;
  year: number;
  id: string;
  site: string;
}

export const PROJECTS: Project[] = [
  {
    year: 2023,
    category: "Web Design and App",
    desc: "A application that was built for Capacity Building of Youth to Improve Drinking Water Security and Climate Resilience through Youth-led Participatory Sensing (YPS) Model in Hatiya Island, Noakhali with the sponsorship of IUB, ICCAD, Embassy of Sweden and NSTU",
    img: "/images/helpchai.gif",
    title: "Help Chai",
    id: "helpchai",
    site: "https://helpchai.vercel.app/",
  },
  {
    year: 2023,
    category: "React native Mobile Application",
    desc: "A react native mobile application that was built for Capacity Building of Youth to Improve Drinking Water Security and Climate Resilience through Youth-led Participatory Sensing (YPS) Model in Hatiya Island, Noakhali with the sponsorship of IUB, ICCAD, Embassy of Sweden and NSTU",
    img: "/images/helpchai.gif",
    title: "Help Chai Mobile",
    id: "helpchaimobile",
    site: "https://github.com/Suhrid-Talukder333/help_chai_mobile",
  },
  {
    year: 2020,
    category: "Web Design and App",
    desc: "A react app to create invoices and edit them. A test stripe payment added for testing payments",
    img: "/images/invoice.png",
    title: "Invoice",
    site: "https://suhrid-invoice.netlify.app/",
    id: "invoice",
  },
  {
    year: 2020,
    category: "Web App",
    desc: "A simple kanban board that is inspired from apps like slack,trello etc. Created with vanilla java script and I use it to schedule my daily tasks. It uses the local storage of the browser to save the tasks. So reloading won't clear up the data.",
    img: "/images/kanban.png",
    title: "Kanban Board",
    site: "https://suhrid-kanban-board.netlify.app/",
    id: "kanban",
  },
  {
    year: 2020,
    category: "Web App",
    desc: "You can store your bookmars and it stays in the local storage of the browser. So when ever you comeback the bookmarks are still there. Created using vanilla javascript and local storage system of browsers. I needed to store and access my book marks easily, this is what I came up with.",
    img: "/images/bookmark.png",
    title: "Bookmark Keeper",
    site: "https://bookmarkeeper.netlify.app/",
    id: "bookmark",
  },
  {
    year: 2020,
    category: "Web App",
    desc: "This is build on vanilla javascript. This can be used as a white or black or even a custom board for writing. Only your creativity will be its boundary, you can demostrate painting with it also. Though it might be hard for the absence of some features.",
    img: "/images/paint.png",
    title: "Paint",
    site: "https://paint-suhrid.netlify.app/",
    id: "paint",
  },
  {
    year: 2020,
    category: "Web App",
    desc: "This is build with React and redux. It is a simple bloging website that uses crud functions using redux.",
    img: "/images/blogin.png",
    title: "Blogin",
    site: "https://suhrid-blogin.netlify.app/",
    id: "blogin",
  },
  {
    year: 2020,
    category: "Web App",
    desc: "This is build with vanilla javascript. This is used to generate gifs randomly and with also keywords.",
    img: "/images/gifgenerator.png",
    title: "GIF Generator",
    site: "https://random-giffy.netlify.app/",
    id: "gifgenerator",
  },
  {
    year: 2020,
    category: "Web App",
    desc: "This is build with vanilla javascript that produces an endless image gallery that never ends.",
    img: "/images/endless.png",
    title: "Endless Scroll",
    site: "https://infinity-scroll-suhrid.netlify.app/",
    id: "endlessscroll",
  },
  {
    year: 2020,
    category: "C++ SFML",
    desc: "This is an C++ graphic project that visualizes a sorting algorithm",
    img: "/images/sort.gif",
    title: "Sorting Visualizer",
    site: "https://github.com/Suhrid-Talukder333/Bubble-Sort-VisulaizationSFML",
    id: "sorting",
  },
  {
    year: 2020,
    category: "Web App and Design",
    desc: "A simple react based website to showcase and excersice web designing.",
    img: "/images/organic.png",
    title: "Organic Website",
    site: "https://organic-suhrid.netlify.app/",
    id: "organic",
  },
  {
    year: 2020,
    category: "Web App",
    desc: "A simple react based website that uses ai to chat with customers.",
    img: "/images/chat.png",
    title: "ChatApp",
    site: "",
    id: "chat",
  },
  {
    year: 2020,
    category: "Unity Game",
    desc: "A unity built game that the user can shoot boxes to earn points and other benefits.",
    img: "/images/shooter.png",
    title: "Unity Shooter",
    site: "",
    id: "shooter",
  },
];
