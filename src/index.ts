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
        const config = getConfig();
        // version
        const versionURL = `${config.site.siteURL}/_increment_version`;
        const versionResponse = await caches.default.match(versionURL);
        let version = Number(versionResponse ? await versionResponse?.text() : "0");
        if (request.url === versionURL && request.headers.get("github_token") === config.github.accessToken) {
            version += 1;
            const versionUpResponse = new Response(String(version), {
                status: 200,
                headers: { "content-type": "text/plain" }
            });
            await caches.default.put(versionURL, versionUpResponse.clone());
            return versionUpResponse;
        }
        return handleRequest(request.url, config, version);
    } catch (e) {
        return new Response(e.message, {
            status: 500,
            headers: { "content-type": "text/html" }
        });
    }
};

addEventListener("fetch", (event: FetchEvent) => event.respondWith(getResponse(event.request)));
