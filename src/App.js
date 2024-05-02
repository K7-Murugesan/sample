import React from "react";
import "./App.css";
import NavHeader from "./component/Header";
import MainSection from "./component/MainSection";
import { FooterTodo } from "./component/FooterTodo";
import { ParentComp } from "./component/Props/ParentComp";
import { Comp1 } from "./component/Props/prop-drilling/Comp1";
// export let arr = [1,2,3]

export default function App() {

  return (
    <React.Fragment   > { /*Fragment -  Element Node will not create */ }
        {/* <NavHeader/>
        <MainSection/>
        <FooterTodo/>
        <ParentComp/> */}
        <Comp1/>
    </React.Fragment>
  );
}