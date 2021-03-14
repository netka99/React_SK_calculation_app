import React from "react";
import Top from "../img/Top.png";
import Footer from "../img/Footer.JPG";
import App, { Contact } from "../components/DatePicker";
import ReactDOM from "react-dom";
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

const SklepSection = () => {
  return (
    <Sklep>
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
      <Contact />
      <FormContainer />

      <FooterPicture>
        <div>
          <img src={Footer} alt="blue wave top" />
        </div>
      </FooterPicture>
    </Sklep>
  );
};

export default SklepSection;
