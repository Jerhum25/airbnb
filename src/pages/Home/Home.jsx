import React from "react";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./home.scss";
import Cards from "../../components/Cards/Cards";


function Home(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      <hr />
      <Categories />
      <Cards/>
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
