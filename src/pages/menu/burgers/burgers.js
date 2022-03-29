import React from "react";
import styles from "./burgers.module.css";

const beefBurgers = [
  {
    name: `Fonz`,
    description: `‘Beef’ patty, fresh tomato & onion, sliced pickles, smokey cheese, house baste, mayo & bbq sauce`,
    price: `9.00`,
    type: `'Beef'`,
    id: 0,
  },
  {
    name: `Sith`,
    description: `‘Beef’ patty, fresh tomato & onion, sliced pickles, smokey cheese, house baste, mayo & bbq sauce`,
    price: `9.50`,
    type: `'Beef'`,
    id: 1,
  },]
  const chickenBurgers = [
  {
    name: `Colonel`,
    description: `Coated ‘chick’n fillet covered in garlic buffalo mayo w/ fresh tomato`,
    price: `9,00`,
    type: `‘Chick’n`,
    id: 2,
  },
  {
    name: `Ol’ Dirty Colonel`,
    description: `Our Colonel burger patty w/ cheese, Deptford Death Sauce & blue cheese dressing`,
    price: `9.50`,
    type: `‘Chick’n`,
    id: 3,
  },
];

// const about = [
//    
//     {Chickn: `}
// ];

export function BeefBurgerItem() {
  return (
    <section className={styles.burger}>
      {beefBurgers.map(({ name, description, price, id }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>£{price}</h3>
        </div>
      ))}
    </section>
  );
}


export function ChickenBurgerItem() {
  return (
    <section className={styles.burger}>
      {chickenBurgers.map(({ name, description, price, id }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>£{price}</h3>
        </div>
      ))}
    </section>
  );
}

/*

const arrayOfObjects = [
  { coffee: "Americano", size: "Medium" },
  { coffee: "Espresso", size: "Single" },
];

export default function MyReactComponent() {
  return (
    <>
      {arrayOfObjects.map(({ coffee, size }) => (
        <p key={coffee}>Coffee type {coffee} in a {size} size.</p>
      ))}
    </>
  );
}


*/
