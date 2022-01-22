import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import { Fragment } from "react";
import SingleItem from "../../components/items/single-item";
import ItemsList from "../../components/items/items-list";

export const TheItem = (props) => {
  const { filteredEvents } = props;

  return <p>{filteredEvents.description}</p>;
};

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log("slug", filterData);

  if (!filterData) {
    // as it will be undefined when the app is rendered for the first time
    return <p> Loading...</p>;
  }

  // use the variables you get from the url here
  const filteredId = filterData[0];
  const filteredTitle = filterData[1];

  console.log("filteredTitle", filteredTitle);
  if (!filteredTitle) {
    //isNaN() to check if data is not a number
    // the if or condition can be added as you like
    return <p>Invalid filter. Please adjust your values</p>;
  }

  const filteredEvents = getFilteredEvents({
    id: filteredId,
    title: filteredTitle,
  }); // which is an imported function from dummy-data

  console.log("filteredEvents", filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p> no events found </p>;
  }

  return (
    <Fragment>
      <TheItem filteredEvents={filteredEvents} />
      <ItemsList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
