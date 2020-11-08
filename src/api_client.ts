import { graphql } from "@octokit/graphql";
import { GitHub, Issue, IssueNode, IssuesResponse, IssueResponse, PageInfo } from "./types";

const ISSUES_QUERY = `
  query issues($q: String!, $cursor: String) { 
    search(
      type: ISSUE,
      query: $q,
      first: 100,
      after: $cursor
    ) {
      edges {
        node {
          ... on Issue {
            number,
            title,
            bodyHTML,
            bodyText,
            labels(first:5) {
              nodes { name }
            },
            url,
            createdAt
            comments(first: 1){
              totalCount
            }
          }
        }
      },
      pageInfo {
        endCursor,
        hasNextPage
      }
    }
  }
`;

/**
 * https://developer.github.com/v4/explorer/
 * @example
 * {
 *  "owner": "azu",
 *  "repo": "english-notes",
 *  "id": 1
 * }
 */
const ISSUE_QUERY = `
query issue($owner: String!, $repo: String!, $id: Int!) {
  repository(owner: $owner, name: $repo) {
    issue(number: $id) {
      number
      title
      bodyHTML
      bodyText
      labels(first: 5) {
        nodes {
          name
        }
      }
      url
      createdAt,
      comments(first: 1){
        totalCount
      }
    }
  }
}
`;

const getIssues = async (github: GitHub): Promise<Issue[]> => {
    const issues = [];
    const page: PageInfo = { endCursor: null, hasNextPage: true };

    let q = `repo:${github.repository} author:${github.author} state:open`;
    if (github.label) {
        q += ` label:"${github.label}"`;
    }

    while (page.hasNextPage) {
        const {
            search: { edges, pageInfo }
        }: IssuesResponse = await graphql(ISSUES_QUERY, {
            q,
            cursor: page.endCursor,
            headers: { authorization: `token ${github.accessToken}` }
        });
        for (const { node } of edges) {
            const issue = nodeToIssue(node);
            issues.push(issue);
        }
        page.endCursor = pageInfo.endCursor;
        page.hasNextPage = pageInfo.hasNextPage;
    }

    // sort title desc
    return issues.sort((a, b) => (a.title > b.title ? -1 : 1));
};

const getIssue = async (issueId: number, github: GitHub): Promise<Issue | null> => {
    const [owner, repo] = github.repository.split("/");
    const issue: IssueResponse = await graphql(ISSUE_QUERY, {
        owner: owner,
        repo: repo,
        id: issueId,
        headers: { authorization: `token ${github.accessToken}` }
    });
    return issue.repository.issue ? nodeToIssue(issue.repository.issue) : null;
};

const nodeToIssue = (node: IssueNode): Issue => {
    const pubDate = new Date(node.createdAt).toUTCString();
    return {
        id: node.number,
        title: node.title,
        bodyHTML: node.bodyHTML,
        bodyText: node.bodyText,
        labels: node.labels.nodes.map((n) => n.name),
        url: node.url,
        pubDate,
        commentsTotalCount: node.comments.totalCount
    };
};

export { getIssues, getIssue };
