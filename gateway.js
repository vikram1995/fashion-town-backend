import { ApolloServer, gql } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const { PORT = 4000 } = process.env;


(async () => {
    // Initialize an ApolloGateway instance and pass it an array of services
    // user and wallets api
    const gateway = new ApolloGateway({
      serviceList: [
        { name: 'products', url: 'http://localhost:5001' }
      ],
    });
  
    // Pass the ApolloGateway to the ApolloServer constructor
    const server = new ApolloServer({
      gateway,
      // Disable subscriptions (not currently supported with ApolloGateway)
      subscriptions: false,
    });
  
    server.listen({ port: PORT}).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })();