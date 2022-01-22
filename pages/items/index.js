import { useRouter } from "next/router";
import { Fragment } from "react";
import EventsSearch from "../../components/items/event-search";
import ItemsList from "../../components/items/items-list";
import { getAllItems } from "../../dummy-data";

function AllEventsPage() {
  const items = getAllItems();
  const router = useRouter();

  function findEventsHandler(id, title) {
    const fullPath = `/items/${id}/${title}`;
    //this will target the [...slug].js file
    router.push(fullPath);
  }

  return (
    <div>
      <h1>All Events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <ItemsList items={items} />
    </div>
  );
}

export default AllEventsPage;
