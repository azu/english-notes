import React from "react";

type Props = {
    title: string;
    repositoryURL: string;
};

const Header = ({ title, repositoryURL }: Props) => {
    return (
        <div className="header">
            <h1 className={"header-title"}>
                <a href="/" title={title}>
                    {title}
                </a>
            </h1>
            <nav className="navbar" role="navigation">
                <div className="navbar-menu">
                    <a href={`${repositoryURL}/search?type=issues`}>Search</a>
                    <a href="/archive">Archive</a>
                    <a href="/feed.xml">Feed</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
