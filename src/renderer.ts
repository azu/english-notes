import React from "react";
import ReactDOMServer from "react-dom/server";
import { getIssues, getIssue } from "./api_client";
import { getFeed } from "./feed";
import { getMarkdownStyles, getStyles } from "./styles";
import Index from "./components/index";
import Archive from "./components/archive";
import Show from "./components/show";
import { NotFoundError } from "./errors";
import { Config, Site } from "./types";
import escapeHtml from "escape-html";

const renderIndex = async (config: Config): Promise<string> => {
    const issues = await getIssues(config.github);
    const content = ReactDOMServer.renderToString(
        React.createElement(Index, { issues: issues.slice(0, 5), site: config.site })
    );
    return toHTML({ site: config.site, content: content });
};

const renderArchive = async (config: Config): Promise<string> => {
    const issues = await getIssues(config.github);
    const content = ReactDOMServer.renderToString(React.createElement(Archive, { issues, site: config.site }));
    return toHTML({
        site: config.site,
        contentTitle: "Archives",
        content: content
    });
};

const renderShow = async (issueId: number, config: Config): Promise<string> => {
    const issue = await getIssue(issueId, config.github);
    if (issue === null) {
        throw new NotFoundError();
    }
    const content = ReactDOMServer.renderToString(React.createElement(Show, { issue, site: config.site }));
    return toHTML({
        site: config.site,
        content: content,
        contentTitle: issue.title,
        contentDescription: issue.bodyText,
        additionalHead: `<style>${getMarkdownStyles()}</style>`
    });
};

const renderFeed = async (config: Config): Promise<string> => {
    const issues = await getIssues(config.github);
    const xml = getFeed(issues.slice(0, 20), config.site);
    return xml;
};

const renderRobots = (): string => {
    return ``;
};

const renderNotFound = (config: Config): string => {
    return toHTML({ site: config.site, content: "not found" });
};

interface ToHTMLParams {
    site: Site;
    content: string;
    contentTitle?: string;
    contentDescription?: string;
    additionalHead?: string;
}

const toHTML = ({ site, content, contentTitle, contentDescription, additionalHead }: ToHTMLParams): string => {
    const styles = getStyles();
    const html = `<!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content="${escapeHtml(
          contentDescription ? contentDescription.slice(0, 300) : site.description
      )}">
      <title>${contentTitle ? `${contentTitle} - ${site.title}` : site.title}</title>
      <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
      <link rel="icon" href="${site.faviconURL}" />
      <style>${styles}</style>
      ${additionalHead || ""}
    </head>
    <body>${content}</body>
  </html>`;
    return html;
};

export { renderIndex, renderArchive, renderShow, renderFeed, renderRobots, renderNotFound };
