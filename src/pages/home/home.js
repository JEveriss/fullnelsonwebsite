// import Styles from "./home.module.css";
import danzig from "../../assets/images/danzig.png";
import Title from "../../components/title/title";
import styles from "./home.module.css";


function Home() {
  return (
    <div className={styles.home}>
      <h2>THE</h2>
      <Title />
      <img className={styles.danzig} src={danzig} alt="danzig" />
      <p className={styles.p}>Vegan bar & kitchen in SE London</p>
    </div>
  );
}

export default Home;
