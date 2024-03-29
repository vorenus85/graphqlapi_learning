const Query = require('./resolvers/query');
const Session = require('./resolvers/Session');
const Mutation = require('./resolvers/Mutation');

module.exports = {
    Query,
    Session,
    Mutation,
    Room: {
        EUROPA: "Europa",
        SOL: "Sol",
        SATURN: "Saturn",
    },
    SessionOrError: {
        __resolveType(obj) {
            if(obj.code){
                return "Error";
            }
            return "Session"
        }
    }
}