/* eslint-disable */
import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Star, StarBorder } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from 'react-bootstrap';
import GridCard from './TestCard';

function Card({ id, title, category, description, theme }) {
  const [value, setValue] = React.useState(1);

  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          ></motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <Box component="fieldset" >
              <Rating
                max={1}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            {/* <p className="category">{category}</p> */}
            <h3 style={{ margin: 8, color: "black", textAlign: "right", marginRight: -150 }}>{title}</h3>
            <h5 style={{ margin: 8, color: "black", textAlign: "right", marginRight: -150 }}>{description}</h5>
          </motion.div>
          <motion.div className="content-container" style={{ margin: 8, color: "black", textAlign: "right" }}>
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
    {items.map((card) => (
      <Card key={card.id} {...card} isSelected={card.id === selectedId} />
    ))}
    </ul>


  );
}

/* <ul className="card-list">
{items.map((card) => (
  <Card key={card.id} {...card} isSelected={card.id === selectedId} />
))}
</ul> */

/* <GridCard cols={4}>
      {items.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </GridCard> */