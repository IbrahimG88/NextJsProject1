const DUMMY_ITEMS = [
  {
    id: 1,
    title: "B-HCG",
    description: "Vidas pregnancy test",
    location: "suez 318 suez, egypt",
    date: "2021-07-12",
    image: "images/pic1.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "FT3",
    description: "thyroid ft3 for tosoh",
    location: "suez 318 suez, egypt",
    date: "2021-05-08",
    image: "images/pic2.jpg",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Glucose",
    description: "Glucse clinical chemistry for autolyzer",
    location: "suez 318 suez, egypt",
    date: "2022-05-17",
    image: "images/pic3.jpg",
    isFeatured: false,
  },
];

export function getFeaturedItems() {
  return DUMMY_ITEMS.filter((item) => item.isFeatured);
}
