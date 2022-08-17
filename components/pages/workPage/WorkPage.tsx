import type {NextPage} from "next";
import {motion, Variants, AnimatePresence} from "framer-motion";
import Modal from "../../common/modal/Modal";
import {useState} from "react";

interface Props {
  topic: string;
  description: string;
  date: string;
  onClick: any;
}
const cardVariants: Variants = {
  offscreen: {
    width: "50%",
    opacity: 0,
  },
  onscreen: {
    width: "90%",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export const works = [
  {
    topic: "Depression Application",
    description:
      "🐞 Develop Web Application that can convert speech to text and detect voice activity from the audio file.",
    time: "June 2021 - August 2021",
    info: [
      "Used Golang with Gin framework and REST API (using Postman for API test)",
      "Used Middleware for example, API authorization with JWT or JSON Web Token",
      "Used Compute Engine VM from GCP or Google Cloud Platform to deploy the web",
      "Used Speech-to-Text from GCP and Voice Activity Detection (VAD)",
      "Used docker as a container to wrap the website into it",
    ],
    link: "https://medium.com/@pawankanjeam/แชร์ประสบการณ์-ทำ-backend-web-application-project-ในเวลา-1-เดือน-ad1fd3c7e1a3",
    image: "https://source.unsplash.com/random/800x800",
  },
  {
    topic: "Depression AI",
    description: "🐳 Built the model to predict depression scores",
    time: "September 2021 - November 2021",
    info: [
      "Labeled the data from DMH and fulfilled the dataset with ThaiSER, VISTEC dataset",
      "Used VAD to recognize voice activity and FFmpeg to slice the audio",
      "Used Efficientnet's model",
      "Used many important libraries ex. Pandas, Numpy, PyTorch, and TensorFlow",
    ],
    link: "https://medium.com/@pawankanjeam/แชร์ประสบการณ์ทำ-data-scientist-project-557e67832874",
    image: "https://source.unsplash.com/random/800x805",
  },
  {
    topic: "D-Mind",
    description:
      "🐬 Developed the website to detect and monitor the prediction of depression for Chulalongkorn Hospital.",
    time: "January 2022 - April 2022",
    info: [
      "Use ReactJS with Material UI to develop web application",
      "Use Axios library to make HTTP requests",
      "Use OOP concepts to develop reused UI components",
      "Work with the backend team to optimize existing API requests and create efficiencies by removing unneeded API requests",
      "Learnt the full-loop workflow of Web Development",
    ],
    link: "https://medium.com/@pawankanjeam/แชร์ประสบการณ์ทำ-frontend-web-application-project-980ed0fa0c7c",
    image: "https://source.unsplash.com/random/800x810",
  },
  {
    topic: "This Website",
    description: "🎈 Developed this website.",
    time: "March 2022 - Present",
    info: [
      "Use React.js + Matherial UI for frontend",
      "Use Golang + Gin for backend",
      "Use Vercel for web hosting (will change soon)",
    ],
    link: "https://medium.com/@pawankanjeam/portfolio-7b6166e250c6",
    image: "https://source.unsplash.com/random/810x815",
  },
  {
    topic: "Monster Brawl",
    description: "🦖 Developed the 2D local-multiplayer game.",
    time: "January 2021 - May 2021",
    info: [
      "Used Java with JavaFX to develop this game",
      "Used OOP concepts to develop and reuse the object of characters or the players",
      "Learnt how to use thread and timer",
    ],
    link: "https://medium.com/@pawankanjeam/แชร์ประสบการณ์ทำ-game-ด้วย-javafx-9814f40070ca",
    image: "https://source.unsplash.com/random/800x815",
  },
  {
    topic: "Cute Queue",
    description: "🦒 Developed the website that uses for queue management",
    time: "April 2022 - May 2022",
    info: [
      "Used React.js + TailwindCSS",
      "Used firebase as an API endpoint and Web hosting",
      "Learnt how to use STM32 and ESP32 (using Arduino IDE)",
    ],
    link: "https://medium.com/@pawankanjeam/portfolio-7b6166e250c6",
    image: "https://source.unsplash.com/random/805x815",
  },
  {
    topic: "Meme Web Application",
    description:
      "🐠 Developed the website that uses for sharing or finding memes",
    time: "January 2021 - May 2021",
    info: [
      "Used basic HTML, CSS, and JavaScript to develop",
      "Used firebase as an API endpoint and Web hosting",
    ],
    link: "https://medium.com/@pawankanjeam/แชร์ประสบการณ์ทำ-frontend-web-application-project-meme-2b7347dc8c69",
    image: "https://source.unsplash.com/random/805x825",
  },
];

const Card = ({topic, description, date, onClick}: Props) => {
  return (
    <motion.div
      onClick={onClick}
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once: true, amount: 0.8}}
      variants={cardVariants}
      whileHover={{scale: 1.025, cursor: "pointer"}}
    >
      <motion.div className="card">
        <div className="topic">{topic}</div>
        <div className="detail">
          <div className="description">{description}</div>
          <div className="date">({date})</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
const WorkPage: NextPage = () => {
  const [modalTopic, setModalTopic] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalTime, setModalTime] = useState("");
  const [modalInfo, setModalInfo] = useState<string[]>([]);
  const [modalLink, setModalLink] = useState("");
  const [modalImage, setModalImage] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  function handleSetModalState(
    topic: string,
    description: string,
    time: string,
    info: string[],
    link: string,
    image: string
  ) {
    setModalTopic(topic);
    setModalDescription(description);
    setModalTime(time);
    setModalInfo(info);
    setModalLink(link);
    setModalImage(image);
  }
  async function handleClickCard(
    topic: string,
    description: string,
    time: string,
    info: string[],
    link: string,
    image: string
  ) {
    await handleSetModalState(topic, description, time, info, link, image);
    open();
  }
  return (
    <div className="workpage-container">
      <div className="info-section">
        <div className="header">
          <div className="header-container">
            <h1 className="info-topic">Here is what i’ve been through!</h1>
            <div className="divider" />
          </div>
        </div>
        <div className="card-section">
          {works.map((work) => (
            <Card
              onClick={() =>
                handleClickCard(
                  work.topic,
                  work.description,
                  work.time,
                  work.info,
                  work.link,
                  work.image
                )
              }
              topic={work.topic}
              description={work.description}
              date={work.time}
              key={work.topic}
            />
          ))}
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            topic={modalTopic}
            description={modalDescription}
            time={modalTime}
            info={modalInfo}
            link={modalLink}
            image={modalImage}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkPage;
