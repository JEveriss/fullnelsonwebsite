import React from "react";
import styles from "./icons.module.css";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import deliveroo from "../../assets/images/deliveroo.svg";

const icons = [
  {
    name: "instagram",
    link: "https://www.instagram.com/thefullnelsondeptford/",
    image: instagram,
    alt: "instagram logo",
  },
  {
    name: "twitter",
    link: "https://twitter.com/FullNelsonSE8",
    image: twitter,
    alt: "twitter logo",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/thefullnelsondeptford/",
    image: facebook,
    alt: "facebook logo",
  },
  {
    name: "deliveroo",
    link: "https://www.deliveroo.com/thefullnelsondeptford/",
    image: deliveroo,
    alt: "deliveroo logo",
  },
];

export default function Icons() {
  return (
    <section className={styles.iconContainer}>
      {icons.map(({ link, image, alt, id }) => (
        <div className={styles.icons} key={id}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={image} alt={alt}></img>
          </a>
        </div>
      ))}
    </section>
  );
}
