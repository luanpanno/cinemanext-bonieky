export default async (req, res) => {
  const movies = await fetch(
    `${process.env.API_BASE}/trending/movie/week?api_key=${process.env.API_KEY}&language=pt-BR`
  );
  const json = await movies.json();

  res.status(200).json({
    list: json?.results,
  });
};
