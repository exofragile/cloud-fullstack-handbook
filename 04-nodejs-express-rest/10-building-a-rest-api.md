# 10 · Building a REST API in Express 🏗️

> **TL;DR:** Five routes (list, get one, create, update, delete) on one resource, `/tasks`, with data kept in a plain array. `express.json()` reads request bodies; status codes tell the client what happened.

## 💡 The big idea

Time to build the real thing: a small **Tasks API**. Data is stored **in memory** in a plain array, which **resets every time the server restarts**. It supports all four actions: **listing, creating, updating, and deleting** a task.

We'll go in this order, from the plumbing to the finished machine:

1. 🔧 Teach Express to read JSON bodies
2. 📖 A quick reference for `req` and `res` (your two tools in every route)
3. 🧱 The whole file at a glance
4. 🔬 Each route, one at a time

Runnable copy: [`examples/06-tasks-api/`](examples/06-tasks-api/).

## 🔍 The details

### 1 · Reading JSON request bodies

When data is sent to the server (for example with POST), it usually arrives as a **JSON string** in the request body. Express needs to be told to parse it automatically:

```js
app.use(express.json());
```

This line must be added **once, before the routes are defined**, so that `req.body` is available inside them. (`app.use` registers "middleware", a step every request passes through on the way to your route. This one's job is to turn the JSON text into `req.body`.)

### 2 · `req` and `res` quick reference

Every route handler receives the same two objects: `req` (the incoming request) and `res` (the response being built). The tables cover the properties and methods used throughout this guide, along with a few other common ones.

#### `req` — properties of the incoming request

| Property | What it contains |
|---|---|
| `req.body` | The parsed JSON sent in the request (needs `express.json()`) |
| `req.params` | Route parameters from the URL, e.g. `:id` in `/tasks/:id` |
| `req.query` | The query string, e.g. `?done=true` becomes `{ done: 'true' }` |
| `req.headers` | The request's HTTP headers, such as `Content-Type` |
| `req.method` | The HTTP method used, e.g. `'GET'` or `'POST'` |
| `req.url` | The path and query string that was requested |

#### `res` — methods for sending a response

| Method | What it does |
|---|---|
| `res.json(data)` | Converts `data` to JSON and sends it, with the correct `Content-Type` header |
| `res.send(data)` | Sends a response of any type (string, HTML, buffer, or an object, which it converts to JSON) |
| `res.status(code)` | Sets the HTTP status code; usually chained, e.g. `res.status(404).json(...)` |
| `res.end()` | Ends the response without sending any body, e.g. `res.status(204).end()` |
| `res.set(header, value)` | Sets a response header manually |
| `res.redirect(url)` | Redirects the client to a different URL |

For example, `res.status(201).json(newTask)` sets the status code to 201 **and** sends `newTask` as the JSON body, both in one chained call.

#### Status codes used in this chapter

| Code | Meaning | Used when |
|---|---|---|
| `200` | OK | Normal success (the default) |
| `201` | Created | A POST made something new |
| `204` | No Content | Success, nothing to send back (DELETE) |
| `404` | Not Found | The thing asked for doesn't exist |
| `500` | Server Error | Something broke on the server |

### 3 · The complete API

Here is the entire file first, so the finished shape is clear before each part is explained on its own below:

```js
const express = require('express');
const app = express();
app.use(express.json());

// Dummy data to simulate the server's data;
// a real app would usually load this from a database.
let tasks = [
   { id: 1, title: 'Learn Node.js', done: false },
   { id: 2, title: 'Build a REST API', done: false }
];
let nextId = 3;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: nextId++, title: req.body.title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.title = req.body.title ?? task.title;
  task.done = req.body.done ?? task.done;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter((t) => t.id !== Number(req.params.id));
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

The `??` on `task.title = req.body.title ?? task.title` is the **nullish coalescing operator**: it keeps the existing value unless the request actually sent a new one, so a PUT request only needs to include the fields it wants to change. (`a ?? b` means "use `a`, unless it is `null` or `undefined`, then use `b`." Unlike `||`, it keeps `false` and `0`, which matters for `done: false`.)

### 4 · Each route, one at a time

#### In-memory data

```js
let tasks = [
   { id: 1, title: 'Learn Node.js', done: false },
   { id: 2, title: 'Build a REST API', done: false }
];
let nextId = 3;
```

`tasks` is just a plain array living in memory, and `nextId` hands every new task a unique id. (It's `let`, not `const`, because DELETE replaces the array and `nextId` counts up.)

#### GET — list all tasks

```js
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
```

Visiting `GET /tasks` returns the full array as JSON.

```
$ curl http://localhost:3000/tasks
[{"id":1,"title":"Learn Node.js","done":false},{"id":2,"title":"Build a REST API","done":false}]   → 200
```

#### GET — a single task

```js
app.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});
```

`:id` inside the path is a **route parameter**: a placeholder that matches anything written in its place, made available through `req.params.id`. `res.status(404)` sets the response's status code before sending it, to signal that the task was not found.

Two details worth a second look:

- **`Number(req.params.id)`**: route parameters **always arrive as strings** (`"1"`), while your ids are numbers (`1`). `"1" === 1` is `false`, so without converting, nothing would ever match.
- **`return res.status(404)…`**: the `return` stops the function right there. Without it, the code would carry on and may try to answer a second time (see [common mistakes](common-mistakes.md)).

```
$ curl http://localhost:3000/tasks/1    → {"id":1,"title":"Learn Node.js","done":false}   (200)
$ curl http://localhost:3000/tasks/99   → {"error":"Task not found"}                       (404)
```

#### POST — create a task

```js
app.post('/tasks', (req, res) => {
  const newTask = {
     id: nextId++,
     title: req.body.title,
     done: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
```

The task's title is read from `req.body.title`, which is only available because of the `express.json()` line added earlier. Status code **201** conventionally means "created". (`nextId++` uses the current value, *then* adds one.)

```
$ curl -X POST -H "Content-Type: application/json" -d '{"title":"Write documentation"}' http://localhost:3000/tasks
{"id":3,"title":"Write documentation","done":false}   → 201
```

#### PUT — update a task

```js
app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.title = req.body.title ?? task.title;
  task.done = req.body.done ?? task.done;
  res.json(task);
});
```

```
$ curl -X PUT -H "Content-Type: application/json" -d '{"done":true}' http://localhost:3000/tasks/1
{"id":1,"title":"Learn Node.js","done":true}   → 200
```

Only `done` was sent, and `title` was kept, thanks to `??`.

#### DELETE — remove a task

```js
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  res.status(204).end();
});
```

Status code **204** means "success, no content to return", which is why `res.end()` is used instead of `res.json()`. The `filter` keeps everything *except* the matching task.

```
$ curl -X DELETE http://localhost:3000/tasks/2     → (empty body)   (204)
$ curl http://localhost:3000/tasks
[{"id":1,"title":"Learn Node.js","done":true},{"id":3,"title":"Write documentation","done":false}]
```

> ✅ **I ran this API and all of the above are the real outputs.** Note task 2 is gone and the `done: true` change stuck — until you restart the server, which wipes the array. That limitation is the reason for the next lesson.

## 🛠️ Try it

1. Run the API (`cd examples/06-tasks-api`, `npm install`, `node server.js`) and exercise every route with `curl` ([Lesson 12](12-testing-the-api.md) also shows Postman).
2. Restart the server and call `GET /tasks`: your changes are gone. Why? (The data lived in memory.)
3. Add a query filter: make `GET /tasks?done=true` return only finished tasks, using `req.query.done`. *(Hint: `req.query.done` is the string `'true'`, not the boolean `true`.)*
4. Remove the `express.json()` line and try the POST. Read the error (`Cannot read properties of undefined (reading 'title')`, because `req.body` is `undefined`).

## ⚠️ Watch out

- Forgetting `app.use(express.json())` → `req.body` is `undefined` in every route.
- Forgetting `return` before an early `res.status(404)…` → code keeps running.
- Forgetting `Number(...)` on `req.params.id`.

## 📚 Go deeper

- [Express — official documentation](https://expressjs.com/)

---

⬅️ [9 · Request/response flow](09-request-response-flow.md) · ➡️ Next: [**11 · MongoDB and Mongoose**](11-mongodb-and-mongoose.md)
