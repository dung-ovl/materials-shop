import React from "react";
import { motion } from "framer-motion";
import "../../styles/project.css";
function SliderProjectCard({item, index, current}) {
  var x = "slider-img" + index;
  if (current === 0) {
    x += " " + "content_animation";
  }
  
  return (
    <motion.div className={x}>
        <img  src={item} alt="" />
    </motion.div>
  );
}

export default SliderProjectCard;