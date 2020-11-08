export interface Site {
    title: string;
    description: string;
    author: string;
    lastBuildDate: string;
    siteURL: string;
    repositoryURL: string;
    faviconURL: string;
    iconURL: string;
    gitHubURL: string;
    twitterURL: string;
}

export interface GitHub {
    accessToken: string;
    repository: string;
    author: string;
    label?: string /* if you want filtering by label */;
}

export interface Config {
    site: Site;
    github: GitHub;
}

export interface Issue {
    id: number;
    title: string;
    bodyHTML: string;
    bodyText: string;
    labels: string[];
    url: string;
    pubDate: string;
}

interface LabelNode {
    name: string;
}

export interface IssueNode {
    // issue id
    number: number;
    title: string;
    bodyHTML: string;
    bodyText: string;
    labels: { nodes: LabelNode[] };
    url: string;
    createdAt: string;
}

interface Edge {
    node: IssueNode;
}

export interface PageInfo {
    endCursor: string | null;
    hasNextPage: boolean;
}

export interface IssuesResponse {
    search: {
        edges: Edge[];
        pageInfo: PageInfo;
    };
}

export interface IssueResponse {
    repository: {
        issue: IssueNode;
    };
}

export type Response = { contentType: string; response: string; status: number };
