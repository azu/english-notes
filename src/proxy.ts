import { handleRequest as handleOriginRequest } from "./router";
import { Config } from "./types";

const purgeCacheAll = async () => {
    const currentCaches = caches.default;
    console.log("Try to Purge");
    const keys = await currentCaches.keys();
    console.log("keys count:", keys.length);
    return Promise.all(
        keys.map((key) => {
            return currentCaches.delete(key);
        })
    );
};
/**
 * Use Cloudflare Workers Cache API
 */
const handleRequest = async (uri: string, config: Config): Promise<Response> => {
    const currentCaches = caches.default;
    const cacheKey = uri;
    const cache = await currentCaches.match(cacheKey);
    if (cache) {
        return cache; // use cache
    }
    try {
        const response = await handleOriginRequest(uri, config);
        // put cache if contents exists
        if (response.status === 200) {
            const actualResponse = new Response(response.response, {
                status: response.status,
                headers: { "content-type": response.contentType }
            });
            // Avoid Error: "Body has already been used. It can only be used once. Use tee() first if you need to read it twice."
            await caches.default.put(cacheKey, actualResponse.clone());
            return actualResponse;
        }
        return new Response(response.response, {
            status: response.status,
            headers: { "content-type": response.contentType }
        });
    } catch (error) {
        return new Response(error.message, {
            status: 500,
            headers: { "content-type": "text/html" }
        });
    }
};

export { handleRequest, purgeCacheAll };
