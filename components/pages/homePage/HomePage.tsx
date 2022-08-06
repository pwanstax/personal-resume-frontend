import type {NextPage} from "next";
import Image from "next/image";
import {motion} from "framer-motion";
import {useIsMedium} from "../../../hooks/useMediaQuery";

const HomePage: NextPage = () => {
  return (
    <div className="homepage-container">
      <div className="info-section">
        <motion.h1
          initial={{fontSize: "28px", opacity: 0.5}}
          animate={{fontSize: `${useIsMedium() ? "36px" : "52px"}`, opacity: 1}}
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 0.7,
            stiffness: 500,
          }}
          className="info-header"
        >
          Hi guys! I’m Pwan
        </motion.h1>
        <div className="divider" />
        <h2 className="info-topic">Fullstack developer / Data Science</h2>
        <p className="info-description">
          Hi Again! I am Pawan Kanjeam (Ter). I am currently studying for a
          Bachelor’s Degree in Computer Engineering from Chulalongkorn
          University. My interest in technology and innovation drives me to
          become a Computer Engineering student. I believe that this field is
          boundless, the technology keeps evolving, and so many things are
          waiting for me to explore. My current goal is to gain as much
          knowledge as possible in this field and thrive in my career.
        </p>
      </div>
      <div className="image-section">
        <div className="image">
          <Image
            src="https://images.unsplash.com/photo-1659616047373-fe157c10b60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
