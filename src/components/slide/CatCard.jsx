import React from "react";

const CatCard = ({ card }) => {
  return (
    <div className="catCard relative w-4/5 h-70 text-white  cursor-pointer">
      <img src={card.img} alt="" className="w-full h-full object-cover" />
      <span className="title font-semibold absolute top-3 left-2 text-2xl">{card.title}</span>
      <span className="desc font-light absolute top-12 left-2">{card.desc}</span>
    </div>
  );
}

export default CatCard;
