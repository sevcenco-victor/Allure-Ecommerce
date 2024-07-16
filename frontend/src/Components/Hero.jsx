import styles from './Hero.module.css';
import ButtonLink from './UI/ButtonLink';
const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <h1>sentir algo</h1>
      <ButtonLink
        text="Shop Now"
        title="Shop products"
        link="shop"
        color="white"
      />
    </div>
  );
};

export default Hero;
