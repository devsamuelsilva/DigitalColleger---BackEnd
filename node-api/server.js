// CommonJs
const fastify = require('fastify')({
  logger: false
})
const port = 5005

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send('servidor rodandoooooooooo.')
})

fastify.get('/produtos', (request, reply) => {
    reply.send('servidor Mostrando produtos.')
  })

// Run the server!
fastify.listen({ port: port }, (err, address) => {
  if (err) throw err
  console.log(`'Server is now listening on ${address}'`);
})