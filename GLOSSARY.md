# 📖 Glossary

Every important term in the handbook, in plain English. Letters are alphabetical; the chapter tag shows where you first meet the idea.

**Jump to:** [A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [J](#j) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [Q](#q) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [V](#v) · [W](#w) · [X](#x)

---

## A

| Term | Meaning |
|---|---|
| **Accessibility (a11y)** | Making pages usable by everyone, including people using screen readers, keyboards only, or who need larger text. *(HTML)* |
| **Anonymous function** | A function with no name, usually passed straight to another function. *(JS)* |
| **API** | Application Programming Interface: a way for one program to ask another to do something or return data. *(Node)* |
| **Arrow function** | Short function syntax using `=>`. Has no `this` of its own. *(JS)* |
| **Array** | An ordered, 0-indexed list of values. *(JS)* |
| **Async / await** | `async` marks a function that waits for slow things; `await` pauses *that function* (not the page) until a Promise finishes. *(JS)* |
| **Attribute** | Extra information on an HTML tag, written `name="value"`. *(HTML)* |

## B

| Term | Meaning |
|---|---|
| **Block element** | Starts on a new line and takes the full width (`div`, `p`, `h1`). *(HTML)* |
| **Block scope** | A variable (`let`/`const`) exists only inside its nearest `{ }`. *(JS)* |
| **Body (request)** | The data sent along with a request, e.g. the JSON in a POST. *(JS/Node)* |
| **Box model** | Every element is a box: content, padding, border, margin. *(CSS)* |
| **Breakpoint** | The screen width at which your layout changes via a media query. *(CSS)* |

## C

| Term | Meaning |
|---|---|
| **Callback** | A function you pass to another function to be called later. *(JS)* |
| **Cascade** | The rules that decide which CSS declaration wins when several conflict. *(CSS)* |
| **Child / parent / sibling** | Family words for elements: inside / outside / same level. *(HTML)* |
| **Class** | A reusable label (`class="card"`) that many elements can share. *(HTML/CSS)* |
| **Collection** | MongoDB's version of a table: a group of documents. *(Node)* |
| **Console** | The developer's output area in DevTools or the terminal; `console.log` prints to it. *(JS)* |
| **`const`** | A variable that can't be reassigned (its contents may still change). *(JS)* |
| **CORS** | The browser rule that blocks a page from calling an API on a different origin unless the server allows it. *(Node)* |
| **CRUD** | Create, Read, Update, Delete: the four basic data actions. *(Node)* |
| **CSS** | Cascading Style Sheets: how content looks. *(CSS)* |
| **curl** | A command-line tool for sending HTTP requests. *(Node)* |

## D

| Term | Meaning |
|---|---|
| **Declaration** | One `property: value;` pair in CSS. *(CSS)* |
| **`defer`** | Script attribute: download now, run after the page is parsed. *(HTML/JS)* |
| **Dependency** | A package your project needs, listed in `package.json`. *(Node)* |
| **DevTools** | The browser's built-in inspector (F12). *(HTML)* |
| **Document (MongoDB)** | One JSON-like record in a collection. *(Node)* |
| **DOCTYPE** | `<!DOCTYPE html>`: tells the browser to use modern HTML rules. *(HTML)* |
| **DOM** | Document Object Model: the browser's live tree of your page, reached through `document`. *(HTML/JS)* |
| **Dynamically typed** | Variables aren't locked to one type. *(JS)* |

## E

| Term | Meaning |
|---|---|
| **Element** | A start tag + content + end tag (or a void tag). *(HTML)* |
| **Environment variable** | A setting kept outside the code, read via `process.env`. *(Node)* |
| **Event** | Something that happens: click, keystroke, submit. *(JS)* |
| **`event.preventDefault()`** | Cancels the browser's default action, e.g. a form reloading the page. *(JS)* |
| **Express** | The most popular Node package for building servers. *(Node)* |

## F

| Term | Meaning |
|---|---|
| **`fetch`** | The browser function for making network requests. *(JS)* |
| **Flexbox** | One-directional CSS layout (rows *or* columns). *(CSS)* |
| **`fr` unit** | One share of free space in a CSS grid. *(CSS)* |
| **Function** | A named, reusable block of code. *(JS)* |

## G

| Term | Meaning |
|---|---|
| **Grid** | Two-dimensional CSS layout (rows *and* columns). *(CSS)* |

## H

| Term | Meaning |
|---|---|
| **Head** | The part of an HTML page holding information *about* the page. *(HTML)* |
| **Header (HTTP)** | Metadata on a request/response, e.g. `Content-Type`. *(JS/Node)* |
| **Hoisting** | Declarations being "lifted" to the top of their scope before code runs. *(JS)* |
| **HTML** | HyperText Markup Language: the structure and meaning of content. *(HTML)* |
| **HTTP** | The protocol the web uses for requests and responses. *(Node)* |

## I

| Term | Meaning |
|---|---|
| **Inheritance** | Some CSS properties (like `color`) pass from parent to children. *(CSS)* |
| **Inline element** | Flows inside a line of text (`span`, `a`). *(HTML)* |

## J

| Term | Meaning |
|---|---|
| **JavaScript** | The programming language of the web, now also used on servers. *(JS)* |
| **JSON** | JavaScript Object Notation: a text format for data (double quotes, no comments, no trailing commas). *(JS)* |

## L

| Term | Meaning |
|---|---|
| **`let`** | A variable that can be reassigned, block-scoped. *(JS)* |
| **localhost** | "This very computer". *(Node)* |

## M

| Term | Meaning |
|---|---|
| **Media query** | A CSS rule that applies only under a condition, like a narrow screen. *(CSS)* |
| **Method (HTTP)** | The verb of a request: GET, POST, PUT, DELETE. *(Node)* |
| **Middleware** | A function that runs between a request arriving and its route handler. *(Node)* |
| **Module** | A file (or built-in bundle) of code you load with `require()`. *(Node)* |
| **MongoDB** | A database that stores JSON-like documents. *(Node)* |
| **Mongoose** | An npm package for using MongoDB from Node, with schemas. *(Node)* |

## N

| Term | Meaning |
|---|---|
| **Node.js** | JavaScript running outside the browser, on your computer. *(Node)* |
| **NodeList** | The array-like result of `querySelectorAll`. *(JS)* |
| **npm** | Node's package manager and online registry. *(Node)* |
| **`null`** | A value you deliberately set to mean "nothing". *(JS)* |

## O

| Term | Meaning |
|---|---|
| **Object** | Key-value data. Arrays and functions are objects too. *(JS)* |

## P

| Term | Meaning |
|---|---|
| **`package.json`** | A project's ID card and dependency list. *(Node)* |
| **Port** | Which "door" on a computer a server listens at (e.g. 3000). *(Node)* |
| **Primitive** | A simple value copied by value: string, number, boolean, undefined, null. *(JS)* |
| **Promise** | An object representing a value that will exist later. *(JS)* |

## Q

| Term | Meaning |
|---|---|
| **`querySelector`** | Finds the first element matching a CSS selector. *(JS)* |

## R

| Term | Meaning |
|---|---|
| **REPL** | Read-Evaluate-Print-Loop: Node's interactive prompt. *(Node)* |
| **Request / response** | What a client sends / what a server sends back. *(Node)* |
| **REST** | Representational State Transfer: URLs name resources; HTTP methods say what to do. *(Node)* |
| **Responsive design** | Pages that adapt to different screen sizes. *(CSS)* |
| **Route** | A pairing of a path and a method with a handler function. *(Node)* |
| **Route parameter** | A URL placeholder like `:id`, read from `req.params`. *(Node)* |

## S

| Term | Meaning |
|---|---|
| **Schema / model** | Mongoose's description of a document's shape / the usable blueprint built from it. *(Node)* |
| **Selector** | The part of a CSS rule that chooses which elements to style. *(CSS)* |
| **Semantic HTML** | Choosing tags for meaning (`nav`, `main`) rather than looks. *(HTML)* |
| **Specificity** | How strongly a selector claims an element when rules conflict. *(CSS)* |
| **Status code** | A number summarising a response: 200 OK, 201 Created, 204 No Content, 404 Not Found, 500 Server Error. *(Node)* |

## T

| Term | Meaning |
|---|---|
| **Tag** | The `<name>` markers around an element. *(HTML)* |
| **Template literal** | A backtick string with `${…}` placeholders. *(JS)* |
| **`this`** | A keyword whose value depends on how a function is called (arrow functions borrow it). *(JS)* |
| **`try...catch`** | Run risky code and handle any error it throws. *(JS)* |
| **`typeof`** | An operator that reports a value's type. *(JS)* |

## U

| Term | Meaning |
|---|---|
| **`undefined`** | The default "no value yet". *(JS)* |
| **UTF-8** | A character encoding that supports accents, other alphabets and emoji. *(HTML)* |

## V

| Term | Meaning |
|---|---|
| **V8** | The JavaScript engine in Chrome and Node.js. *(Node)* |
| **`var`** | The old way to declare variables (function-scoped). Avoid. *(JS)* |
| **Viewport** | The visible area of the page in the browser window. *(CSS)* |
| **Void element** | An element with no content or closing tag (`img`, `br`, `input`). *(HTML)* |

## W

| Term | Meaning |
|---|---|
| **Web server** | A program that listens for requests and sends responses. *(Node)* |

## X

| Term | Meaning |
|---|---|
| **XSS** | Cross-site scripting: an attack that sneaks code into a page, e.g. via `innerHTML` with user text. *(JS)* |

---

⬅️ [Back to the main README](README.md)
