import React from "react";
import fonzburger1 from "../../assets/images/fonzburger1.jpeg";
import colonel1 from "../../assets/images/colonel1.jpeg";
import chilliCheeseFries1 from "../../assets/images/chilliCheeseFries1.jpeg";
import buffaloWings from "../../assets/images/buffaloWings.jpeg";
import {
  BeefBurgerItem,
  ChickenBurgerItem,
  FriesItem,
  Wings,
} from "./indexMenu";
import styles from "./menu.module.css";

function Menu(props) {
  return (
    <div>
      <div className={styles.aboutBurger}>
        <p>
          Hand crafted ‘Beef’ patty on a lightly toasted brioche bun w/ finely
          chopped lettuce
        </p>
        <img src={fonzburger1} alt="fonz burger" className={styles.fonz} />
      </div>
      <BeefBurgerItem />

      <div className={styles.aboutBurger}>
        <p>
          Southern style ‘Chick’n burgers on a lightly toasted brioche bun w/
          finely chopped lettuce
        </p>
        <img src={colonel1} alt="colonel buger" className={styles.fonz} />
      </div>
      <ChickenBurgerItem />

      <div className={styles.aboutBurger}>
        <p>
          All our fries come seasoned with salt and rosemary, then dusted with
          smoked paprika
        </p>
        <img
          src={chilliCheeseFries1}
          alt="chilli cheese fries"
          className={styles.fonz}
        />
      </div>
      <FriesItem />

      <div className={styles.wingsBox}>
      <Wings />
        <img src={buffaloWings} alt="buffalo wings" className={styles.wingz} />
      </div>
    </div>
  );
}

export default Menu;
