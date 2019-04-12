export default {
  Query: {
    advocate: async (_, args, { prisma }, info) => {
      const { where: { advocateId } } = args;
      const result = await prisma.query.advocate(
        { where: { advocateId } },
        '{ advocateId insDateTime updateTime delFlag sysFlag salesAgentId ' +
         'companyName name email phone textEmail streetAddress1 streetAddress2 ' +
         'city state postalCode country overrides { overrideId insDateTime ' +
         'updateTime delFlag sysFlag advocateId teamLeader referral referralEmail ' +
         'textEmail salesOverride referralOverride managerOverride } }'
      );

      return result;
    },

    advocates: async (_, args, { prisma }, info) => {
      // const { where:{ delFlag } } = args;

      let conditions = {};

      if(args.where && args.where.delFlag) {
        const { delFlag } = args.where;
        conditions.where = { delFlag };
      } else {
        conditions = undefined;
      };

      const result = await prisma.query.advocates(
        conditions,
        '{ advocateId insDateTime updateTime delFlag sysFlag salesAgentId ' +
         'companyName name email phone textEmail streetAddress1 streetAddress2 ' +
         'city state postalCode country overrides { overrideId insDateTime ' +
         'updateTime delFlag sysFlag advocateId teamLeader referral referralEmail ' +
         'textEmail salesOverride referralOverride managerOverride } }'
      );
      
      return result;
    }

   },

   Mutation: {
     insertAdvocate: async (_, args, { prisma }, info) => {
       const { data } = args;

       const result = await prisma.mutation.createAdvocate(
         { data },
         '{ advocateId insDateTime updateTime delFlag sysFlag salesAgentId ' +
         'companyName name email phone textEmail streetAddress1 streetAddress2 ' +
         'city state postalCode country overrides { overrideId insDateTime ' +
         'updateTime delFlag sysFlag advocateId teamLeader referral referralEmail ' +
         'textEmail salesOverride referralOverride managerOverride } }'
       );
       
       return result;
     },

     updateAdvocate: async (_, args, { prisma }, info) => {
       const { where, data } = args;
       
       const result = await prisma.mutation.updateAdvocate(
         {
           where,
           data
        },
        '{ advocateId insDateTime updateTime delFlag sysFlag salesAgentId ' +
         'companyName name email phone textEmail streetAddress1 streetAddress2 ' +
         'city state postalCode country overrides { overrideId insDateTime ' +
         'updateTime delFlag sysFlag advocateId teamLeader referral referralEmail ' +
         'textEmail salesOverride referralOverride managerOverride } }'
       );

       return result;
     },

     deleteAdvocate: async (_, args, { prisma }, info) => {
       const result = await prisma.mutation.deleteAdvocate(
         { where: args.where },
         '{ advocateId }'
       );

       return result;
     }
   }
}