import React from "react";
import "./App.css";
import NavHeader from "./component/Header";
import MainSection from "./component/MainSection";
import { FooterTodo } from "./component/FooterTodo";
// export let arr = [1,2,3]

export default function App() {

  return (
    <React.Fragment   > { /*Fragment -  Element Node will not create */ }
        <NavHeader/>
        <MainSection/>
        <FooterTodo/>
    </React.Fragment>
  );
}