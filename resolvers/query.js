module.exports = {
    sessions: (parent, args, {dataSources}, info) =>{
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, {id}, {dataSources}, info) =>{
        
        try {
            return dataSources.sessionAPI.getSessionById(id);
        } catch(error) {
            return {code: 'ERROR', message: 'An error occured', token: "asdasfr23423423"}
        }
    },
    speakers: (parent, args, {dataSources}, info)=>{
        return dataSources.speakerAPI.getSpeakers();
    },
    speakersById: (parent, {id}, {dataSources}, info)=>{
        return dataSources.speakerAPI.getSpeakersById(id);
    }
}