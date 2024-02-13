import mercury from "@mercury-js/core";
import platform from "@mercury-js/core/packages/platform"
import redisCache from "@mercury-js/core/packages/redisCache";

// @ts-ignore
mercury.package([redisCache({ url: process.env.KV_URL }),platform()]);

export { User } from "./User.model";
export { Account } from "./Account.model";
