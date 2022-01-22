const DUMMY_ITEMS = [
  {
    id: "e0",
    title: "B-HCG",
    description: "Vidas pregnancy test",
    location: "suez 318 suez, egypt",
    date: "2021-05-12",
    image: "images/pic1.jpg",
    isFeatured: true,
  },
  {
    id: "e1",
    title: "FT3",
    description: "thyroid ft3 for tosoh",
    location: "suez 318 suez, egypt",
    date: "2021-05-12",
    image: "images/pic2.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Glucose",
    description: "Glucse clinical chemistry for autolyzer",
    location: "suez 318 suez, egypt",
    date: "2021-05-12",
    image: "images/pic3.jpg",
    isFeatured: false,
  },
];
export function getAllItems() {
  return DUMMY_ITEMS;
}

export function getFeaturedItems() {
  return DUMMY_ITEMS.filter((item) => item.isFeatured);
}

export function getItemById(id) {
  return DUMMY_ITEMS.find((item) => item.id === id);
}

export function getFilteredEvents(eventFilter) {
  const { id, title } = eventFilter;

  let filteredEvents = DUMMY_ITEMS.filter((event) => {
    return event.id === id && event.title === title;
  });

  return filteredEvents;
}
