const { Prisma } = require("prisma-binding");
 
export const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://us1.prisma.sh/arvilsonm/prisma-sql/dev',
});