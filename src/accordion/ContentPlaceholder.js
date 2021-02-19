import * as React from "react";
import { motion } from "framer-motion";
//import { mix } from "@popmotion/popcorn";

/*const randomInt = (min, max) => Math.round(mix(min, max, Math.random()));
const generateParagraphLength = () => randomInt(5, 20);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

export const Word = ({ width }) => <div className="word" style={{ width }} />;*/

const Paragraph = () => (
  <div className="paragraph">
    <h3>Hello Hello Hello</h3>
  </div>
);

const Paragraph1 = () => (
  <div className="paragraph">
    <h3>Hello 1</h3>
  </div>
);

/*const Paragraph = ({ words }) => (
  <div className="paragraph">
    {words.map((width) => (
      <Word width={width} />
    ))}
  </div>
); */

export const ContentPlaceholder = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    <Paragraph />
  </motion.div>
);
export const ContentPlaceholder1 = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    <Paragraph1 />
  </motion.div>
);
