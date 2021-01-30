import _ from "lodash";

let dinners = [
  {
    id: 1,
    title: "Pie & Chips",
    description: "Pukka pie, gravy, chips, peas.",
  },
  {
    id: 2,
    title: "Lasagne",
    description:
      "Minced beef, onion, lasagne pasta sheets, white sauce, bolognese sauce.",
  },
  {
    id: 3,
    title: "Fajitas",
    description:
      "Frozen chicken, seasoning mix, red pepper, onion, lettuce, cheese, wraps, mayonnaise.",
  },
  {
    id: 4,
    title: "Pizza",
    description: "Frozen pizza.",
  },
  {
    id: 5,
    title: "Sheperd's Pie",
    description: "Minced beef, potatoes, sheperd's pie mix, cheese.",
  },
  {
    id: 6,
    title: "Chicken Curry",
    description: "Frozen chicken, onion, curry sauce, rice.",
  },
  {
    id: 7,
    title: "Chicken Kievs",
    description: "Chicken kievs, lettuce, peas, chips.",
  },
  {
    id: 8,
    title: "Tuna Pasta Bake",
    description: "Pasta, tuna pasta bake sauce, tuna, cheese.",
  },
  {
    id: 9,
    title: "Sausage Casserole",
    description: "Sausages, sausage casserole mix, onion, potatoes.",
  },
  {
    id: 10,
    title: "Steak & Chips",
    description: "Steak, steak seasoning, chips, peas, mayonnaise.",
  },
  {
    id: 11,
    title: "Fish & Chips",
    description: "Frozen fish, chips, peas, mayonnaise.",
  },
  {
    id: 12,
    title: "Sausage & Mash",
    description: "Sausages, mashed potatoes, onion, gravy.",
  },
  {
    id: 13,
    title: "Enchiladas",
    description:
      "Frozen chicken, peppers, enchilada kit, chopped tomatoes, onion, cheese.",
  },
  {
    id: 14,
    title: "Thai Green Curry",
    description:
      "Frozen chicken, thai green curry paste, coconut milk, rice, baby sweetcorn.",
  },
  {
    id: 15,
    title: "Fish Pie",
    description: "Assorted fish pieces, potatoes, fish pie mix, cheese.",
  },
  {
    id: 16,
    title: "Beef Tacos",
    description: "Minced beef, taco kit, lettuce, onion, cheese, mayonnaise.",
  },
  {
    id: 17,
    title: "Chicken Salad",
    description:
      "Frozen chicken, seasoning mix, cucumber, lettuce, onion, cheese, mayonnaise.",
  },
  {
    id: 18,
    title: "Chicken & Chorizo Jambalaya",
    description:
      "Frozen chicken, chorizo, chopped tomatoes, pepper, onion, rice, seasoning mix.",
  },
  {
    id: 19,
    title: "Spaghetti Bolognese",
    description: "Minced beef, onion, spaghetti, bolognese sauce.",
  },
  {
    id: 20,
    title: "Spaghetti Carbonara",
    description: "Cabonara sauce, spaghetti, bacon, garlic, parmesan.",
  },
  {
    id: 21,
    title: "Roast Dinner",
    description:
      "Beef slices, yorkshire pudding, potatoes, gravy, parsnips, broccoli, peas, baby sweetcorn.",
  },
  {
    id: 22,
    title: "Garlic Chicken",
    description: "Frozen chicken, new potatoes, peas, garlic chicken sheets.",
  },
  {
    id: 23,
    title: "Chicken Burgers",
    description: "Chicken burgers, buns, cheese, lettuce, mayonnaise, chips.",
  },
  {
    id: 24,
    title: "Hot Dogs",
    description: "Hot dogs, buns, cheese, onion, lettuce, mayonnaise, chips.",
  },
  {
    id: 25,
    title: "Stir Fry",
    description:
      "Frozen chicken, noodles, mixed frozen vegetables, soy sauce, creme fraiche.",
  },
  {
    id: 26,
    title: "Tuna Jacket Potato",
    description:
      "Tuna, jacket potato, cheese, butter, lettuce, mayonnaise, onion, cucumber.",
  },
  {
    id: 27,
    title: "Toad in the Hole",
    description: "Plain flour, eggs, milk, sausages, olive oil.",
  },
  {
    id: 28,
    title: "Creamy Chicken Pasta",
    description:
      "Bacon, chicken, spinach, garlic, tomatoes, cream, parmesan, pasta, parsley.",
  },
  {
    id: 29,
    title: "Risotto",
    description:
      "Bacon, chorizon, chicken stock, risotto rice, peas, parmesan.",
  },
  {
    id: 30,
    title: "Naan Pizzas",
    description: "Naan bread, tomato puree/BBQ sauce, meat selection, cheese.",
  },
  {
    id: 31,
    title: "Chicken & Bacon Pasta",
    description: "Chicken, bacon, pasta sauce, pasta, cheese.",
  },
  {
    id: 32,
    title: "Chilli Con Carne",
    description: "Mince, chilli con carne sauce, rice.",
  },
  {
    id: 33,
    title: "Stuffed Peppers",
    description:
      "Peppers, mince, chopped tomatoes, onion, cheese, tomato ketchup, cucumber, houmous, pita bread.",
  },
  {
    id: 34,
    title: "Nandos Chicken Wraps",
    description: "Wraps, chicken, nandos bag, lettuce, cucumber, cheese.",
  },
];
let id = 35;

export function createDinnerMock(values) {
  const dinner = {
    id: nextId(),
    title: values.title,
    description: values.description,
  };

  dinners.push(dinner);

  return dinner;
}

export function deleteDinnerMock(idString) {
  const id = parseInt(idString, 10);
  dinners.splice(
    dinners.findIndex((x) => x.id === id),
    1
  );
}

export function fetchRandomDinnerMock() {
  return _.sample(dinners);
}

export function fetchDinnerMock(idString) {
  const id = parseInt(idString, 10);
  return dinners.find((x) => x.id === id);
}

export function fetchDinnersMock() {
  return dinners;
}

export function fetchDinnersSizeMock() {
  return dinners.length;
}

function nextId() {
  return id++;
}
