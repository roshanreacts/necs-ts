import { RedisClientType, createClient } from "redis";

function AfterHook(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (this: Redis, ...args: any[]) {
    console.log(`Before Method ${propertyKey} was called with args:`, args);
    await this.client.connect();

    const result = originalMethod.apply(this, args);
    if (result instanceof Promise) {
      return result.then(async (res: any) => {
        console.log(`After method ${propertyKey}`);
        await this.client.disconnect();
        return res;
      });
    } else {
      console.log(`After method ${propertyKey}`);
      await this.client.disconnect();
      return result;
    }
  };

  return descriptor;
}

class Redis {
  client: RedisClientType;
  constructor(client: RedisClientType) {
    this.client = client;
  }

  @AfterHook
  async set(key: string, value: string) {
    console.log("set", key, value);
    await this.client.set(key, value);
  }

  @AfterHook
  async get() {
    console.log("get");
    return await this.client.get("key");
  }
}

(async () => {
  const client = await createClient().on("error", (err) => {
    throw new Error(err);
  });

  const redis = new Redis(client as RedisClientType);
})();
