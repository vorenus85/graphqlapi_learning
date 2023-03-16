const {gql} = require('apollo-server');

module.exports = gql`
type Query {
    sessions(
        id: ID,
        title: String,
        description: String,
        startsAt: String,
        endsAt: String,
        room: Room,
        day: String,
        format: String,
        track: String,
        level: String
        ): [Session],
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakersById(id: ID): Speaker
}
type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
}
type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
}
input SessionInput {
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: "just deprecated"),
    level: String
    favorite: Boolean
}
# the convention for enum is use all capital letters!
enum Room {
    EUROPA
    SOL
    SATURN
}
type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: "just deprecated"),
    level: String
    favorite: Boolean
    speakers: [Speaker]
}`