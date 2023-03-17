const {ApolloServer, gql, ApolloError} = require('apollo-server');
const SessionAPI = require('./dataSources/sessions');
const SpeakerAPI = require('./dataSources/speakers');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
    sessionAPI: new SessionAPI(),
    speakerAPI: new SpeakerAPI()
});

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources,
    debug: false,
    formatError: (err) =>{
        if(err.extensions.code == 'INTERNAL_SERVER_ERROR'){
            return new ApolloError("Wea are having some trouble", "ERROR", {token: "uniqueToken"})
        }
        return err;
    }
});

server
    .listen({port: process.env.port || 4000})
    .then( ({url}) => {
    console.log(`graphQl running at ${url}`);
});