export default async (req, res) => {
  const movies = await fetch(
    `${process.env.API_BASE}/movie/${req.query.id}?api_key=${process.env.API_KEY}&language=pt-BR`
  );
  const json = await movies.json();

  res.status(200).json({
    movie: json,
  });
};
