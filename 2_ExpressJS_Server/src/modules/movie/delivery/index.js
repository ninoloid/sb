const movieService = require('../service')
const dbLogger = require('../../../helpers/logger/dbLogger')

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
  router.get('/search', dbLogger, searchMovie)
  router.get('/detail', dbLogger, getMovieDetails)
}


module.exports = {
  init
}
