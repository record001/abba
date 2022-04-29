import "./production.css";
import React, { useEffect, useState } from "react";

export default function ProductionCard() {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    fetch("https://alibaraka.pythonanywhere.com/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setPro(data);
      });
  }, []);
  let product = pro.map(
    (item) =>
      item.image && (
        <div className="proCard" key={item.id}>
          <img src={item.image} alt="pro" />
          <div className="proCard__context">
            <h2>{item.name}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      )
  );
  return product;
 
}
