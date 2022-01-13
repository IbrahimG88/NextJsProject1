import { getFeaturedItems } from "../dummy-data";
import ItemsList from "../components/items/items-list";

function HomePage() {
  const featuredItems = getFeaturedItems();
  return (
    <div>
      <ItemsList items={featuredItems} />
    </div>
  );
}

export default HomePage;
