import {motion} from "framer-motion";

import Backdrop from "./BackDrop";

const flip = {
  hidden: {
    transform: "scale(0) ",

    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1)",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
interface Props {
  handleClose: any;
  topic: string;
  description: string;
  time: string;
  info: string[];
  link: string;
  image: string;
}
const Modal = ({
  handleClose,
  topic,
  description,
  time,
  info,
  link,
  image,
}: Props) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-content">
          <h2>{topic}</h2>
          <h4>( {time} )</h4>
          <h4>{description}</h4>
          {info.map((each) => (
            <p>- {each}</p>
          ))}
        </div>

        <motion.i
          onClick={handleClose}
          className="fa fa-times-circle"
          aria-hidden="true"
          initial={{opacity: 0.2}}
          whileHover={{opacity: 1, transform: "rotateZ(360deg)"}}
        />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
