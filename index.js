const {ApolloServer, gql} = require('apollo-server');
const SessionAPI = require('./dataSources/sessions');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
    SessionAPI: new SessionAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server
    .listen({port: process.env.port || 4000})
    .then( ({url}) => {
    console.log(`graphQl running at ${url}`);
});