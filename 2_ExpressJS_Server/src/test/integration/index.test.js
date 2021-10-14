require('dotenv').config()
process.env.NODE_ENV='test'

describe('INTEGRATION TEST', () => {
  require('require-dir')('./specs/movie')
})