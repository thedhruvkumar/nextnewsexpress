import Head from "next/head";
import Image from "next/image";
import Navbar from "@next/components/Navbar";
import styles from "@next/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=4dd0045769ac4019bf44f2e121b96916`
    )
      .then((data) => data.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Next Website</title>
        <meta name="description" content="a website developed using nextjs13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.main} `}>
        <h1>Express News</h1>
        <div className={``}>
          {news &&
            news.map((item) => {
              return (
                <div className={`${styles.card}`} key={item.title}>
                  <h2>{item.title}</h2>
                  {item.urlToImage && <img
                    src={item.urlToImage}
                    alt="Picture of the author"
                    width={`100%`}
                    height={300}
                  />}
                  <div className={`${styles.info}`}>
                    <span className={`${styles.date}`}>{item.publishedAt}</span>
                    <span className={`${styles.author}`}>BY {item.author}</span>
                  </div>
                  <p className="content">{item.description}</p>
                  <a href={item.url} target="_blank">
                    Read More
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
