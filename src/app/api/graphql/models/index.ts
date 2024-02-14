import mercury from "@mercury-js/core";
import platform from "@mercury-js/core/packages/platform"
import redisCache from "@mercury-js/core/packages/redisCache";

// @ts-ignore
mercury.package([redisCache({client: { url: process.env.KV_URL,socket:{tls:true}} }),platform()]);

export { User } from "./User.model";
export { Account } from "./Account.model";
