import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, threejs } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Boostrap, Html, Css dan Js",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Boostrap, Html, Css dan Js",
    company_name: "Project Login Page UI/UX",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "Maret 2021 - April 2022",
    points: [
      "Membuat login page yang sangat cantik dan smooth.",
      "Pengembang membuat login page yang nantinya menjadi halaman khusus buat daftar atau login.",
      "Web page ini terbuat dari html, beberapa javascript dan bootsrap terbaru.",
      "Coba dan rasakan Experience nya. ",
    ],
  },

  {
    title: "Html dan Javascript",
    company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: ["Membuat halaman web 3D-Model.", "Pada project ini saya meniru dan membuat sendiri model 3D yang smooth dan atraktif.", "Dengan model 3D animasi dan mampu bergerak.", "Agar terlihat aestetic."],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    // testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    // name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    // testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    // name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    // testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    // name: "Lisa Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Landing Page Smooth",
    description: "Membuat dan mendesain tampilan UI/UX Landing page yang sangat smooth dengan beberapa bahasa pemrograman seperti, boostrap, html, css dan js sederhana. Tekan gambar kucing di pojok kanan atas jika ingin mencoba. ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://bebenq.github.io/login/index.html",
  },
  {
    name: "3D Models App",
    description: "Membuat animasi 3D app web, dengan bahasa pemrograman html, css dan javascript. Ketuk logo kucing dipojok kanan atas untuk melihat contoh tampilan web. Note: Untuk desain Animasi harus dibuat terlebih dahulu oleh klien",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://bebenq.github.io/model-3D/",
  },
  {
    name: "None",
    description: "",
    tags: [
      {
        name: "none",
        color: "blue-text-gradient",
      },
      {
        name: "none",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
