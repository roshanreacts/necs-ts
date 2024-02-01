import mercury from "@mercury-js/core";
import platform from "@mercury-js/core/packages/platform"
import redisCache from "@mercury-js/core/packages/redisCache";


mercury.package([redisCache(),platform()]);

export { User } from "./User.model";
export { Account } from "./Account.model";
