import express, { request, response } from 'express';

const server = express()

server.get('/', (request, response) =>{
    return response.json({ message: 'Hello world!'})
})

server.listen(3333, () => {
    console.log('Server running on 3333')
})