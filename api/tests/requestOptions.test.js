import Posts from '../RequestOptions'
import assert from 'assert'

describe.skip('Comparative analysis', () => {
  it('should succeed with native request', async () => {
    const data = await Posts.getPostsRequest('/api/v2/pokemon/pikachu')
    assert.strictEqual(data.statusCode, 200)
    console.log(data.req.host)
  })
  it('should succeed with native request', async () => {
    const data = JSON.parse(
      await Posts.getPostsRequestv2('/api/v2/pokemon/pikachu')
    )
    // assert.strictEqual(data.status, 200)
    console.log(data.base_experience)
  })
  it('should succeed with supertest', async () => {
    const data = await Posts.getPostsSupertest('/pokemon/pikachu')
    assert.strictEqual(data.statusCode, 200)
    console.log(data.body)
  })
  it('should succeed with superagent', async () => {
    const data = await Posts.getPostsSuperagent('/pokemon/pikachu')
    assert.strictEqual(data.status, 200)
    console.log(data.body.base_experience)
  })
  it('should succeed with axios', async () => {
    const data = await Posts.getPostsAxios('/pokemon/pikachu')
    assert.strictEqual(data.status, 200)
    console.log(data.data.base_experience)
  })
})
