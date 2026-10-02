# 6 · Creating a web server 🛎️

> **TL;DR:** A web server listens for requests and sends back responses. Node's built-in `http` module can do it with no extra packages, but handling many routes by hand gets messy fast.

## 💡 The big idea

A **web server** is a program that **listens for incoming requests** (for example a browser asking for a page) and **sends back a response**. Picture a **receptionist at a desk**: someone walks up with a request, the receptionist looks at it, and replies. The receptionist doesn't care who is asking.

Node.js can create one directly with its built-in `http` module, **with no extra packages required**.

## 🔍 The details

### The smallest server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

**Breakdown:**

- `http.createServer()` takes a function that **runs every time a request comes in**. It receives two objects: `req` (the incoming **request**) and `res` (the **response** to send back).
- `res.end()` **sends the response and finishes it**.
- `server.listen(3000, ...)` **starts the server on port 3000**, meaning it can be reached at `http://localhost:3000`.

Running `node app.js` and opening that address in a browser (or with `curl`) displays **"Hello, World!"**.

| Word | Plain meaning |
|---|---|
| **localhost** | "this very computer" |
| **port (3000)** | Which "door" on this computer the server listens at. A computer has thousands |
| **req / res** | The incoming request / the outgoing response |
| `statusCode` 200 | "OK". The result code (404 = not found, 500 = server error…) |
| `Content-Type: text/plain` | A header saying "the body is plain text" |

Stop the server with **Ctrl+C**. Runnable copy: [`examples/04-http-server/hello-server.js`](examples/04-http-server/hello-server.js).

**What I saw when I ran it:** a response with status `200 OK`, header `Content-Type: text/plain`, and the body `Hello, World!`.

### Handling different requests manually

`http.createServer()` only accepts **a single function**, so if a server needs to react differently to different requests, that function has to check `req.method` (the HTTP verb used, such as `GET` or `POST`) and `req.url` (the requested path) **by hand**:

```js
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/tasks') {
    res.end('Here is the list of tasks');
  } else if (req.method === 'POST' && req.url === '/tasks') {
    res.end('A new task was created');
  } else if (req.method === 'DELETE' && req.url === '/tasks') {
    res.end('A task was deleted');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});
```

Runnable copy: [`examples/04-http-server/manual-routes-server.js`](examples/04-http-server/manual-routes-server.js). I tested all four paths with `curl`:

| Request | Response |
|---|---|
| `GET /tasks` | `Here is the list of tasks` |
| `POST /tasks` | `A new task was created` |
| `DELETE /tasks` | `A task was deleted` |
| `GET /nope` | `Not found` (status 404) |

### Why this doesn't scale 📉

This already works for three simple routes, but **it does not scale well**: a real application often needs **dozens of routes**, each supporting several methods, and every one needs its own `if/else` branch inside the same growing function. Reading data sent with a POST request also means **manually collecting it piece by piece as it arrives**, which takes several extra lines of code every time it is needed.

That pain is exactly why Express exists. 👉 [Next lesson](07-introducing-express.md).

## 🛠️ Try it

1. Run the hello server and open `http://localhost:3000` in your browser.
2. Run the manual-routes server and test it with the browser (only GET!) and with `curl -X POST http://localhost:3000/tasks` and `curl -X DELETE http://localhost:3000/tasks`.
3. Add a fourth route by hand. Notice how the function grows.

## ⚠️ Watch out

- **Two programs trying to listen on the same port** gives `Error: listen EADDRINUSE: address already in use`. Stop the old server first (Ctrl+C) or pick another port.
- Forgetting `res.end()`: the browser just keeps loading.

## 📚 Go deeper

- [Node.js — official documentation](https://nodejs.org/en/docs)

---

⬅️ [5 · Modules](05-modules.md) · ➡️ Next: [**7 · Introducing Express**](07-introducing-express.md)
