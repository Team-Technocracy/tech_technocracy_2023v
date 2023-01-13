// Component Imports
import Hero from './Hero/Hero';

// CSS Import
import styles from './Home.module.css';

const Home = () => {
  return (
    <div id="home" className={styles.homeWrapper}>
      <Hero />
    </div>
  );
};

export default Home;
