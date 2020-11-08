import React from "react";
import Layout from "./layout";
import Entry from "./entry";
import { Issue, Site } from "../types";
import About from "./about";

type Props = {
    issue: Issue;
    site: Site;
};

const Show = ({ issue, site }: Props) => {
    return (
        <Layout site={site}>
            <section>
                <Entry issue={issue} />
            </section>
            <section>
                <h2>About</h2>
                <About iconURL={site.iconURL} gitHubURL={site.gitHubURL} twitterURL={site.twitterURL} />
            </section>
        </Layout>
    );
};

export default Show;
