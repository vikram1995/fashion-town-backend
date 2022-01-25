import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import dbConnect from './src/database';

import resolvers from './src/resolvers/index';
import typeDefs from './src/schema/index';

const { PORT = 5002 } = process.env;

async function initServer() {
    try {
        await dbConnect();
    } catch (error) {
        console.log(error);
    }

    const server = new ApolloServer({
        schema: buildFederatedSchema([{ typeDefs, resolvers }]),
    });

    //Start server
    server.listen({ port: PORT }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
}
initServer();
