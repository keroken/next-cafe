import Head from 'next/head';
import Banner from '../components/Banner';
import styles from '../styles/Home.module.css';

const Home = () => {
  const handleBannerBtnClick = () => {
    alert('clicked');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Cafe</title>
        <meta name="description" content="Discover your local coffee shops!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonTitle="View Store nearby" handleOnClick={handleBannerBtnClick} />
      </main>
    </div>
  );
};

export default Home;
