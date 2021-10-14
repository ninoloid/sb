const request = require('supertest')
const { expect } = require('chai')

const app = require('../../../../bin/server')

describe('Integration Test of Movie Modules', () => {
  let appServer

  before(async () => {
    appServer = app
  })

  describe('Search movie', () => {
    it('Should return list of movies', done => {
      request(appServer)
      .get('/search')
      .query({
        title: 'Batman'
      })
      .expect(200)
      .end((err, res) => {
        if (err) throw err

        const { error, code, data } = res.body
        expect(error).to.false
        expect(code).to.equal(200)
        expect(data).to.be.an('Object')
        done()
      })
    })
  })

  describe('Get detail of a movie', () => {
    it('Should return detail information of a movie', done => {
      request(appServer)
      .get('/detail')
      .query({
        title: 'Batman'
      })
      .expect(200)
      .end((err, res) => {
        if (err) throw err

        const { error, code, data } = res.body
        expect(error).to.false
        expect(code).to.equal(200)
        expect(data).to.be.an('Object')
        expect(data).haveOwnProperty('Title')
        expect(data).haveOwnProperty('imdbID')
        done()
      })
    })
  })
})