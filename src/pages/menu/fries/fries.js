import styles from "./fries.module.css";

const fries = [
  {
    name: `Coney Fries`,
    description: `Our rosemary seasoned fries covered in sauerkraut, pickles, fresh & crispy onions, ketchup & mustard`,
    price: `5.00`,
    id: 7,
  },
  
  {
    name: `Chilli Cheese Fries`,
    description: `Our rosemary seasoned fries covered in our house chilli & melty mozzarella w/ crème fraîche, radish and jalapeños`,
    price: `5.50`,
    id: 5,
  },

  {
    name: `Poutine`,
    description: `Our rosemary seasoned fries covered in melty mozzarella & our home ‘chick’n gravy`,
    price: `5.50`,
    id: 6,
  },

  {
    name: `Fries`,
    description: `Our rosemary and smoked paprika seasoned fries`,
    price: `3.00`,
    id: 4,
  },
];

export default function FriesItem() {
  return (
    <section className={styles.fries}>
      {fries.map(({ name, description, price, id }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>£{price}</h3>
        </div>
      ))}
    </section>
  );
}
