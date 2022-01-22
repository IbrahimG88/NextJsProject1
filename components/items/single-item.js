import React from "react";
import Link from "next/link";

export default function SingleItem(props) {
  const { title, image, description, id } = props;

  const exploreLink = `/items/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} width="300px" height="300" />
      <div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <Link href={exploreLink}>Explore Item</Link>
        </div>
      </div>
    </li>
  );
}
