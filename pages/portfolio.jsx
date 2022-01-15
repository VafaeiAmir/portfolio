import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">Check out my Portfolio</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src="/chitchat.png"
                  className="portfolio-image"
                  alt="chitchat"
                />

                <h4 className="portfolio-name">Chat App Exploration</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
              <div className="portfolio-item">
                <img
                  src="/kajian.jpg"
                  className="portfolio-image"
                  alt="/kajian.jpg"
                />

                <h4 className="portfolio-name">Amir App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
