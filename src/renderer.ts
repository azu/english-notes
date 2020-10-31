import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getIssues, getIssue } from './api_client';
import { getStyles } from './styles';
import Index from './components/index';
import Archive from './components/archive';
import Show from './components/show';
import { NotFoundError } from './errors';
import { Config, Site } from './types';

const renderIndex = async (config: Config): Promise<string> => {
  const issues = await getIssues(config.github);
  const content = ReactDOMServer.renderToString(
    React.createElement(Index, { issues: issues.slice(0, 5), site: config.site })
  );
  return toWholeHTML(config.site, content);
};

const renderArchive = async (config: Config): Promise<string> => {
  const issues = await getIssues(config.github);
  const content = ReactDOMServer.renderToString(
    React.createElement(Archive, { issues, site: config.site })
  );
  return toWholeHTML(config.site, content);
};

const renderShow = async (title: string, config: Config): Promise<string> => {
  const issue = await getIssue(title, config.github);
  if (issue === null) {
    throw new NotFoundError();
  }
  const content = ReactDOMServer.renderToString(
    React.createElement(Show, { issue, site: config.site })
  );
  return toWholeHTML(config.site, content);
};

const renderFeed = (config: Config): string => {
  return toWholeHTML(config.site, 'feed');
};

const renderNotFound = (config: Config): string => {
  return toWholeHTML(config.site, 'not found');
};

const toWholeHTML = (site: Site, content: string): string => {
  const styles = getStyles();
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>${site.title}</title>
      <link rel="alternate" type="application/atom+xml" href="/feed" />
      <link rel="icon" href="${site.faviconURL}" />
      <style>${styles}</style>
    </head>
    <body>${content}</body>
  </html>`;
  return html;
};

export {
  renderIndex,
  renderArchive,
  renderShow,
  renderFeed,
  renderNotFound
};
