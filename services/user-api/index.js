import { ApolloServer} from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';


import resolvers from './resolvers';
import typeDefs from './schema'; 

const { PORT = 5001 } = process.env;

const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }])
  });
  
  //Start server
  server.listen({port: PORT}).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
  });