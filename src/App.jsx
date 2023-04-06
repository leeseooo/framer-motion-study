import React from "react";
import react from "./assets/react.svg";
import { motion } from "framer-motion";
import "./styles/app.scss";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <main className="main">
      <motion.div
        className="box"
        whileTap={{ scale: 0.97 }}
        style={{ originX: 0.55 }}
        animate={{ transition: { duration: 0.2 } }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={react} alt="react" />
        <p>Hello, I'm React !</p>
      </motion.div>

      <motion.div className="box" initial="hidden" animate={isOpen ? "visible" : "hidden"} variants={variants}>
        <motion.div className="todo-small">복싱가기</motion.div>
        <motion.div className="todo-large">바닥닦기</motion.div>
        <motion.div className="todo">옵치하기</motion.div>
      </motion.div>
    </main>
  );
}

export default App;
