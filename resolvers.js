module.exports = {
    Query: {
        sessions: (parent, args, {dataSources}, info) =>{
            return dataSources.SessionAPI.getSessions(args);
        },
        sessionById: (parent, {id}, {dataSources}, info) =>{
            return dataSources.SessionAPI.getSessionById(id);
        },
        speakers: (parent, args, {dataSources}, info)=>{
            return dataSources.speakersAPI.getSpeakers();
        },
        speakersById: (parent, {id}, {dataSources}, info)=>{
            return dataSources.speakersAPI.getSpeakersById(id);
        }

    }
}