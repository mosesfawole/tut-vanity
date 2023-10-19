import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <div className={styles.container}></div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quaerat
            corporis natus laboriosam, facilis, nulla beatae similique
            consectetur ad quis animi vitae, nostrum ex ratione eligendi autem
            suscipit neque sit?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className=""></p>
        </div>
      </div>
    </div>
  );
};

export default About;
