import Posts from './Pokemon'

let path

describe('GET /pokemon', () => {
  beforeEach(async () => {
    path = 'pokemon'
  })
  afterEach(async () => {
    //cleanup
  })
  it('should succeed+', async () => {
    const pokemon = await Posts.getPokemans(path)
    expect(pokemon.statusCode).toBe(200)
    expect(typeof pokemon.body).toBe('object')
  })
  it('should limit unspecified requests to 20', async () => {
    //https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
    const pokemon = await Posts.getPokemans(path)
    expect(pokemon.body.results.length).toBe(20)
  })
  it('should allow requests to be > 20', async () => {
    //https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
    path = `pokemon?offset=20&limit=80`
    const pokemon = await Posts.getPokemans(path)
    expect(pokemon.body.results.length).toBe(80)
  })
  it('should use the offset to remove the first x number of results', async () => {
    //https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
    path = `pokemon?offset=40&limit=80`
    const pokemon = await Posts.getPokemans(path)
    expect(pokemon.body.results.length).toBe(80)
  })
  it('should use the offset to remove the first x number of results', async () => {
    //https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
    path = `pokemon?offset=40&limit=40` //rewrite this to validate that 40/40 does gives us pokemon 41-80, not 0-40
    const pokemon = await Posts.getPokemans(path)
    expect(pokemon.body.results.length).toBe(40)
  })
  it('should accept a limit as an integer', async () => {
    //https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
    const pokemon = await Posts.getPokemans(path, '40')
    console.log(pokemon.body.results)
    expect(pokemon.body.results.length).toBe(40)
  })
})

describe('GET /pokemon/ditto', () => {})
