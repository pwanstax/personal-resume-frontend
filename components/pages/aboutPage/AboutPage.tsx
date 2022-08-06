import type {NextPage} from "next";
import Image from "next/image";
import {motion, Variants} from "framer-motion";
import Accordion from "../../common/accordion/Accordion";

const imgList = [
  ["fb.png", "https://www.facebook.com/profile.php?id=100010703378959"],
  ["ig.jpg", "https://instagram.com/__pwan?igshid=YmMyMTA2M2Y="],
  ["linkedin.png", "https://www.linkedin.com/in/pawan-kanjeam-487409218/"],
  ["medium.png", "https://medium.com/@pawankanjeam"],
  ["email.png", "mailto:tutor_pawan@hotmail.com"],
];
const AboutPage: NextPage = () => {
  const accordianVariants: Variants = {
    offscreen: {
      width: "50%",
      opacity: 0,
    },
    onscreen: {
      width: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="aboutpage-container">
      <div className="header">
        <div className="header-container">
          <h1 className="info-topic">Tell you about myself!</h1>
          <div className="divider" />
        </div>
      </div>
      <motion.div
        className="knowledge-section"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.8}}
        variants={accordianVariants}
      >
        <Accordion
          topic="Industry Knowledge"
          contents={[
            "User Interface Design",
            "User Experience Design",
            "Web Applications",
            "Software Development",
            "Software Engineer",
            "Moblie Applications",
            "Data Science",
          ]}
          oneLine={false}
        />
        <Accordion
          topic="Tools & Technology"
          contents={[
            "Python",
            "Golang",
            "Java",
            "C",
            "C++",
            "JavaScript",
            "TypeScript",
            "HTML",
            "Swift",
            "Git",
            "Postman",
            "GraphQL",
            "Docker",
            "Kubernetes",
            "Figma",
          ]}
          oneLine={false}
        />
      </motion.div>
      <motion.div
        className="experience-section"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.8}}
        variants={accordianVariants}
      >
        <Accordion
          topic="Education"
          contents={["Chulalongkorn University, Computer Engineer"]}
          oneLine={true}
        />
        <Accordion
          topic="Work Experience"
          contents={["Fastwork.co"]}
          oneLine={true}
        />
      </motion.div>

      <div className="contact-info">
        {imgList.map((imgSrc) => (
          <motion.a
            className="image"
            href={imgSrc[1]}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{width: "81px", height: "81px", opacity: 0.8}}
          >
            <Image
              src={require(`/public/static/images/${imgSrc[0]}`)}
              layout="fill"
              objectFit="cover"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
