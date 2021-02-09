import supertest from 'supertest'
import { get } from 'https'
import axios from 'axios'
import superagent from 'superagent'

const options = {
  hostname: 'pokeapi.co',
  port: 443,
}
const host2 = 'https://pokeapi.co/api/v2'

class Posts {
  static async getPostsRequest(path) {
    options.path = path
    return new Promise((resolve, reject) => {
      const req = get(options)

      req
        .on('response', (res) => {
          resolve(res)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  static async getPostsRequestv2(path) {
    options.path = path

    const req = await new Promise((resolve) => {
      get(options, resolve)
    })

    return new Promise((resolve, reject) => {
      let data = ''
      req.on('data', (chunk) => (data += chunk))
      req.on('error', (err) => reject(err))
      req.on('end', () => resolve(data))
    })
  }

  static async getPostsSupertest(path) {
    const res = await supertest(host2).get(path)
    return res
  }

  static async getPostsSuperagent(path) {
    const res = await superagent.get(host2 + path)
    return res
  }

  static async getPostsAxios(path) {
    const res = await axios.get(host2 + path)
    return res
  }
}

export default Posts
