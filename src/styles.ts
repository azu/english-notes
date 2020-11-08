const styles = `
/* Common */
:root {
    --nc-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

::selection {
    /* Set background color for selected text */
    background: var(--nc-ac-1);
    color: var(--nc-ac-tx);
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

export { getStyles };
