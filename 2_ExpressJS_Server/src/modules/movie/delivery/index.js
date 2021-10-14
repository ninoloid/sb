const movieService = require('../service')

const searchMovie = async (req, res) => {
  const result = await movieService.searchMovie(req.query)
  return res
    .status(result.code)
    .json(result)
}

const getMovieDetails = async (req, res) => {
  const result = await movieService.getMovieDetails(req.query)
  return res
    .status(result.code)
    .json(result)
}

const init = router => {
  router.get('/search', searchMovie)
  router.get('/detail', getMovieDetails)
}


module.exports = {
  init
}
