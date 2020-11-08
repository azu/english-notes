const styles = `
/* Common */
:root {
    --nc-font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --nc-font-mono: Consolas, monaco, 'Ubuntu Mono', 'Liberation Mono', 'Courier New', Courier, monospace;

    /* Light theme */
    --nc-tx-1: #000000;
    --nc-tx-2: #1A1A1A;
    --nc-bg-1: #FFFFFF;
    --nc-bg-2: #F6F8FA;
    --nc-bg-3: #E5E7EB;
    --nc-lk-1: #0070F3;
    --nc-lk-2: #0366D6;
    --nc-lk-tx: #FFFFFF;
    --nc-ac-1: #79FFE1;
    --nc-ac-tx: #0C4047;

    /* Dark theme */
    --nc-d-tx-1: #ffffff;
    --nc-d-tx-2: #eeeeee;
    --nc-d-bg-1: #000000;
    --nc-d-bg-2: #111111;
    --nc-d-bg-3: #222222;
    --nc-d-lk-1: #3291FF;
    --nc-d-lk-2: #0070F3;
    --nc-d-lk-tx: #FFFFFF;
    --nc-d-ac-1: #7928CA;
    --nc-d-ac-tx: #FFFFFF;
}

* {
    /* Reset margins and padding */
    margin: 0;
    padding: 0;
}

address,
area,
article,
aside,
audio,
blockquote,
datalist,
details,
dl,
fieldset,
figure,
form,
input,
iframe,
img,
meter,
nav,
ol,
optgroup,
option,
output,
p,
pre,
progress,
ruby,
section,
table,
textarea,
ul,
video {
    /* Margins for most elements */
    margin-bottom: 1rem;
}

html, input, select, button {
    /* Set body font family and some finicky elements */
    font-family: var(--nc-font-sans);
}

body {
    /* Center body in page */
    margin: 0 auto;
    max-width: 750px;
    padding: 2rem;
    border-radius: 6px;
    overflow-x: hidden;
    word-break: break-word;
    overflow-wrap: break-word;
    background: var(--nc-bg-1);

    /* Main body text */
    color: var(--nc-tx-2);
    font-size: 1.03rem;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
    color: var(--nc-tx-1);
    padding-top: .875rem;
}

h1,
h2,
h3 {
    color: var(--nc-tx-1);
    padding-bottom: 2px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--nc-bg-2);
}

h4,
h5,
h6 {
    margin-bottom: .3rem;
}

h1 {
    font-size: 2.25rem;
}

h2 {
    font-size: 1.85rem;
}

h3 {
    font-size: 1.55rem;
}

h4 {
    font-size: 1.25rem;
}

h5 {
    font-size: 1rem;
}

h6 {
    font-size: .875rem;
}

a {
    color: var(--nc-lk-1);
}

a:hover {
    color: var(--nc-lk-2);
}

abbr:hover {
    /* Set the '?' cursor while hovering an abbreviation */
    cursor: help;
}

blockquote {
    padding: 1.5rem;
    background: var(--nc-bg-2);
    border-left: 5px solid var(--nc-bg-3);
}

abbr {
    cursor: help;
}

blockquote *:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
}

header {
    background: var(--nc-bg-2);
    border-bottom: 1px solid var(--nc-bg-3);
    padding: 2rem 1.5rem;

    /* This sets the right and left margins to cancel out the body's margins. It's width is still the same, but the background stretches across the page's width. */

    margin: -2rem calc(0px - (50vw - 50%)) 2rem;

    /* Shorthand for:

    margin-top: -2rem;
    margin-bottom: 2rem;

    margin-left: calc(0px - (50vw - 50%));
    margin-right: calc(0px - (50vw - 50%)); */

    padding-left: calc(50vw - 50%);
    padding-right: calc(50vw - 50%);
}

header h1,
header h2,
header h3 {
    padding-bottom: 0;
    border-bottom: 0;
}

header > *:first-child {
    margin-top: 0;
    padding-top: 0;
}

header > *:last-child {
    margin-bottom: 0;
}

a button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
    font-size: 1rem;
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    background: var(--nc-lk-1);
    color: var(--nc-lk-tx);
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    color: var(--nc-lk-tx);
}

a button[disabled],
button[disabled],
input[type="submit"][disabled],
input[type="reset"][disabled],
input[type="button"][disabled] {
    cursor: default;
    opacity: .5;

    /* Set the [X] cursor while hovering a disabled link */
    cursor: not-allowed;
}

.button:focus,
.button:enabled:hover,
button:focus,
button:enabled:hover,
input[type="submit"]:focus,
input[type="submit"]:enabled:hover,
input[type="reset"]:focus,
input[type="reset"]:enabled:hover,
input[type="button"]:focus,
input[type="button"]:enabled:hover {
    background: var(--nc-lk-2);
}

code,
pre,
kbd,
samp {
    /* Set the font family for monospaced elements */
    font-family: var(--nc-font-mono);
}

code,
samp,
kbd,
pre {
    /* The main preformatted style. This is changed slightly across different cases. */
    background: var(--nc-bg-2);
    border: 1px solid var(--nc-bg-3);
    border-radius: 4px;
    padding: 3px 6px;
    /* ↓ font-size is relative to containing element, so it scales for titles*/
    font-size: 0.9em;
}

kbd {
    /* Makes the kbd element look like a keyboard key */
    border-bottom: 3px solid var(--nc-bg-3);
}

pre {
    padding: 1rem 1.4rem;
    max-width: 100%;
    overflow: auto;
}

pre code {
    /* When <code> is in a <pre>, reset it's formatting to blend in */
    background: inherit;
    font-size: inherit;
    color: inherit;
    border: 0;
    padding: 0;
    margin: 0;
}

code pre {
    /* When <pre> is in a <code>, reset it's formatting to blend in */
    display: inline;
    background: inherit;
    font-size: inherit;
    color: inherit;
    border: 0;
    padding: 0;
    margin: 0;
}

details {
    /* Make the <details> look more "clickable" */
    padding: .6rem 1rem;
    background: var(--nc-bg-2);
    border: 1px solid var(--nc-bg-3);
    border-radius: 4px;
}

summary {
    /* Makes the <summary> look more like a "clickable" link with the pointer cursor */
    cursor: pointer;
    font-weight: bold;
}

details[open] {
    /* Adjust the <details> padding while open */
    padding-bottom: .75rem;
}

details[open] summary {
    /* Adjust the <details> padding while open */
    margin-bottom: 6px;
}

details[open] > *:last-child {
    /* Resets the bottom margin of the last element in the <details> while <details> is opened. This prevents double margins/paddings. */
    margin-bottom: 0;
}

dt {
    font-weight: bold;
}

dd::before {
    /* Add an arrow to data table definitions */
    content: '→ ';
}

hr {
    /* Reset the border of the <hr> separator, then set a better line */
    border: 0;
    border-bottom: 1px solid var(--nc-bg-3);
    margin: 1rem auto;
}

fieldset {
    margin-top: 1rem;
    padding: 2rem;
    border: 1px solid var(--nc-bg-3);
    border-radius: 4px;
}

legend {
    padding: auto .5rem;
}

table {
    /* border-collapse sets the table's elements to share borders, rather than floating as separate "boxes". */
    border-collapse: collapse;
    width: 100%
}

td,
th {
    border: 1px solid var(--nc-bg-3);
    text-align: left;
    padding: .5rem;
}

th {
    background: var(--nc-bg-2);
}

tr:nth-child(even) {
    /* Set every other cell slightly darker. Improves readability. */
    background: var(--nc-bg-2);
}

table caption {
    font-weight: bold;
    margin-bottom: .5rem;
}

textarea {
    /* Don't let the <textarea> extend off the screen naturally or when dragged by the user */
    max-width: 100%;
}

ol,
ul {
    /* Replace the browser default padding */
    padding-left: 2rem;
}

li {
    margin-top: .4rem;
}

ul ul,
ol ul,
ul ol,
ol ol {
    margin-bottom: 0;
}

mark {
    padding: 3px 6px;
    background: var(--nc-ac-1);
    color: var(--nc-ac-tx);
}

textarea,
select,
input {
    padding: 6px 12px;
    margin-bottom: .5rem;
    background: var(--nc-bg-2);
    color: var(--nc-tx-2);
    border: 1px solid var(--nc-bg-3);
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
}

img {
    max-width: 100%;
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

@media (max-width: 640px) {
  .header {
    flex-direction: column
  }
}

.header-title {
    flex: 1;
    font-size: 1.5em;
    padding-left: 20px;
    font-family: 'Frank Ruhl Libre', serif;
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

.profile-note {
    padding-left: 2rem;
}

.profile aside ul {
    display: flex;
    margin-top: .5em;
    list-style: none;
    padding-left: 0;
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
    width: 100%;
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

.entry-title h1 a {
    color: #4a4a4a;
}

.entry-title h1 a:hover {
    color: #3273dc;
}

`;

