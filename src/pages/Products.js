import React, { useEffect, useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadProductData } from "../actions/productAction";
//page components
import ProductsSection from "../components/ProductsSection";
import App from "../components/DatePicker";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Top from "../img/Top.png";
import Footer from "../img/Footer.JPG";

//Styles
import {
  Sklep,
  TopPicture,
  FooterPicture,
  DatePickerStyle,
  Title1,
  TextHeader,
  ArrowImg,
} from "../styles";

const ProductsPage = () => {
  //Fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);
  //Get data back
  const { data } = useSelector((state) => state.productData);
  const [dataAll, setDataAll] = useState([]);

  const containerState = { initialDate: null };

  const gettingDate = () => {
    const datePicker = containerState.initialDate;
    const datePicker1 = `${datePicker.day}/${datePicker.month}/${datePicker.year}`;
    return datePicker1;
  };

  function filterByDate(data, date) {
    let dataByDate = data.filter((item) => item.data === date);
    return dataByDate;
  }

  return (
    <div>
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
          <h2 className="textHeader">Produkty</h2>
        </TextHeader>
      </Title1>
      <DatePickerStyle>
        <App containerState={containerState} />
      </DatePickerStyle>

      <div>
        <button onClick={() => setDataAll(filterByDate(data, gettingDate()))}>
          Kartacze
        </button>
        {dataAll.map((product) => {
          const { id, sklep, kartacze } = product;
          return (
            <div key={id}>
              <h4> {sklep}</h4>
              <h4> {kartacze}</h4>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => setDataAll(filterByDate(data, gettingDate()))}>
          Babka
        </button>
        {dataAll.map((product) => {
          const { id, sklep, babka } = product;
          return (
            <div key={id}>
              <h4> {sklep}</h4>
              <h4> {babka}</h4>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => setDataAll(filterByDate(data, gettingDate()))}>
          Kiszka
        </button>
        {dataAll.map((product) => {
          const { id, sklep, kiszka } = product;
          return (
            <div key={id}>
              <h4> {sklep}</h4>
              <h4> {kiszka}</h4>
            </div>
          );
        })}
      </div>
      <FooterPicture>
        <div>
          <img src={Footer} alt="blue wave top" />
        </div>
      </FooterPicture>
    </div>
  );
};

export default ProductsPage;
