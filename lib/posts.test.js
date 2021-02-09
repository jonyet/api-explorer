import Posts from './Posts'
import assert from 'assert'

describe.skip('Comparative analysis', () => {
  it('should succeed with native request', async () => {
    // const data = await Posts.getPosts('/posts')
    // assert.strictEqual(data.statusCode, 200)
    // console.log(data)
  })
  it('should succeed with supertest', async () => {
    const data = await Posts.getPostsv2('/posts')
    assert.strictEqual(data.statusCode, 200)
    console.log(data)
  })
})
