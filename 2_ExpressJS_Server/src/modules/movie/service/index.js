const axios = require('axios')

const searchMovie = async ({ title, page }) => {
  try {
    const params = {
      apikey: process.env.OMDB_APIKEY,
      s: title,
      page: page || 1
    }
    const result = await axios.get(process.env.OMDB_URL, { params })
    return {
      error: false,
      code: 200,
      data: result.data
    }
  } catch (err) {
    return {
      error: true,
      code: err.response && err.response.status ? err.response.status : 500,
      message: err.response && err.response.statusText ? err.response.statusText : 'Something went wrong'
    }
  }
}

const getMovieDetails = async ({ title, id }) => {
  try {
    const params = {
      apikey: process.env.OMDB_APIKEY,
      t: title,
      i: id
    }
    const result = await axios.get(process.env.OMDB_URL, { params })
    return {
      error: false,
      code: 200,
      data: result.data
    }
  } catch (err) {
    console.log('eeeeee', err);
    return {
      error: true,
      code: err.response && err.response.status ? err.response.status : 500,
      message: err.response && err.response.statusText ? err.response.statusText : 'Something went wrong'
    }
  }
}

module.exports = {
  searchMovie,
  getMovieDetails
}
