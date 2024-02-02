import Image from "next/image";
import styles from "./section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.mainContainer}>
      <Image
        alt="content 1"
        src={"/content-1.jpg"}
        width={300}
        height={400}
      ></Image>
      <div className={styles.contentContainer}>
        <h2>Why Our Clients Choose Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          exercitationem beatae ullam optio modi itaque amet, eaque ipsa quam
          dolor nihil nostrum eos corporis praesentium, a mollitia dolorum
          molestias accusamus.
        </p>
        <span>
          Lorem ispansum dolor sit amet consectetur adipisicing elit. Repellat
          exercitationem beatae ullam optio modi itaque amet.
        </span>
      </div>
    </section>
  );
};

export default Section2;
