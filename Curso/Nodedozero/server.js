//Configurando o servidor do node

//import { createServer } from 'node:http'
//const server = createServer((request, response) => {
//        response.write('Estudar Viado!!!!')
//    return response.end()
//})
//server.listen(3333)

//Trabalhando com o fastify

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    database.create({
        title: 'Video 01',
        description: 'Esse e o video 01',
        duration: 180,
    })

    console.log(database.list())

    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'Hello Rocketseatt'
})

server.put('/videos/:id', () => {
    return 'Hello Node.js'
})

server.delete('/videos/:id', () => {
    return 'Hello Node.js'
})

server.listen({
    port:3333,
})