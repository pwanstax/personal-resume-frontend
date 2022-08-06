import type {NextPage} from "next";
import {motion, Variants} from "framer-motion";

interface Props {
  topic: string;
  description: string;
  date: string;
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

const works: [string, string, string][] = [
  [
    "Depression Application",
    "🐞 Develop Web Application that can convert speech to text and detect voice activity from the audio file.",
    "(June 2021 - August 2021)",
  ],
  [
    "Depression AI",
    "🐳 Built the model to predict depression scores",
    "(September 2021 - November 2021)",
  ],
  [
    "D-Mind",
    "🐬 Developed the website to detect and monitor the prediction of depression for Chulalongkorn Hospital.",
    "(January 2022 - April 2022)",
  ],
  ["This Website", "🎈 Developed this website.", "(March 2022 - Present)"],
  [
    "Monster Brawl",
    "🦖 Developed the 2D local-multiplayer game.",
    "(January 2021 - May 2021)",
  ],
  [
    "Cute Queue",
    "🦒 Developed the website that uses for queue management",
    "(April 2022 - May 2022)",
  ],
  [
    "Meme Web Application",
    "🐠 Developed the website that uses for sharing or finding memes",
    "(January 2021 - May 2021)",
  ],
];

const Card = ({topic, description, date}: Props) => {
  return (
    <motion.div
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
          <div className="date">{date}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
const WorkPage: NextPage = () => {
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
          {works.map(([topic, description, date]) => (
            <Card
              topic={topic}
              description={description}
              date={date}
              key={topic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
