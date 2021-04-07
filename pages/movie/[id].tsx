import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

export default function MovieItem({ movie }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinemanext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Filme: {movie?.title}</h1>

        <Link href="/busca">Ir para a Busca</Link>

        <p>Nota: {movie?.vote_average}</p>
        <p>{movie?.overview}</p>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width="400"
        />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/movie?id=${context.params.id}`
  );
  const json = await res.json();

  console.log(json);

  return {
    props: {
      movie: json.movie,
    },
  };
};
