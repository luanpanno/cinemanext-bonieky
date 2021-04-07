import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Movie } from '../models/domain/Movie';
import Link from 'next/link';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [movieList, setMovieList] = useState<Movie[]>();

  function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  async function handleSearch() {
    if (searchText) {
      const result = await fetch(
        `http://localhost:3000/api/search?q=${searchText}`
      );
      const json = await result.json();

      console.log(json.call);

      setMovieList(json?.list);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cinemanext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Busca</h1>

        <input
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <button type="button" onClick={handleSearch}>
          Buscar
        </button>

        <ul>
          {movieList?.map((item: Movie) => {
            return (
              <li key={item?.id}>
                <Link href={`/movie/${item?.id}`} passHref>
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                      width="150"
                    />
                    <h2>{item?.title}</h2>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
