import { useState } from "react";
import "./App.css";
import {  motion } from "motion/react";


function MousePointer({ coordinates, hoverState }) {
  return (
  
        <motion.div
          className="mouse mask-logo-container"
          style={{ translateX: "-50%", translateY: "-50%" }}
          initial={{ left: `${coordinates.x}px`, top:` ${coordinates.y}px`, scale: 0 }}
          animate={{ left: `${coordinates.x}px`, top:` ${coordinates.y}px`, scale: 1 }}
          exit={{ left: `${coordinates.x}px`, top:` ${coordinates.y}px`, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "circOut",
          }}
        ></motion.div>
  
  );
}

function App() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouse = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };


  return (
    <div onMouseMove={handleMouse} className="mouse-area">
      {(coordinates.x != 0)? ( // checking if mouse is on viewport
        <MousePointer coordinates={coordinates} />
      ) : null}
      <div className="header-container">
          {" "}
          <motion.div className="logo-container">
            {"cuberto".split("").map((letter, index) => (
              <motion.div
                className="logo"
                variants={{
                  scaleNone: { scale: 0 },
                  scaleIn: { scale: 1 },
                }}
                initial="scaleNone"
                animate="scaleIn"
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "circOut",
                }}
              >
                {letter}
              </motion.div>
            ))}
          </motion.div>
        <div className="menu-container">
          <motion.div
            variants={{
              hidden: { y: "300%" },
              slideUp: { y: "0%" },
            }}
            initial="hidden"
            animate="slideUp"
            transition={{ duration: 1.5, ease: "circOut" }}
          >
            menu
          </motion.div>
        </div>
      </div>
      <motion.div className="motto">
        <motion.h1>
          <motion.span className="motto--first-line">
            <motion.span
              style={{ display: "flex", flexDirection: "row", gap: "2vw" }}
            >
              {"We are a digital".split(" ").map((letter, index) => (
                <motion.div
                  variants={{
                    hidden: { y: "100%" },
                    slideUp: { y: "0%" },
                  }}
                  initial="hidden"
                  animate="slideUp"
                  transition={{
                    duration: 1.5,
                    delay: 0.2 * index,
                    ease: "circOut",
                  }}
                >
                  {letter}
                </motion.div>
              ))}
            </motion.span>
          </motion.span>

          <div className="motto--second-line">
            <motion.div>
              <motion.div
                variants={{
                  scaleNone: { scale: 0 },
                  scaleIn: { scale: 1 },
                }}
                initial="scaleNone"
                animate="scaleIn"
                transition={{
                  duration: 1,
                  ease: "circOut",
                  delay: 0.5,
                }}
              >
                <video
                  id="video-small"
                  src="/showreel.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
              </motion.div>
              <motion.div
                style={{ display: "flex" }}
                variants={{
                  hidden: { y: "100%" },
                  slideUp: { y: "0%" },
                }}
                initial="hidden"
                animate="slideUp"
                transition={{ duration: 1.5, ease: "circOut" }}
              >
                <em>design </em>
                <span>and</span>
              </motion.div>
            </motion.div>
          </div>
          <span className="motto--third-line">
            <motion.div
              variants={{
                hidden: { y: "100%" },
                slideUp: { y: "0%" },
              }}
              initial="hidden"
              animate="slideUp"
              transition={{ duration: 1.5, ease: "circOut" }}
            >
              motion agency
            </motion.div>
          </span>
        </motion.h1>
      </motion.div>

      <div className="video-big-container">
        <motion.div
          className="video-big-mask-cover"
          variants={{
            maskHidden: { height: "100%" },
            maskSlideUp: { height: "0px" },
          }}
          initial="maskHidden"
          animate="maskSlideUp"
          transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
        ></motion.div>
        <video id="video-big" src="/showreel.mp4" autoPlay muted loop></video>
      </div>

      
    </div>
  );
}

export default App;

