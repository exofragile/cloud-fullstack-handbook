# 7 · Introducing Express 🚂

> **TL;DR:** Express is the most widely used Node.js package for building servers. It replaces that big `if/else` function with one small, named function per route.

## 💡 The big idea

Remember the receptionist who had to read every note and decide what to do? **Express gives them a switchboard**: calls for "GET /tasks" are routed to one person, "POST /tasks" to another. Nobody checks `req.method` and `req.url` by hand.

Express is the most widely used Node.js package for building servers. It **does not replace the `http` module** shown above. It is **built on top of it**. Instead of one large function handling every possible request, Express lets **each route be written as its own short, clearly named function**.

## 🔍 The details

```bash
npm install express
```

The same three routes from the manual example, rewritten with Express:

```js
const express = require('express');
const app = express();

app.get('/tasks', (req, res) => {
  res.send('Here is the list of tasks');
});

app.post('/tasks', (req, res) => {
  res.send('A new task was created');
});

app.delete('/tasks', (req, res) => {
  res.send('A task was deleted');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

There is **not a single `if` statement** anywhere. Each method has its own clearly named function: `app.get()`, `app.post()`, `app.delete()`, and so on, each already tied to the path given as its first argument.

> This pairing of a **path and a method with a function** is called **routing**, and it is the foundation the rest of this guide builds on.

### Anatomy of a route

```
app.get( '/tasks' , (req, res) => { res.send('…') } );
   │        │              │                │
   │        │              │                └─ what to send back
   │        │              └─ the handler: runs when a request matches
   │        └─ the path
   └─ the HTTP method
```

| Manual `http` | Express |
|---|---|
| One function with `if/else` | One function per route |
| `res.end('text')` | `res.send('text')` |
| `res.statusCode = 404; res.end(…)` | `res.status(404).send(…)` |
| Collect POST data piece by piece | `app.use(express.json())` ([Lesson 10](10-building-a-rest-api.md)) |

Runnable copy: [`examples/05-express-routes/`](examples/05-express-routes/) (`npm install`, then `node server.js`). I tested it: `GET`, `POST` and `DELETE` on `/tasks` return the three messages above. For any path you haven't defined (like `/nope`), Express automatically replies **404**.

## 🛠️ Try it

1. In a new folder: `npm init -y`, `npm install express`, create `server.js` with the code above, and run it.
2. Visit `http://localhost:3000/tasks` in the browser (GET works). Try `curl -X POST http://localhost:3000/tasks` for the others.
3. Add a `GET /about` route that sends "About page".

## 📚 Go deeper

- [Express — official documentation](https://expressjs.com/)

---

⬅️ [6 · Creating a web server](06-creating-a-web-server.md) · ➡️ Next: [**8 · What is a REST API?**](08-what-is-a-rest-api.md)
