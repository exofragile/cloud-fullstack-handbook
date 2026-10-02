# Chapter 3 · Common mistakes 🚧

| # | Mistake | Why it hurts | The fix |
|---|---|---|---|
| 1 | **Linking `app.js` without `defer` and before the HTML it targets** | `querySelector` runs before the element exists and returns `null` | Add `defer` in `<head>`, or put the `<script>` at the end of `<body>` |
| 2 | **Calling a method on `null`** (a `querySelector` that matched nothing) | `TypeError: Cannot read properties of null` | Check the selector spelling (`#` or `.`?) and when the script runs |
| 3 | **Confusing `=` (assignment) with `==` or `===` (comparison)** inside an `if` | `if (x = 5)` assigns 5 and is always truthy | Use `===` to compare |
| 4 | **Forgetting `await`** on a `fetch` or on `response.json()` | You log a `Promise { <pending> }` object instead of the data | Add `await` (inside an `async` function) |
| 5 | **Assuming a non-2xx response is an error `fetch` will catch** | `fetch` resolves normally on 404/500 | Check `response.ok` (or `response.status`) |
| 6 | **Using `innerHTML` with data that came from a user** | Opens the door to **XSS** attacks | Use `textContent`, or build elements with `createElement` |
| 7 | **Forgetting `event.preventDefault()`** in a `submit` handler | The page reloads anyway and your code's work vanishes | Call it first thing in the handler |
| 8 | **Comparing objects or arrays with `===`** and expecting `true` for two separately created ones with the same contents | It compares **references**, not contents | Compare specific properties, or compare `JSON.stringify` results for simple data |
| 9 | **Mutating a `const` array or object and being surprised that it is allowed, or trying to reassign one and being surprised that it is not** | `const` locks the *variable*, not the contents | `push`/edit freely; to replace the whole thing use `let` |

### Example for #8

```js
console.log([1] === [1]);        // false — two different arrays
console.log({a: 1} === {a: 1});  // false — two different objects
const x = [1]; const y = x;
console.log(x === y);            // true — the same array (same reference)
```

---

⬅️ [Chapter 3 home](README.md) · ➡️ [**Chapter 4: Node.js, Express & REST →**](../04-nodejs-express-rest/README.md)
