import request from 'supertest'

const app = 'https://pokeapi.co/api/v2/'
class Posts {
  static async getPokemans(path, limit) {
    !limit ? null : (path = `${path}/?offset=20&limit=${limit}`)
    return await request(app).get(path)
  }
}

export default Posts
