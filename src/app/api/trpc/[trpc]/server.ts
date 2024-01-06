import mercury, { DB } from "@mercury-js/core";
import trpcServer from "@mercury-js/core/packages/trpcServer";
import "../../graphql/models";
import "../../graphql/profiles";
import "../../graphql/hooks";
mercury.connect(process.env.DB_URL || "mongodb://localhost:27017/mercury");

mercury.addGraphqlSchema(
    `
    type Query {
      hello(name:String!): String
    }
  `,
    {
        Query: {
            hello: (root: any, args: any, ctx: any, resolveInfo: any) => {
                return "Hello World";
            },
        },
    }
);

mercury.package([trpcServer()]);
export default mercury.trpc.appRouter;
