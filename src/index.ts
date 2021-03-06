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
    const siteURL = process.env.SITE_URL || "https://english-notes.jser.workers.dev";
    return {
        site: {
            title: "English Notes",
            description: "GitHub英語のメモ",
            author: "Azu",
            lastBuildDate,
            siteURL: siteURL,
            repositoryURL: "https://github.com/azu/english-notes",
            faviconURL: "https://raw.githubusercontent.com/azu/english-notes/main/assets/favicon.ico",
            iconURL: "https://avatars1.githubusercontent.com/u/19714?v=4",
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
