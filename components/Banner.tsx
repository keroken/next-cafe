import styles from '../styles/Banner.module.css';

type Props = {
  buttonTitle: string;
  handleOnClick: () => void;
};

const Banner = ({ buttonTitle, handleOnClick }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Next</span>
        <span className={styles.title2}>Cafe</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={handleOnClick}>{buttonTitle}</button>
    </div>
  );
};

export default Banner;
