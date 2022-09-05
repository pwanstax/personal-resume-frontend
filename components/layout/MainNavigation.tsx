import {motion, Variants, useAnimation} from "framer-motion";
import {useEffect, useState} from "react";

const MainNavigation = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const controlMode = useAnimation();
  const [html, setHTML] = useState<HTMLHtmlElement | null>();

  useEffect(() => {
    const html: HTMLHtmlElement | null = document.querySelector("html");
    setHTML(html);
    html!.dataset.theme = `light`;
  }, []);

  function switchTheme() {
    if (html!.dataset.theme === "light") {
      html!.dataset.theme = "dark";
    } else {
      html!.dataset.theme = "light";
    }
  }

  const handleMode = () => {
    controlMode.start("changemode");
    switchTheme();
    setTimeout(function () {
      setIsLightMode(!isLightMode);
    }, 500);
  };

  const modeVariants: Variants = {
    changemode: {
      opacity: [1, 0.1, 1],
      x: [-25, 25, -20, 20, -15, 15, -10, 10, -5, 5, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <div className="navigation-container">
      <a href="#">Pawan Kanjeam</a>
      <div className="menu-section">
        <a href="#work">Work</a>
        <a href="#aboutMe">About</a>
        <a href="#aboutMe">Contact</a>
      </div>
      <motion.div
        className="switch-theme"
        whileHover={{scale: 1.025, cursor: "pointer"}}
        onClick={handleMode}
        animate={controlMode}
        variants={modeVariants}
      >
        {isLightMode ? <p>🌕</p> : <p>🌑</p>}
      </motion.div>
    </div>
  );
};

export default MainNavigation;
