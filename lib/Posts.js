import supertest from 'supertest'
import { get } from 'https'

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
}
const host2 = 'https://jsonplaceholder.typicode.com'

class Posts {
  static getPosts(path) {
    options.path = path
    const chunks = []
    get(options, (res) => {
      res.on('data', (chunk) => {
        chunks.push(chunk)
        console.log(chunk)
      })
    })
      .on('error', (error) => {
        console.error(error)
      })
      .on('end', () => {
        console.log(Buffer.concat(chunks).toString())
        console.log('end')
      })
      .end()
  }

  static async getPostsv2(path) {
    const res = await supertest(host2).get(path)
    return res
  }
}

export default Posts
