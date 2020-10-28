import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg"
          alt="Orange"
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardDate}>
          <time>26 Février 1991</time>
        </div>

        <div className={styles.cardTitle}>
          <h3>Lorem Ipsum</h3>
        </div>

        <div className={styles.cardExceprt}>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            voluptatibus autem consectetur voluptate facere at, omnis ab optio
            placeat officiis! Animi modi harum enim quia veniam consectetur unde
            autem inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
