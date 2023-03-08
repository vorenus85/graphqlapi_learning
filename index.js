const {ApolloServer, gql} = require('apollo-server');
const SessionAPI = require('./dataSources/sessions');
const SpeakerAPI = require('./dataSources/speakers');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
    sessionAPI: new SessionAPI(),
    speakerAPI: new SpeakerAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server
    .listen({port: process.env.port || 4000})
    .then( ({url}) => {
    console.log(`graphQl running at ${url}`);
});