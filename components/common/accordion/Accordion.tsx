import * as React from "react";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface AccordionComponentProps {
  topic: string;
  contents: string[];
  oneLine: boolean;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
const AccordionComponent = ({
  topic,
  contents,
  oneLine,
  expanded,
  setExpanded,
}: AccordionComponentProps) => {
  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(expanded ? false : true)}
      >
        {topic}
      </motion.header>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            className="content"
            key="content"
            style={{gridTemplateColumns: `repeat(${oneLine ? 1 : 3}, 1fr)`}}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {opacity: 1, height: "auto"},
              collapsed: {opacity: 0, height: 0},
            }}
            transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
          >
            {contents.map((content) => (
              <motion.div whileHover={{scale: 1.05, cursor: "pointer"}}>
                {content}
              </motion.div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

interface AccordionProps {
  topic: string;
  contents: string[];
  oneLine: boolean;
}
const Accordion = ({topic, contents, oneLine}: AccordionProps) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <motion.div
      whileHover={expanded ? undefined : {scale: 1.04, cursor: "pointer"}}
      className="accordion-container"
    >
      <AccordionComponent
        topic={topic}
        contents={contents}
        oneLine={oneLine}
        expanded={expanded}
        setExpanded={setExpanded}
        key={topic}
      />
    </motion.div>
  );
};

export default Accordion;
