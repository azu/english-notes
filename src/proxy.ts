import { handleRequest as handleOriginRequest } from "./router";
import { Config } from "./types";

/**
 * Use Cloudflare Workers Cache API
 */
const handleRequest = async (uri: string, config: Config): Promise<Response> => {
    console.log("has cache", caches.has(config.site.lastBuildDate));
    const currentCaches = await caches.open(config.site.lastBuildDate);
    console.log("currentCaches", currentCaches);
    const cacheKey = uri;
    const cache = await currentCaches.match(cacheKey);
    if (cache) {
        console.log("Cache Hit!", cacheKey);
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
            await currentCaches.put(cacheKey, actualResponse.clone());
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

export { handleRequest };
