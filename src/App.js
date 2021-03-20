import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProductData } from "./actions/productAction";
//Global Style
import GlobalStyle from "./GlobalStyle";
//import pages
import Sklep from "./pages/Sklep";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/Products";
import SettingsPage from "./pages/Settings";
import StatisticsPage from "./pages/Statistics";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductData());
  });
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/sklepy">
          <Nav />
          <Sklep />
        </Route>
        <Route path="/produkty">
          <Nav />
          <ProductsPage />
        </Route>
        <Route path="/statystyka">
          <Nav />
          <StatisticsPage />
        </Route>
        <Route path="/ustawienia">
          <Nav />
          <SettingsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
