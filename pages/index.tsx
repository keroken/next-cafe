import Head from 'next/head';
import Image from 'next/image';
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
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="hero image" />
        </div>
      </main>
    </div>
  );
};

export default Home;
