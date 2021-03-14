import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import kartaczeSmall from "../img/kartaczeSmall.jpg";
import babkaZiemn from "../img/babke-ziemniaczanaSmall.jpg";
import kiszkaZiemn from "../img/kiszka-ziemniaczanaSmall.jpg";
import App from "../components/DatePicker";

import {
  FormItemStyle,
  FormStyle,
  FormLabel,
  SubmitStyle,
  FormTopHeading,
  ArrowBackground,
} from "../styles";

const FormItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const date = props.getInputDate();
    try {
      const row = [
        `${date.day}/${date.month}/${date.year}`,
        new Date().toLocaleString(),
        e.target.id,
      ];
      new FormData(e.target).forEach((value) => row.push(value));
      console.log(JSON.stringify(row));
      fetch(
        `https://v1.nocodeapi.com/ann1111/google_sheets/${process.env.REACT_APP_GOOGLESHEET_API}?tabId=Arkusz1`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([row]),
        }
      ).then((resp) => console.log(resp));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <FormStyle>
      <FormLabel>
        <label
          htmlFor="shopName"
          class="open"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? false : true}
          <FontAwesomeIcon icon={faStoreAlt} size="lg" />
          <p> {props.item.shopName}</p>
          <ArrowBackground>
            {!isOpen ? (
              <span>
                <FontAwesomeIcon icon={faChevronDown} size="lg" />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faChevronUp} size="lg" />
              </span>
            )}
          </ArrowBackground>
        </label>
      </FormLabel>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              staggerChildren: 0.15,
              ease: "easeOut",
              // ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <form id={props.item.shopName} onSubmit={handleSubmit}>
              <FormTopHeading>
                <p>Ilość</p>
                <p>Koszt</p>
              </FormTopHeading>
              <motion.div
                variants={{
                  collapsed: { scale: 0.9, opacity: 0 },
                  open: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
                // className="content-placeholder"
              >
                <FormItemStyle>
                  <img src={kartaczeSmall} alt="kartacze danie" />
                  <label>Kartacze</label>
                  <input type="tekst" name="kartacze" placeholder="0" />
                  <p>szt.</p>
                  <span>60</span>
                  <p>zł</p>
                </FormItemStyle>
              </motion.div>
              <motion.div
                variants={{
                  collapsed: { scale: 0.9, opacity: 0 },
                  open: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.5 }}
                // className="content-placeholder"
              >
                <FormItemStyle>
                  <img src={babkaZiemn} alt="babka ziemniaczana danie" />
                  <label>Babka</label>
                  <input type="text" name="babka" placeholder="0.00" />
                  <p>kg</p>
                  <span>60</span>
                  <p>zł</p>
                </FormItemStyle>
              </motion.div>
              <motion.div
                variants={{
                  collapsed: { scale: 0.9, opacity: 0 },
                  open: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
                //  className="content-placeholder"
              >
                <FormItemStyle>
                  <img src={kiszkaZiemn} alt="kiszka ziemniaczana danie" />
                  <label>Kiszka</label>
                  <input type="text" name="kiszka" placeholder="0.00" />
                  <p>kg</p>
                  <span>60</span>
                  <p>zł</p>
                </FormItemStyle>
              </motion.div>
              <motion.div
                variants={{
                  collapsed: { scale: 0.9, opacity: 0 },
                  open: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
                //  className="content-placeholder"
              >
                <SubmitStyle>
                  <button type="submit" value="Submit">
                    Zapisz
                  </button>
                </SubmitStyle>
              </motion.div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </FormStyle>
  );
};

const FormContainer = (props) => {
  const state = {
    items: [
      { shopName: "Sklep STAN 1" },
      { shopName: "Sklep STAN 2" },
      { shopName: "Sklep Lewiatan Świerkowa" },
      { shopName: "Sklep Lewiatan Putry" },
      { shopName: "Sklep Lewiatan Szpitalna" },
      { shopName: "Sklep Lewiatan Woj.Polskiego" },
    ],
  };

  return (
    <div>
      {state.items.map((item, index) => (
        <FormItem key={index} item={item} getInputDate={props.getInputDate} />
      ))}
    </div>
  );
};

export default FormContainer;
