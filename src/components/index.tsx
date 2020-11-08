import React from "react";
import Layout from "./layout";
import About from "./about";
import Entries from "./entries";
import { Issue, Site } from "../types";

type Props = {
    issues: Issue[];
    site: Site;
};

const Index = ({ issues, site }: Props) => {
    return (
        <Layout site={site}>
            <section>
                <h2 className={"Index-Title"}>Latest</h2>
                <Entries issues={issues} />
            </section>
            <section>
                <h2>About</h2>
                <About iconURL={site.iconURL} gitHubURL={site.gitHubURL} twitterURL={site.twitterURL} />
            </section>
        </Layout>
    );
};

export default Index;
