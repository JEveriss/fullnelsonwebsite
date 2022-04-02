import map1 from "../../assets/images/map1.png";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <section className={styles.address}>
          <span className={styles.contactName}>The Full Nelson</span>
          <br />
          47 Deptford Broadway
          <br />
          SE8 4PH
        </section>
        <section>
          <img className={styles.map} src={map1} alt="map" />
        </section>
        <section className={styles.opening}>
          We are open everyday
          <br />
          Mon-Fri 17:00–23:00
          <br />
          Sat-Sun 12:00–23:00
        </section>
      </div>
      <p className={styles.contactDetails}>
        For reservations please contact us at:
        <br />
        <a href="mailto:reservations@thefullnelsondeptford.co.uk">
          Reservations@TheFullNelsonDeptford.co.uk
        </a>
        <br />
        <br />
        For all other enquiries:
        <br />
        <a href="mailto:enquiries@thefullnelsondeptford.co.uk">
          Enquiries@TheFullNelsonDeptford.co.uk
        </a>
      </p>
    </div>
  );
}

export default Contact;
