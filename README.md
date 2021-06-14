# api-explorer 

this project exists as a demonstration of how api tests can be conducted using many different options to explore for data fetching:

- *supertest: module designed on top of the `supertest` package. this includes it's own built in methods for asserting/testing apis, but i prefer to use it for communication and stick to my familiar test frameworks (in this project, jest)
- superagent: in so we can see what differences we get between supertest and it's underlying dependency. while it's almost exactly the same, it doesn't have as many easy ways of breaking up your requests to be more testable
- axios: included because if you're working on a team that's already built an api layer in their front end, you can see that it's easy to just re-use (and also evaluate/test) their code for your own purposes
- http.request: much more verbose, but included to show a solution free of any external dependencies. no matter how many times i consider this, it's more code that i feel like writing when supertest is so good already.

**Prerequisites**

node (last tested on v12)

**Get started**

install the latest stable version of node (suggest via nvm [https://github.com/creationix/nvm/blob/master/README.markdown])

clone this project and install your dependencies

```
npm install
```

run tests

```
npm run jest
```

explore!