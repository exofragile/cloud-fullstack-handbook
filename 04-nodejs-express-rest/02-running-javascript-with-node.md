# 2 · Running JavaScript with Node ▶️

> **TL;DR:** Type `node` for an interactive prompt, or `node file.js` to run a file.

## 💡 The big idea

There are two common ways to run JavaScript code with Node.js: a **scratch pad** (the REPL) for trying things out, and **files** for real programs.

## 🔍 The details

### The Node REPL

Typing `node` alone in the terminal opens an interactive prompt (the **REPL** — **R**ead, **E**valuate, **P**rint, **L**oop) where JavaScript can be typed and run line by line, similar to the browser console.

```
node
> const x = 5;
> console.log(x * 2);
10
```

(Press **Ctrl+C** twice, or type `.exit`, to leave.)

### Running a file

More commonly, code is written in a `.js` file and executed with `node <filename>`.

```js
console.log('Hello from Node.js');
```

Save the line above as `app.js`, then run it from the terminal:

```bash
node app.js
# output: Hello from Node.js
```

Runnable copy: [`examples/01-hello-node/app.js`](examples/01-hello-node/app.js).

> 🔎 **Notice:** `console.log` prints to the **terminal** now, not to a browser console. Same function, different place.

## 🛠️ Try it

1. Open the REPL, run `2 + 2`, `"hi".toUpperCase()`, and exit.
2. Save `app.js` as above and run it. Change the message and run it again.

---

⬅️ [1 · Installing Node.js](01-installing-node.md) · ➡️ Next: [**3 · What Node.js adds**](03-what-node-adds.md)
