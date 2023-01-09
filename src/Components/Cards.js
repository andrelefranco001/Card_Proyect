import React from "react";
import Card from "./Card";
import img1 from "../assets/img/pexels-bryn-photography-8522014 (1).jpg";
import img2 from "../assets/img/pexels-john-nail-5162750.jpg";
import img3 from "../assets/img/pexels-mike-b-463996.jpg";

const cards = [
  {
    id: 1,
    title: "House in Liverpool",
    image: img1,
  },
  {
    id: 2,
    title: "House in Bristol",
    image: img2,
  },
  {
    id: 3,
    title: "House in York",
    image: img3,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imgSource={card.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
