import supertest from 'supertest'
import { get } from 'https'

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
}
const host2 = 'https://jsonplaceholder.typicode.com'

class Posts {
  static async getPosts(path) {
    const res = await supertest(host2).get(path)
    return res
  }
}

export default Posts
