import mercury, { DB } from "@mercury-js/core";

export const User = mercury.createModel(
  "User",
  {
    name: {
      type: "string",
    },
    account: {
      type: "relationship",
      ref: "Account",
    },
    test: {
      type: "string",
      required: true,
    },
    // testv: {
    //   type: "virtual",
    //   ref: "Account",
    //   localField: "account",
    //   foreignField: "_id",
    //   many: false,
    // },
    accPass: {
      type: "string",
    },
    // roleType: {
    //   type: "enum",
    //   enum: ["admin", "user"],
    //   enumType: "string",
    // },
  },
  {
  historyTracking:true
  }
);

declare module "@mercury-js/core" {
  interface DB {
    User: {
      account: string;
      test: string;
      testv: string;
      roleType: string;
    };
  }
}
