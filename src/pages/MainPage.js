import React from "react";
import { Link } from "react-router-dom";
//import Top from "../img/Top.png";
import Footer from "../img/Footer.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faShoppingBasket,
  faChartPie,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
//Styled
import { MainIcon, MainContainer } from "../styles";

//page components

//Styled
import {
  TopPicture,
  FooterPicture,
  FooterPictureTop,
  MainMenu,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
} from "../styles";

const MainPage = () => {
  return (
    <div>
      <FooterPictureTop>
        <div className="topPicture">
          <img src={Footer} alt="blue wave top" />
        </div>
      </FooterPictureTop>

      <MainMenu>
        <MainContainer>
          <Link to="/sklepy">
            <MainIcon>
              <Icon1 className="Icon1">
                <FontAwesomeIcon icon={faStoreAlt} size="3x" />
              </Icon1>
            </MainIcon>{" "}
            <p>Lista Sklepów</p>{" "}
          </Link>
        </MainContainer>
        <MainContainer>
          <Link to="/produkty">
            <MainIcon>
              <Icon2 className="Icon2">
                <FontAwesomeIcon icon={faShoppingBasket} size="3x" />
              </Icon2>
            </MainIcon>
            <p>Produkty</p>
          </Link>
        </MainContainer>
      </MainMenu>
      <MainMenu>
        <MainContainer>
          <Link to="/statystyka">
            <MainIcon>
              <Icon3 className="Icon3">
                <FontAwesomeIcon icon={faChartPie} size="3x" />
              </Icon3>
            </MainIcon>
            <p>Wykresy</p>
          </Link>
        </MainContainer>
        <MainContainer>
          <Link to="/ustawienia">
            <MainIcon>
              <Icon4 className="Icon4">
                <FontAwesomeIcon icon={faCog} size="3x" />
              </Icon4>
            </MainIcon>
            <p>Ustawienia</p>
          </Link>
        </MainContainer>
      </MainMenu>

      <FooterPicture>
        <div>
          <img src={Footer} alt="blue wave top" />
        </div>
      </FooterPicture>
    </div>
  );
};

export default MainPage;
