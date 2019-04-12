import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './prisma';
import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    req,
    prisma
  })
});

server.start({port: 5000},() => console.log(`GraphQL server is running on http://localhost:5000`))