const getStyles = (): string => styles;
export const getMarkdownStyles = (): string => `.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body .anchor {
  float: left;
  line-height: 1;
  margin-left: -20px;
  padding-right: 4px;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #1b1f23;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E");
}.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  color: #24292e;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body details {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body a {
  background-color: initial;
}

.markdown-body a:active,
.markdown-body a:hover {
  outline-width: 0;
}

.markdown-body strong {
  font-weight: inherit;
  font-weight: bolder;
}

.markdown-body h1 {
  font-size: 2em;
  margin: .67em 0;
}

.markdown-body img {
  border-style: none;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre {
  font-family: monospace,monospace;
  font-size: 1em;
}

.markdown-body hr {
  box-sizing: initial;
  height: 0;
  overflow: visible;
}

.markdown-body input {
  font: inherit;
  margin: 0;
}

.markdown-body input {
  overflow: visible;
}

.markdown-body [type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body * {
  box-sizing: border-box;
}

.markdown-body input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body a {
  color: #0366d6;
  text-decoration: none;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body strong {
  font-weight: 600;
}

.markdown-body hr {
  height: 0;
  margin: 15px 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #dfe2e5;
}

.markdown-body hr:after,
.markdown-body hr:before {
  display: table;
  content: "";
}

.markdown-body hr:after {
  clear: both;
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  line-height: 10px;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #d1d5da;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body h1 {
  font-size: 32px;
}

.markdown-body h1,
.markdown-body h2 {
  font-weight: 600;
}

.markdown-body h2 {
  font-size: 24px;
}

.markdown-body h3 {
  font-size: 20px;
}

.markdown-body h3,
.markdown-body h4 {
  font-weight: 600;
}

.markdown-body h4 {
  font-size: 16px;
}

.markdown-body h5 {
  font-size: 14px;
}

.markdown-body h5,
.markdown-body h6 {
  font-weight: 600;
}

.markdown-body h6 {
  font-size: 12px;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
}

.markdown-body ol,
.markdown-body ul {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ol ol ol,
.markdown-body ol ul ol,
.markdown-body ul ol ol,
.markdown-body ul ul ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body code,
.markdown-body pre {
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body input::-webkit-inner-spin-button,
.markdown-body input::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body :checked+.radio-label {
  position: relative;
  z-index: 1;
  border-color: #0366d6;
}

.markdown-body .border {
  border: 1px solid #e1e4e8!important;
}

.markdown-body .border-0 {
  border: 0!important;
}

.markdown-body .border-bottom {
  border-bottom: 1px solid #e1e4e8!important;
}

.markdown-body .rounded-1 {
  border-radius: 3px!important;
}

.markdown-body .bg-white {
  background-color: #fff!important;
}

.markdown-body .bg-gray-light {
  background-color: #fafbfc!important;
}

.markdown-body .text-gray-light {
  color: #6a737d!important;
}

.markdown-body .mb-0 {
  margin-bottom: 0!important;
}

.markdown-body .my-2 {
  margin-top: 8px!important;
  margin-bottom: 8px!important;
}

.markdown-body .pl-0 {
  padding-left: 0!important;
}

.markdown-body .py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.markdown-body .pl-1 {
  padding-left: 4px!important;
}

.markdown-body .pl-2 {
  padding-left: 8px!important;
}

.markdown-body .py-2 {
  padding-top: 8px!important;
  padding-bottom: 8px!important;
}

.markdown-body .pl-3,
.markdown-body .px-3 {
  padding-left: 16px!important;
}

.markdown-body .px-3 {
  padding-right: 16px!important;
}

.markdown-body .pl-4 {
  padding-left: 24px!important;
}

.markdown-body .pl-5 {
  padding-left: 32px!important;
}

.markdown-body .pl-6 {
  padding-left: 40px!important;
}

.markdown-body .f6 {
  font-size: 12px!important;
}

.markdown-body .lh-condensed {
  line-height: 1.25!important;
}

.markdown-body .text-bold {
  font-weight: 600!important;
}

.markdown-body .pl-c {
  color: #6a737d;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #005cc5;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #6f42c1;
}

.markdown-body .pl-s .pl-s1,
.markdown-body .pl-smi {
  color: #24292e;
}

.markdown-body .pl-ent {
  color: #22863a;
}

.markdown-body .pl-k {
  color: #d73a49;
}

.markdown-body .pl-pds,
.markdown-body .pl-s,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sra,
.markdown-body .pl-sr .pl-sre {
  color: #032f62;
}

.markdown-body .pl-smw,
.markdown-body .pl-v {
  color: #e36209;
}

.markdown-body .pl-bu {
  color: #b31d28;
}

.markdown-body .pl-ii {
  color: #fafbfc;
  background-color: #b31d28;
}

.markdown-body .pl-c2 {
  color: #fafbfc;
  background-color: #d73a49;
}

.markdown-body .pl-c2:before {
  content: "^M";
}

.markdown-body .pl-sr .pl-cce {
  font-weight: 700;
  color: #22863a;
}

.markdown-body .pl-ml {
  color: #735c0f;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: 700;
  color: #005cc5;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #24292e;
}

.markdown-body .pl-mb {
  font-weight: 700;
  color: #24292e;
}

.markdown-body .pl-md {
  color: #b31d28;
  background-color: #ffeef0;
}

.markdown-body .pl-mi1 {
  color: #22863a;
  background-color: #f0fff4;
}

.markdown-body .pl-mc {
  color: #e36209;
  background-color: #ffebda;
}

.markdown-body .pl-mi2 {
  color: #f6f8fa;
  background-color: #005cc5;
}

.markdown-body .pl-mdr {
  font-weight: 700;
  color: #6f42c1;
}

.markdown-body .pl-ba {
  color: #586069;
}

.markdown-body .pl-sg {
  color: #959da5;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #032f62;
}

.markdown-body .mb-0 {
  margin-bottom: 0!important;
}

.markdown-body .my-2 {
  margin-bottom: 8px!important;
}

.markdown-body .my-2 {
  margin-top: 8px!important;
}

.markdown-body .pl-0 {
  padding-left: 0!important;
}

.markdown-body .py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.markdown-body .pl-1 {
  padding-left: 4px!important;
}

.markdown-body .pl-2 {
  padding-left: 8px!important;
}

.markdown-body .py-2 {
  padding-top: 8px!important;
  padding-bottom: 8px!important;
}

.markdown-body .pl-3 {
  padding-left: 16px!important;
}

.markdown-body .pl-4 {
  padding-left: 24px!important;
}

.markdown-body .pl-5 {
  padding-left: 32px!important;
}

.markdown-body .pl-6 {
  padding-left: 40px!important;
}

.markdown-body .pl-7 {
  padding-left: 48px!important;
}

.markdown-body .pl-8 {
  padding-left: 64px!important;
}

.markdown-body .pl-9 {
  padding-left: 80px!important;
}

.markdown-body .pl-10 {
  padding-left: 96px!important;
}

.markdown-body .pl-11 {
  padding-left: 112px!important;
}

.markdown-body .pl-12 {
  padding-left: 128px!important;
}

.markdown-body hr {
  border-bottom-color: #eee;
}

.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  line-height: 10px;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #d1d5da;
}

.markdown-body:after,
.markdown-body:before {
  display: table;
  content: "";
}

.markdown-body:after {
  clear: both;
}

.markdown-body>:first-child {
  margin-top: 0!important;
}

.markdown-body>:last-child {
  margin-bottom: 0!important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body blockquote,
.markdown-body details,
.markdown-body dl,
.markdown-body ol,
.markdown-body p,
.markdown-body pre,
.markdown-body table,
.markdown-body ul {
  margin-top: 0;
  margin-bottom: 16px;
}

.markdown-body hr {
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}

.markdown-body blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: .25em solid #dfe2e5;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h1 {
  font-size: 2em;
}

.markdown-body h1,
.markdown-body h2 {
  padding-bottom: .3em;
  border-bottom: 1px solid #eaecef;
}

.markdown-body h2 {
  font-size: 1.5em;
}

.markdown-body h3 {
  font-size: 1.25em;
}

.markdown-body h4 {
  font-size: 1em;
}

.markdown-body h5 {
  font-size: .875em;
}

.markdown-body h6 {
  font-size: .85em;
  color: #6a737d;
}

.markdown-body ol,
.markdown-body ul {
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ol ul,
.markdown-body ul ol,
.markdown-body ul ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li {
  word-wrap: break-all;
}

.markdown-body li>p {
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body table {
  display: block;
  width: 100%;
  overflow: auto;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table td,
.markdown-body table th {
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}

.markdown-body table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.markdown-body img {
  max-width: 100%;
  box-sizing: initial;
  background-color: #fff;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body code {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27,31,35,.05);
  border-radius: 3px;
}

.markdown-body pre {
  word-wrap: normal;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}

.markdown-body pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: initial;
  border: 0;
}

.markdown-body .commit-tease-sha {
  display: inline-block;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  font-size: 90%;
  color: #444d56;
}

.markdown-body .full-commit .btn-outline:not(:disabled):hover {
  color: #005cc5;
  border-color: #005cc5;
}

.markdown-body .blob-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
}

.markdown-body .blob-wrapper-embedded {
  max-height: 240px;
  overflow-y: auto;
}

.markdown-body .blob-num {
  width: 1%;
  min-width: 50px;
  padding-right: 10px;
  padding-left: 10px;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  font-size: 12px;
  line-height: 20px;
  color: rgba(27,31,35,.3);
  text-align: right;
  white-space: nowrap;
  vertical-align: top;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.markdown-body .blob-num:hover {
  color: rgba(27,31,35,.6);
}

.markdown-body .blob-num:before {
  content: attr(data-line-number);
}

.markdown-body .blob-code {
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  line-height: 20px;
  vertical-align: top;
}

.markdown-body .blob-code-inner {
  overflow: visible;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
  font-size: 12px;
  color: #24292e;
  word-wrap: normal;
  white-space: pre;
}

.markdown-body .pl-token.active,
.markdown-body .pl-token:hover {
  cursor: pointer;
  background: #ffea7f;
}

.markdown-body .tab-size[data-tab-size="1"] {
  -moz-tab-size: 1;
  tab-size: 1;
}

.markdown-body .tab-size[data-tab-size="2"] {
  -moz-tab-size: 2;
  tab-size: 2;
}

.markdown-body .tab-size[data-tab-size="3"] {
  -moz-tab-size: 3;
  tab-size: 3;
}

.markdown-body .tab-size[data-tab-size="4"] {
  -moz-tab-size: 4;
  tab-size: 4;
}

.markdown-body .tab-size[data-tab-size="5"] {
  -moz-tab-size: 5;
  tab-size: 5;
}

.markdown-body .tab-size[data-tab-size="6"] {
  -moz-tab-size: 6;
  tab-size: 6;
}

.markdown-body .tab-size[data-tab-size="7"] {
  -moz-tab-size: 7;
  tab-size: 7;
}

.markdown-body .tab-size[data-tab-size="8"] {
  -moz-tab-size: 8;
  tab-size: 8;
}

.markdown-body .tab-size[data-tab-size="9"] {
  -moz-tab-size: 9;
  tab-size: 9;
}

.markdown-body .tab-size[data-tab-size="10"] {
  -moz-tab-size: 10;
  tab-size: 10;
}

.markdown-body .tab-size[data-tab-size="11"] {
  -moz-tab-size: 11;
  tab-size: 11;
}

.markdown-body .tab-size[data-tab-size="12"] {
  -moz-tab-size: 12;
  tab-size: 12;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 3px;
}

.markdown-body .task-list-item input {
  margin: 0 .2em .25em -1.6em;
  vertical-align: middle;
}`;

export { getStyles };
