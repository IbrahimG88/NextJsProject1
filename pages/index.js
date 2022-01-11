import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getFeaturedItems } from "../dummy-data";
import ItemsList from "../components/items/items-list";

export default function Home() {
  const featuredItems = getFeaturedItems();
  return (
    <div>
      <ItemsList items={featuredItems} />
    </div>
  );
}
