import React from "react";
import Cname from "./Cname";
import Sort from "./Sort";
import Navbar from "./Navbar";

export default function Product2(props) {
  return (
    <>
      <Navbar />
      <Cname cname={props.name} />
      <Sort aname={props.name} />
    </>
  );
}
