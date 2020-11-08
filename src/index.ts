import { handleRequest, purgeCacheAll } from "./proxy";
import { Config } from "./types";

const getConfig = (): Config => {
    const lastBuildDate = process.env.BUILD_DATE;
    if (!lastBuildDate) {
        throw new Error("BUILD_DATE must be required.");
    }
    const accessToken = process.env.GITHUB_TOKEN;
    if (!accessToken) {
        throw new Error("GITHUB_TOKEN must be required.");
    }

    return {
        site: {
            title: "English Notes",
            description: "GitHub英語のメモ",
            author: "Azu",
            lastBuildDate,
            siteURL: "https://github.com/azu",
            repositoryURL: "https://github.com/azu/english-notes",
            faviconURL: "https://raw.githubusercontent.com/azu/english-notes/main/assets/favicon.ico",
            iconURL: "https://github.com/azu.png",
            gitHubURL: "https://github.com/azu",
            twitterURL: "https://twitter.com/azu_re"
        },
        github: {
            accessToken,
            repository: "azu/english-notes",
            author: "azu"
        }
    };
};

const getResponse = async (request: Request): Promise<Response> => {
    try {
        const config = getConfig();
        const canPurge =
            new URL(request.url).pathname === "/_prune_cache" &&
            request.headers.get("github_token") === config.github.accessToken;
        if (canPurge) {
            return purgeCacheAll()
                .then(() => {
                    return new Response("ok", {
                        status: 200,
                        headers: { "content-type": "text/html" }
                    });
                })
                .catch((error) => {
                    console.error(error.message);
                    return new Response("fail", {
                        status: 500,
                        headers: { "content-type": "text/html" }
                    });
                });
        }
        return handleRequest(request.url, config);
    } catch (e) {
        return new Response(e.message, {
            status: 500,
            headers: { "content-type": "text/html" }
        });
    }
};

addEventListener("fetch", (event: FetchEvent) => event.respondWith(getResponse(event.request)));
