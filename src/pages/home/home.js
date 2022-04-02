// import Styles from "./home.module.css";
import danzig from "../../assets/images/danzig.png";
import Title from "../../components/title/title";
import logo from "../../assets/images/logos.png";
import styles from "./home.module.css";
import Contact from "../contact/contact"

function Home() {
  return (
    <>
      <div className={styles.home}>
        <h2>THE</h2>
        <Title />
        <img className={styles.danzig} src={danzig} alt="danzig" />
        <p className={styles.p}>Vegan bar & kitchen in SE London</p>
      </div>
      <div className={styles.mobileHome}>
        <img className={styles.mobileLogo} src={logo} alt="Logo"></img>
        <h1><Contact/></h1>
      </div>
    </>
  );
}

export default Home;
