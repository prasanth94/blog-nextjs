import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/prasanth.jpeg"
          alt="image for Prasanth"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Prasanth</h1>
      <p>
        I blog about web development- especially frontend framework like React
      </p>
    </section>
  );
}
