# Chapter 4 · Common mistakes 🚧

I reproduced the error-producing ones below with the real example code, so the messages are exactly what Node and Express print (Express 5, Node 22).

| # | Mistake | What you'll see | The fix |
|---|---|---|---|
| 1 | **Forgetting `app.use(express.json())`**, so `req.body` is `undefined` in every route | `TypeError: Cannot read properties of undefined (reading 'title')` | Add the line **once, before the routes** |
| 2 | **Forgetting to send a response at all** (no `res.end()`, `res.json()` or `res.send()`) | The request **hangs** until it times out (I saw a client-side timeout after 800 ms) | Every code path must end with a response |
| 3 | **Sending a response and then continuing to run code that sends another one**, e.g. forgetting `return` before `res.status(404)...` | Either `Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client` in the server log, or (if the following code touches the missing value) a `TypeError: Cannot read properties of undefined…`. The client still receives the first response | `return res.status(404).json(...)` |
| 4 | **Comparing `req.params.id` to a number without converting** | No error: the comparison is just always `false`, so the lookup finds nothing (I saw `{"found":false,"type":"string"}`) | `Number(req.params.id)`: route parameters always arrive as **strings** |
| 5 | **Testing a POST or PUT without `Content-Type: application/json`** | `express.json()` can't parse the body, so `req.body` is `undefined` (same `TypeError` as #1) | Use Postman's raw → JSON, or `curl -H "Content-Type: application/json"` |
| 6 | **Forgetting the `./` prefix when requiring a local file** | `Error: Cannot find module 'math.js'` (Node looks for an installed *package*) | `require('./math.js')` |
| 7 | **Restarting the server by hand after every change** | Wasted time, and you test stale code | Use a tool such as **nodemon** during development |
| 8 | **Committing the `node_modules` folder to version control** | Giant, slow repositories | Rely on `package.json` and a `.gitignore` containing `node_modules/` |
| 9 | **Two programs trying to listen on the same port at once** | `Error: listen EADDRINUSE: address already in use 0.0.0.0:3000` (the error's `code` is `EADDRINUSE`) | Stop the old process (Ctrl+C in its terminal) or use another port |
| 10 | **Trying to connect to MongoDB before it is running locally**, or a typo in the connection string or database name | A connection error from Mongoose, and saves fail (`500` from the signup route) | Start MongoDB; double-check `mongodb://127.0.0.1:27017/schoolApp` |

### Tip for #7: nodemon

```bash
npm install --save-dev nodemon
npx nodemon server.js
```
Now saving a file restarts the server automatically. (`--save-dev` records it as a development-only dependency.)

### Seeing #3 happen

```js
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) res.status(404).json({ error: 'Task not found' });   // ❌ forgot `return`
  res.json(task);                                                  // ...this still runs!
});
```

The 404 goes out, and then the function keeps going into the next line. With the `return`, the function stops where it should:

```js
  if (!task) return res.status(404).json({ error: 'Task not found' });   // ✅
```

---

⬅️ [Chapter 4 home](README.md) · ➡️ [**Back to the main README**](../README.md)
