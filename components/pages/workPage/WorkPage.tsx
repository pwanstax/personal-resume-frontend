import type {NextPage} from "next";
import WorkCard from "./WorkCard";

export const works = [
  {
    title: "Agoda",
    duration: "29 May 2023 - 4 August 2023",
    tags: ["Software Engineering", "Internship", "Fullstack Developer"],
    blogLink: "https://www.pawankanjeam.com/BlogPage",
    image: [
      "https://officesnapshots.com/wp-content/uploads/2020/08/agoda-international-offices-kuala-lumpur-2.jpg",
      "https://cdn10.agoda.net/images/mvc/default/agoda-logo-flat-2019.png",
    ],
    companyLink: "https://www.agoda.com",
  },
  {
    title: "Fastwork.co",
    duration: "1 June 2022 - 31 July 2022",
    tags: ["Frontend Developer", "Internship", "Next.TS", "SCSS", "Typescript"],
    blogLink: "https://www.pawankanjeam.com/BlogPage",
    image: [
      "https://fastwork.co/static-v4/images/home/og-image-home-th.jpg",
      "https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/12/c1/e1/12c1e1eb-f94b-00ac-8994-6c561ed72f5f/AppIcon-1x_U007emarketing-0-10-0-85-220.png/1200x630wa.png",
    ],
    companyLink: "https://www.fastwork.co",
  },
  {
    title: "CU Technology Center",
    duration: "1 January 2022 - 15 April 2022",
    tags: [
      "Fronted Developer",
      "Part-time",
      "React.JS",
      "Object-oriented programming",
      "JavaScript",
      "Material UI",
    ],
    blogLink:
      "https://medium.com/@pawankanjeam/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B3-frontend-web-application-project-980ed0fa0c7c",
    image: [
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9TVS_fimdi1ngcx3yGou2Q.png",
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*F-mgDQ34lHLxeemeJQ6BIA.png",
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bIi_zFwSPWOM_auRluXG3A.png",
    ],
    companyLink:
      "https://medium.com/@pawankanjeam/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B3-frontend-web-application-project-980ed0fa0c7c",
  },
  {
    title: "CU Technology Center",
    duration: "1 September 2021 - 15 November 2021",
    tags: [
      "Data Scientist",
      "Data Engineer",
      "Part-time",
      "PyTorch",
      "TensorFlow",
      "tf_efficientnet_b0",
      "Thai SER dataset",
    ],
    blogLink:
      "https://medium.com/@pawankanjeam/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B3-data-scientist-project-557e67832874",
    image: [
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KVrOKSPRa1I8iSHLowGypg.jpeg",
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xibrEHYydZ_hfQ4EN8TsxQ.jpeg",
      "https://i.ytimg.com/vi/f14579EMNgM/maxresdefault.jpg",
    ],
    companyLink:
      "https://medium.com/@pawankanjeam/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B3-data-scientist-project-557e67832874",
  },
  {
    title: "CU Technology Center",
    duration: "1 June 2021 - 15 August 2021",
    tags: [
      "Backend Developer",
      "Part-time",
      "Golang",
      "Gin Framework",
      "Google Cloud Platform (GCP)",
      "Speech-to-Text",
      "Voice Activity Detection",
    ],
    blogLink:
      "https://medium.com/@pawankanjeam/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C-%E0%B8%97%E0%B8%B3-backend-web-application-project-%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2-1-%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99-ad1fd3c7e1a3",
    image: [
      "https://i.ytimg.com/vi/f14579EMNgM/maxresdefault.jpg",
      "https://miro.medium.com/v2/resize:fit:996/1*aARbQ_KyJvm8XxkrES3seQ.gif",
    ],
    companyLink:
      "https://medium.com/@pawankanjeam/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C-%E0%B8%97%E0%B8%B3-backend-web-application-project-%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2-1-%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99-ad1fd3c7e1a3",
  },
];

