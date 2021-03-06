import React from "react";
import Top from "../img/Top.png";
import Footer from "../img/Footer.JPG";
import App from "../components/DatePicker";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FormContainer from "../components/FormInput";

//Styled
import {
  Sklep,
  TopPicture,
  FooterPicture,
  DatePickerStyle,
  Title1,
  TextHeader,
  ArrowImg,
} from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const SklepSection = () => {
  const containerState = { initialDate: null };

  function getInputDate() {
    return containerState.initialDate;
  }

  return (
    <Sklep>
      <TopPicture>
        <div className="topPicture">
          <img src={Top} alt="blue wave top" />
        </div>
      </TopPicture>
      <Title1>
        <Link to="/">
          <ArrowImg>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </ArrowImg>
        </Link>
        <TextHeader>
          <h2 className="textHeader">Sklepy</h2>
        </TextHeader>
      </Title1>
      <DatePickerStyle>
        <App containerState={containerState} />
      </DatePickerStyle>

      <FormContainer getInputDate={getInputDate} />

      <FooterPicture>
        <div>
          <img src={Footer} alt="blue wave top" />
        </div>
      </FooterPicture>
    </Sklep>
  );
};

export default SklepSection;
