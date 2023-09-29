import React from "react";
import "./ProductCard.css";
import { useState } from "react";

export default function ProductCard({ img, title, prize, btnInc, btnDec }) {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
    console.log(count);
  }

  function Decrement() {
    setCount(count - 1);
    console.log(count);
  }

  function AddToCart(){
    alert("Product added Sucessfully.")
  }

  return (
    <>
      <div className="container">

        <div className="img-container">
          <img src={img} className="img" />
        </div>

        <p className="title">{title}</p>
        <h5 className="prize">{prize}</h5>
       

        <div className="button-container">
          <button className="btn" onClick={Decrement}>{btnDec}</button>
          <h1 className="count">{count}</h1>
          <button className="btn" onClick={Increment}>{btnInc}</button>

        </div>
          <button className="btn add-btn" onClick={AddToCart}>Add To Cart
          </button>
      </div>
    </>
  );
}
