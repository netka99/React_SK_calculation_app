import React, { useEffect, useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadProductData } from "../actions/productAction";
//page components
import ProductsSection from "../components/ProductsSection";
import App from "../components/DatePicker";

//Styles
import { DatePickerStyle } from "../styles";

const ProductsPage = () => {
  //Fetch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);
  //Get data back
  const { data } = useSelector((state) => state.productData);
  console.log(data);

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
      <h1>Products Page</h1>
      <DatePickerStyle>
        <App containerState={containerState} />
      </DatePickerStyle>
      <div>
        <button onClick={() => console.log(filterByDate(data, gettingDate()))}>
          Kartacze
        </button>
      </div>
      <div>
        {data.map((product) => (
          <ProductsSection
            shop={product.sklep}
            date={product.data}
            kartacze={product.kartacze}
            babka={product.babka}
            kiszka={product.kiszka}
            id={product.id}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
