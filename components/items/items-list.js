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
          date={item.date}
          image={item.image}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
