import mercury from "@mercury-js/core";
export const AccountSchema = {
  name: {
    type: "string",
  },
  user: {
    type: "relationship",
    ref: "User",
  },
};

export const Account = mercury.createModel("Account", AccountSchema, {});

declare module "@mercury-js/core" {
  interface DB {
    Account: { name: string; user: string };
  }
}
