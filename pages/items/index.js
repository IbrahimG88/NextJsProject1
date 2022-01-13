import { Fragment } from "react";
import ItemsList from "../../components/items/items-list";
import { getAllItems } from "../../dummy-data";

function AllEventsPage() {
  const items = getAllItems();

  return (
    <div>
      <h1>All Events</h1>
      <ItemsList items={items} />
    </div>
  );
}

export default AllEventsPage;
