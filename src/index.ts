import { handleRequest } from "./proxy";
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
            author: "azu",
            label: "public"
        }
    };
};

const getResponse = async (request: Request): Promise<Response> => {
    try {
        if (new URL(request.url).pathname.startsWith("/assets")) {
            return fetch(request.url);
        }
        const config = getConfig();
        return handleRequest(request.url, config);
    } catch (e) {
        return new Response(e.message, {
            status: 500,
            headers: { "content-type": "text/html" }
        });
    }
};

addEventListener("fetch", (event: FetchEvent) => event.respondWith(getResponse(event.request)));
