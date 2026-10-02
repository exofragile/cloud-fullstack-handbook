# 🧪 Runnable examples

Each folder matches a lesson in [Chapter 4](../README.md). You need [Node.js](https://nodejs.org/) installed.

| Folder | Lesson | Run it |
|---|---|---|
| `01-hello-node` | [2 · Running JavaScript with Node](../02-running-javascript-with-node.md) | `node app.js` |
| `02-built-in-modules` | [3 · What Node adds](../03-what-node-adds.md) | `node fs-demo.js` · `node path-demo.js` · `node process-demo.js hello` |
| `03-modules` | [5 · Modules](../05-modules.md) | `node app.js` |
| `04-http-server` | [6 · Creating a web server](../06-creating-a-web-server.md) | `node hello-server.js` or `node manual-routes-server.js` |
| `05-express-routes` | [7 · Introducing Express](../07-introducing-express.md) | `npm install` then `node server.js` |
| `06-tasks-api` | [10 · Building a REST API](../10-building-a-rest-api.md) | `npm install` then `node server.js` |
| `07-signup-mongodb` | [11 · MongoDB and Mongoose](../11-mongodb-and-mongoose.md) | `npm install`, start MongoDB, `node server.js`, open <http://localhost:3000/signup.html> |

The servers listen on **port 3000**; stop one with **Ctrl+C** before starting another (otherwise: `EADDRINUSE`).

`node_modules/` is not included (see the [`.gitignore`](../../.gitignore)). `npm install` recreates it from `package.json`.
