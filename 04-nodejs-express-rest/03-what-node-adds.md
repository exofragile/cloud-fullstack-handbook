# 3 · What Node.js adds to JavaScript 🧰

> **TL;DR:** In Node there is no `window` and no `document`. Instead you get built-in modules for files (`fs`), paths (`path`), the running program (`process`) and servers (`http`).

## 💡 The big idea

In the browser, JavaScript lives inside a page and gets a toolbox for the page (`window`, `document`). In Node.js there is **no page**, so those two objects **simply do not exist there**. Instead you get a different toolbox for the **computer itself**: its files, its network, and the program's own environment.

A **module** is a **named bundle of related functions**, loaded into a file with `require()`.

| Module | Purpose |
|---|---|
| `fs` | Read and write files on disk |
| `path` | Build and work with file paths safely across operating systems |
| `process` | Access information about the running program, such as arguments and environment variables |
| `http` | Create a web server that listens for requests ([Lesson 6](06-creating-a-web-server.md)) |

> 🧪 All the code on this page is in [`examples/02-built-in-modules/`](examples/02-built-in-modules/).

## 🔍 The details

### `fs` — reading and writing files 📄

`fs.writeFileSync(path, data)` saves text to a file, **creating it if it does not already exist**; `fs.readFileSync(path, encoding)` reads it back.

```js
const fs = require('fs');

fs.writeFileSync('note.txt', 'Hello, file system!');

const content = fs.readFileSync('note.txt', 'utf8');
console.log(content); // Hello, file system!
```

The `'utf8'` argument tells `fs` to hand back a **readable text string**, instead of the raw **binary data** it reads by default. (Try leaving it off and see what prints: a `Buffer` of numbers.)

### `path` — working with file paths 🗺️

`path.join(...)` **safely combines several pieces into one correctly formatted file path**, avoiding mistakes from manually typing slashes. (Windows uses `\`, macOS/Linux use `/`; `path.join` picks the right one.)

```js
const path = require('path');

const fullPath = path.join(__dirname, 'data', 'note.txt');
console.log(fullPath);
// e.g. /home/project/data/note.txt
```

`__dirname` is a special variable Node.js **automatically fills in for every file**, containing the **full path of the folder that file lives in**.

### `process` — information about the running program 🎛️

`process.argv` lists the **command used to start the program**; `process.env` holds **environment variables** — configuration values kept outside the code itself.

```js
console.log(process.argv);
// [ '/usr/bin/node', '/path/app.js', 'hello' ]

console.log(process.env.NODE_ENV);
// e.g. 'development', or undefined if it isn't set
```

Run it with an extra word and a setting to see both change:

```bash
node process-demo.js hello                         # argv has 'hello' as its 3rd item
NODE_ENV=development node process-demo.js hello    # macOS / Linux
$env:NODE_ENV="development"; node process-demo.js hello   # Windows PowerShell
```

The first two entries of `argv` are always the path to `node` and the path to your script; anything you type after the file name arrives from the third item onwards.

> 🔐 Why environment variables? Things like passwords, API keys and "am I in development or production?" shouldn't be written into code that you share. You set them outside, and read them with `process.env`.

### `http` — the basis for a web server 🌐

`http.createServer(...)` builds a server that reacts to incoming requests. A minimal one looks like this:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello!');
});

server.listen(3000);
```

This is just a taste. [Lesson 6](06-creating-a-web-server.md) takes it apart piece by piece.

## 🛠️ Try it

1. Run `fs-demo.js`. A `note.txt` file appears next to it with your text inside.
2. Run `path-demo.js` and read the printed path. Is it correct for your computer?
3. Run `process-demo.js` with and without extra words and `NODE_ENV`.

## ⚠️ Watch out

- Trying to use `document` or `window` in Node. They don't exist there, and you'll get `ReferenceError: document is not defined`.

## 📚 Go deeper

- [Node.js — official documentation](https://nodejs.org/en/docs) (see the File system, Path, Process and HTTP sections)

---

⬅️ [2 · Running JavaScript with Node](02-running-javascript-with-node.md) · ➡️ Next: [**4 · npm and packages**](04-npm-and-packages.md)
