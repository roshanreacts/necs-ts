import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../zodtots";


export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:3000/api/trpc",
        }),
    ],
});

