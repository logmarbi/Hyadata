/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const { category, title, description } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto", backgroundColor: "white" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div >
      <div className="card-content-container open" >
        <motion.div className="card-content" layoutId={`card-container-${id}`} style={{ backgroundColor: "white" }}>
          <motion.div

            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" style={{ backgroundColor: "white" }} animate>
            <h5 style={{ margin: 8, color: "black", textAlign: "right", marginRight: -150 }}>{description}</h5>
            <button type="submit" class="btn rounded-pill goto" >מעבר לדו"ח</button>

          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
