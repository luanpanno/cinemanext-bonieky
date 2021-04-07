import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Movie } from '../models/domain/Movie';

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinemanext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Filmes em Destaque</h1>

        <Link href="/busca">Ir para a Busca</Link>

        <ul>
          {list?.map((item: Movie) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props: {
      list: json.list,
    },
  };
};
