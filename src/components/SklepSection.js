import React from "react";
import Top from "../img/Top.png";
import Footer from "../img/Footer.JPG";
import App from "../components/DatePicker";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AccordionExample } from "../accordion/Accordion";
import FormInputCard from "../components/FormInput";

import "../accordion/stylesAccordion.css";

//Styled
import {
  Sklep,
  TopPicture,
  FooterPicture,
  DatePickerStyle,
  TopLine,
  Title1,
  TextHeader,
  ArrowImg,
  AccordionStyle,
} from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const SklepSection = () => {
  return (
    <Sklep>
      <TopLine />
      <TopPicture>
        <div className="topPicture">
          <img src={Top} alt="blue wave top" />
        </div>
      </TopPicture>
      <Title1>
        <ArrowImg>
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </ArrowImg>
        <TextHeader>
          <h2 className="textHeader">Sklepy</h2>
        </TextHeader>
      </Title1>
      <DatePickerStyle>
        <App />
      </DatePickerStyle>
      <AccordionStyle>
        <div className="bodyAccordion">
          <div className="example-container">
            <AccordionExample />
          </div>
        </div>
      </AccordionStyle>
      <FormInputCard />

      <FooterPicture>
        <div>
          <img src={Footer} alt="blue wave top" />
        </div>
      </FooterPicture>
    </Sklep>
  );
};

export default SklepSection;
