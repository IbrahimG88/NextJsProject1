import React from "react";
import SingleItem from "./single-item";

const ItemsList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <SingleItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
