export default async (req, res) => {
  const movies = await fetch(
    `${process.env.API_BASE}/search/movie?api_key=${process.env.API_KEY}&language=pt-BR&query=${req.query.q}`
  );
  const json = await movies.json();

  res.status(200).json({
    list: json?.results,
  });
};
