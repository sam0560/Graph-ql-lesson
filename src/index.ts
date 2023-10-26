import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// TypeDef importing
import { typeDefs } from './schema';
// server setup
const server = new ApolloServer({
    // typeDef
    typeDefs,
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', 4000);
