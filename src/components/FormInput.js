import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import kartaczeSmall from "../img/kartaczeSmall.jpg";
import babkaZiemn from "../img/babke-ziemniaczanaSmall.jpg";
import kiszkaZiemn from "../img/kiszka-ziemniaczanaSmall.jpg";

import { FormItemStyle } from "../styles";

function handleSubmit(e) {
  e.preventDefault();
  try {
    const row = [e.target.id, new Date().toLocaleString()];
    new FormData(e.target).forEach((value) => row.push(value));
    console.log(JSON.stringify(row));
    fetch(
      "https://v1.nocodeapi.com/ann1111/google_sheets/RxXCxOtJTlQEfoCK?tabId=Arkusz1",
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

const FormItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <label htmlFor="shopName" class="open" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? false : true}
        <FontAwesomeIcon icon={faStoreAlt} size="lg" />
        {props.item.shopName}
      </label>
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
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <form id={props.item.shopName} onSubmit={handleSubmit}>
              <div>
                <p>Ilość</p>
                <p>Koszt</p>
              </div>
              <motion.div
                variants={{
                  collapsed: { scale: 0.9, opacity: 0 },
                  open: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
                className="content-placeholder"
              >
                <FormItemStyle>
                  <img src={kartaczeSmall} alt="kartacze danie" />
                  <label>Kartacze</label>
                  <input type="tekst" name="kartacze" />
                  <p>szt.</p>
                </FormItemStyle>
              </motion.div>
              <motion.div
                variants={{
                  collapsed: { scale: 0.9, opacity: 0 },
                  open: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
                className="content-placeholder"
              >
                <FormItemStyle>
                  <img src={babkaZiemn} alt="babka ziemniaczana danie" />
                  <label>Babka</label>
                  <input type="text" name="babka" />
                  <p>kg</p>
                </FormItemStyle>
              </motion.div>
              <motion.div
                variants={{
                  collapsed: { scale: 0.9, opacity: 0 },
                  open: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
                className="content-placeholder"
              >
                <FormItemStyle>
                  <img src={kiszkaZiemn} alt="kiszka ziemniaczana danie" />
                  <label>Kiszka</label>
                  <input type="text" name="kiszka" />
                  <p>kg</p>
                </FormItemStyle>
              </motion.div>
              <button type="submit" value="Submit">
                Zapisz
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const FormContainer = () => {
  const state = {
    items: [{ shopName: "Stankiewicza1" }, { shopName: "Stankiewicza2" }],
  };

  return (
    <div>
      {state.items.map((item, index) => (
        <FormItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FormContainer;

/*const FormInputCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    sklep: "",
    kartacze: "",
    babka: "",
    kiszka: "",
  });

  /*const [shop, setShop] = useState([
    { id: 1, nameShop: "Stankiewicz1" },
    { id: 2, nameShop: "Stankiewicz2" },
  ]);

  // const { shop1, shop2 } = shop;
  const { sklep, kartacze, babka, kiszka } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ann1111/google_sheets/RxXCxOtJTlQEfoCK?tabId=Arkusz1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [sklep, kartacze, babka, kiszka, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, sklep: "", kartacze: "", babka: "", kiszka: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <FontAwesomeIcon icon={faStoreAlt} size="lg" />
          <label
            key={shop.id}
            id="shop"
            type="text"
            name="shop"
            value={shop.nameShop}
            onChange={(e) =>
              setShop.map((items) => items.id === parseInt(e.target.key))
            }
          >
            shop
          </label>
        </div>
        <div>
          <h3>Ilość</h3>
          <h3>Koszt</h3>
        </div>
        <div>
          <label htmlFor="kartacze">Kartacze</label>
          <input
            type="number"
            name="kartacze"
            value={kartacze}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="babka">Babka</label>
          <input
            type="number"
            name="babka"
            value={babka}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="kiszka">Kiszka</label>
          <input
            type="number"
            name="kiszka"
            value={kiszka}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FormInputCard;*/