export const projects = [
  {
    title: "This Website",
    duration: "1 October 2022 - Present",
    tags: [
      "Fullstack Developer",
      "Next.TS",
      "TypeScript",
      "SCSS",
      "Golang",
      "Gin Framework",
      "Vercel",
      "MongoDB",
      "Google Cloud Platform (GCP)",
    ],
    blogLink: "https://www.pawankanjeam.com/BlogPage",
    image: [
      "https://user-images.githubusercontent.com/70096049/238151600-35f7ec79-81a5-44d0-bfbe-aff8c33c7bf4.png",
      "https://user-images.githubusercontent.com/70096049/238151602-c0d989a2-cf6e-402d-bc01-c4e9ae3cc5bd.png",
    ],
    companyLink: "",
    githubLink: ["https://github.com/pwanstax/personal-resume-frontend"],
  },
  {
    title: "Pet Care",
    duration: "1 March 2023 - Present",
    tags: [
      "Fullstack Developer",
      "React.JS",
      "Express.JS",
      "JavaSrcipt",
      "SCSS",
      "WebSocket Chat",
      "MongoDB",
      "Google Map",
      "Google Cloud Platform (GCP)",
      "Vercel",
      "Docker",
    ],
    blogLink: "https://www.pawankanjeam.com/BlogPage",
    image: [
      "https://camo.githubusercontent.com/9af808e56d147f65a4992b4e8cd8d160b62ab29bb2ce428731421cb1ebcaca44/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313535353638353831322d3462393433663163623065623f69786c69623d72622d342e302e3326697869643d4d6e77784d6a4133664442384d48787761473930627931775957646c66487838664756756644423866487838266175746f3d666f726d6174266669743d63726f7026773d3134373026713d3830",
      "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    companyLink: "",
    githubLink: [
      "https://github.com/pwanstax/jubmeng-rainbow-frontend",
      "https://github.com/pwanstax/jubmeng-rainbow-backend",
    ],
  },
  {
    title: "Car Rental",
    duration: "1 March 2023 - 30 April 2023",
    tags: [
      "Fullstack Developer",
      "React.JS",
      "Express.JS",
      "WebSocket Chat",
      "MongoDB",
      "JavaSrcipt",
      "SCSS",
      "GitHub Action",
      "Omise Payment Gateway",
      "Google Cloud Platform (GCP)",
      "Vercel",
      "Docker",
    ],
    blogLink: "https://www.pawankanjeam.com/BlogPage",
    image: [
      "https://user-images.githubusercontent.com/70096049/234782962-741dd6af-490a-4969-aafd-33aa164e00be.png",
      "https://user-images.githubusercontent.com/70096049/238151266-de54fb34-e8e9-483f-ac5f-e575520f30aa.png",
    ],
    companyLink: "",
    githubLink: [
      "https://github.com/2110336-2565-2/Sec1_Group6_MonkeyD_Frontend",
      "https://github.com/2110336-2565-2/Sec1_Group6_MonkeyD_Backend",
    ],
  },
  {
    title: "Cute Queue",
    duration: "1 April 2022 - 15 May 2022 ",
    tags: [
      "Fullstack Developer",
      "Firebase Real-time",
      "React.JS",
      "JavaScript",
      "Tailwind-CSS",
      "STM32",
      "ESP32",
      "Arduino",
    ],
    blogLink: "https://www.pawankanjeam.com/BlogPage",
    image: [
      "https://user-images.githubusercontent.com/70096049/170546896-19c6abbb-69f9-4ccc-9175-b8f4c9bb7f2d.png",
      "https://user-images.githubusercontent.com/70096049/170546861-29e61fc2-ece3-4180-9f0e-733a5ae90c80.png",
      "https://user-images.githubusercontent.com/70096049/170546868-86603c6f-8fc4-45cb-8dbb-86bb954b951c.png",
    ],
    companyLink: "",
    githubLink: ["https://github.com/pwanstax/embedded-lab-final"],
  },
  {
    title: "Monster Brawl",
    duration: "1 January 2021 - 15 May 2021",
    tags: [
      "Game Developer",
      "Java",
      "JavaFX",
      "Object-oriented programming",
      "thread programming",
    ],
    blogLink: "https://www.pawankanjeam.com/BlogPage",
    image: [
      "https://user-images.githubusercontent.com/70096049/170087853-12596374-6b3d-4d4b-a7c1-61210dfb6fa4.png",
      "https://user-images.githubusercontent.com/70096049/170087934-71f116ac-d3c4-4150-90c7-fbe90efaa370.png",
      "https://user-images.githubusercontent.com/70096049/170087946-3e71b6c4-64d9-4d02-b75a-35cf15053743.png",
    ],
    companyLink: "",
    githubLink: ["https://github.com/pwanstax/monster-brawl"],
  },
  {
    title: "Meme Web",
    duration: "1 January 2021 - 30 May 2021",
    tags: [
      "Fullstack Developer",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Web Hosting",
    ],
    blogLink:
      "https://medium.com/@pawankanjeam/%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B3-frontend-web-application-project-meme-2b7347dc8c69",
    image: [
      "https://i.pinimg.com/originals/c5/c0/77/c5c07787fa4bce1b41bc9d568292e45a.gif",
      "https://miro.medium.com/v2/resize:fit:1192/format:webp/1*7b9G9lh52Eklb92KkGcCDQ.jpeg",
      "https://miro.medium.com/v2/resize:fit:1192/format:webp/1*iJD0D4-w76gTGfUn9nA84g.jpeg",
      "https://miro.medium.com/v2/resize:fit:1192/format:webp/1*RLAa8NeVWJJwu9jPrRuAaQ.jpeg",
    ],
    companyLink: "",
    githubLink: ["https://github.com/pwanstax/meme-web"],
  },
];

const WorkPage: NextPage = () => {
  return (
    <div className="workpage-container main-section">
      <div className="info-section">
        <div className="header">
          <h1 className="info-topic">WORK EXPERIENCE</h1>
        </div>
        <div className="card-section">
          {works.map((work) => (
            <WorkCard
              images={work.image}
              title={work.title}
              tags={work.tags}
              duration={work.duration}
              blogLink={work.blogLink}
              companyLink={work.companyLink}
              githubLink={[]}
            />
          ))}
        </div>
      </div>
      <div className="info-section">
        <div className="header">
          <h1 className="info-topic">PROJECT</h1>
        </div>
        <div className="card-section">
          {projects.map((project) => (
            <WorkCard
              images={project.image}
              title={project.title}
              tags={project.tags}
              duration={project.duration}
              blogLink={project.blogLink}
              companyLink={project.companyLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
