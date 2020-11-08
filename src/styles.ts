const styles = `
  /* Common */
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #4a4a4a;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
  }
  h1, h2, h3, h4, ul, p {
    margin: 0;
    padding: 0;
  }
  a {
    color: #3273dc;
    text-decoration: none;
  }
  a:hover {
    color: #363636;
  }
  /* Layout */
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  }
  /* Header */
  .header {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .header-title {
    flex: 1;
    font-size: 1.5em;
    padding-left: 20px;
    font-family: 'Frank Ruhl Libre',serif;
  }
  .header-title > a {
    color: #4a4a4a;
    text-decoration: none;
  }
  .navbar {
    display: flex;
    align-items: stretch;
    flex-grow: 1;
    max-width: 936px;
    min-height: 3.25rem;
    margin: 0 auto;
  }
  .navbar-menu {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 20px;
  }
  .navbar-menu > a {
    display: flex;
    align-items: center;
    padding: .5rem .75rem;
    color: #4a4a4a;
  }
  .navbar-menu > a:hover {
    background-color: #fafafa;
    color: #3273dc;
  }
  /* Index */
  .Index-Title {
    text-align: center;
  }
  
  /* About */
  .profile {
    display: flex;
    padding: .5rem 0;
  }
  .profile img {
    width: 105px;
    height: 105px;
  }
  .profile aside {
    padding: 0 4rem;
  }
  .profile aside ul {
    display: flex;
    margin-top: .5em;
    list-style: none;
  }
  .profile aside ul li {
    margin-right: 1.5rem;
  }
  /* Footer */
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3.25rem;
    margin-top: auto;
  }
  /* Section */
  section {
    display: block;
    width: auto;
    width: 936px;
    margin: 0 auto 1.5rem;
    padding: 1rem 0;
  }
  section > h2 {
    margin-bottom: 30px;
    font-family: "Helvetica Neue",
    "Segoe UI",
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
    font-size: 1.6em;
    font-weight: 600;
  }
  /* Entries */
  .entries-item {
    margin-bottom: 25px;
  }
  .entries-item h3 {
    margin-bottom: .8em;
  }
  .entries-item h3::before {
    content: "📝";
    padding-right: 0.5em;
  }
  .entries-item h3 a {
    color: #4a4a4a;
  }
  .entries-item h3 a:hover {
    color: #3273dc;
  }
  .entries-item p {
    font-size: .9em;
  }
  /* Entry */
  .entry-title {
    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
  }
  .entry-title h1 {
    font-family: "Helvetica Neue",
    "Segoe UI",
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
    font-size: 2em;
    font-weight: 700;
  }
  .entry-title h1 a {
    color: #4a4a4a;
  }
  .entry-title h1 a:hover {
    color: #3273dc;
  }
  .entry-content h1 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .entry-content h2,
  .entry-content h3,
  .entry-content h4 {
    margin-top: 1.2em;
    margin-bottom: 0.5em;
  }
  .entry-content p {
    margin: 0 0 .7em;
    padding: .2em 0;
    line-height: 1.8em;
    font-size: 1.1em;
  }
  .entry-content pre {
    margin: 0 0 1.2em;
    padding: 1.2em;
    line-height: 1.3;
    overflow: auto;
    border: 1px solid #ddd;
    background-color: #0a263f;
    color: #fff;
    font-size: 0.9em;
    white-space: pre-wrap;
  }
  .entry-content p code,
  .entry-content ul code {
    padding: .2em .4em;
    border-radius: 6px;
    background-color: #f0f0f0;
  }
  .entry-content pre, .entry-content pre code {
    font-family: Consolas, monospace;
  }
  .entry-content > ul {
    margin: 1em 0 1em 2em;
    padding: 0;
  }
  .entry-content ul {
    margin-left: 2em;
  }
`;

const getStyles = (): string => styles;

export { getStyles };
