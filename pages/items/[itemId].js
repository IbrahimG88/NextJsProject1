import { Fragment } from "react";
import { useRouter } from "next/router";
import { getItemById } from "../../dummy-data";
import ItemDetail from "../../components/items/item-detail";

function EventDetailPage() {
  const router = useRouter();

  const { itemId } = router.query;

  if (!itemId) {
    // as it will be undefined when the app is rendered for the first time
    return <p> Loading...</p>;
  }

  console.log("dffd", itemId);
  const item = getItemById(itemId);

  console.log("item", item);

  return (
    <Fragment>
      <p>cdcd</p>
      <ItemDetail description={item.description} />
    </Fragment>
  );
}

export default EventDetailPage;
