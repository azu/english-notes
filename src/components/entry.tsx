import React from "react";
import { Issue } from "../types";

type Props = {
    issue: Issue;
};

const Entry = ({ issue }: Props) => {
    const html = { __html: issue.bodyHTML };
    return (
        <div className="entry">
            <div className="entry-title">
                <h1>
                    <a href={`/entry/${issue.id}`}>{issue.title}</a>
                </h1>
            </div>
            <article className="entry-content markdown-body" dangerouslySetInnerHTML={html} />
            <footer className="entry-footer">
                <a href={issue.url}>Comment({issue.commentsTotalCount})</a>
            </footer>
        </div>
    );
};

export default Entry;
