import React from "react";

type Props = {
    twitterURL: string;
    gitHubURL: string;
    iconURL: string;
};

const About = ({ iconURL, gitHubURL, twitterURL }: Props) => {
    return (
        <div className="about">
            <div className="profile">
                <img src={`${iconURL}`} width="105px" height="105px" alt="icon" />
                <aside>
                    <p>@azu</p>
                    <ul>
                        <li>
                            <a href={twitterURL}>Twitter</a>
                        </li>
                        <li>
                            <a href={gitHubURL}>GitHub</a>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default About;
