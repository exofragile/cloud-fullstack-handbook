# 🧾 Cheat sheet

The whole course on a few screens. Use it for quick look-ups; the lessons have the explanations.

---

## 🧱 HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page title</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <header><h1>Title</h1><nav><ul><li><a href="#x">Link</a></li></ul></nav></header>
  <main>
    <section><h2 id="x">Section</h2><article>…</article></section>
    <aside>…</aside>
  </main>
  <footer>…</footer>
</body>
</html>
```

| Need | Use |
|---|---|
| Link / image | `<a href="…">` / `<img src="…" alt="…">` |
| Lists | `<ul>` or `<ol>` + `<li>` |
| Group / inline wrap | `<div>` / `<span>` (when nothing semantic fits) |
| Table | `<table><thead><tr><th>…</th></tr></thead><tbody><tr><td>…</td></tr></tbody></table>` |
| Media | `<video controls src="…">`, `<audio controls src="…">` |
| Figure + caption | `<figure><img …><figcaption>…</figcaption></figure>` |

**Form:** `<form action="/x" method="post">` → `<label for="a">` + `<input id="a" name="a" type="text|email|number|checkbox|radio" required>`, `<select><option value="">`, `<textarea>`, `<button type="submit">`. **No `name` = not sent.**

**Void elements (no closing tag):** `img br hr input meta link`.

---

## 🎨 CSS

```css
selector { property: value; }
```

| Selector | Matches |
|---|---|
| `p` | all `<p>` |
| `.card` | `class="card"` |
| `#intro` | `id="intro"` |
| `.a.b` | has both classes |
| `h1, h2` | either |
| `nav a` | any `<a>` inside `nav` |
| `ul > li` | direct children |
| `input[type="email"]` | attribute |
| `a:hover` | pseudo-class |

**Specificity** (id-class-element): `p` = 0-0-1 · `.x` = 0-1-0 · `#x` = 1-0-0 · inline beats all · tie → later wins.

**Box model:** content → padding → border → margin. Always start with `* { box-sizing: border-box; }`.
`margin: 10px 20px 30px 40px` = **T R B L**. Centre a block: `margin: 0 auto`.

**Units:** `px` fixed · `rem` root font size (16px) · `em` own font size · `%` of parent · `vw/vh` viewport.
**Colours:** `navy` · `#1f3864` · `rgb(31,56,100)` · `hsl(218,53%,26%)`.

| Layout | Cheat |
|---|---|
| `display` | `block` · `inline` · `inline-block` · `none` (removed) — `visibility:hidden` keeps space |
| `position` | `static` · `relative` · `absolute` (to nearest positioned ancestor) · `fixed` · `sticky` |
| **Flexbox** (1-D) | `display:flex; flex-direction:row\|column; justify-content` (main axis) `align-items` (cross axis) `gap; flex-wrap; flex:1` |
| **Grid** (2-D) | `display:grid; grid-template-columns: repeat(3,1fr); gap:1rem; grid-column:1 / -1` · areas: `grid-template-areas` + `grid-area` |
| **Responsive** | viewport meta · `img{max-width:100%;height:auto}` · `@media (max-width:600px){ … }` · mobile first = `min-width` |

---

## ⚡ JavaScript

```js
const a = 1;            // default
let b = 2;              // changes
// var → avoid
typeof x                // "string" "number" "boolean" "undefined" "object" (null & arrays too!) "function"
```

| Topic | Cheat |
|---|---|
| Print | `console.log / info / warn / error / table / time` |
| Equality | use `===` / `!==` |
| Objects | `o.k` · `o["k k"]` · `o[variable]` · `delete o.k` · `"k" in o` |
| Arrays | `push/pop` (end) · `unshift/shift` (start) · `splice(i,n)` · `filter` · `map` · `find` · `includes` · `join` · `forEach` |
| Branching | `if / else if / else` · `cond ? a : b` · `switch` (+`break`) |
| Loops | `for` · `while` · `do…while` · `for…of` (values) · `for…in` (keys) |
| Functions | `function f(a){}` · `const f = a => a*a` · callbacks: pass `f`, not `f()` |
| Errors | `try { } catch (e) { e.name; e.message } finally { }` · `throw new Error("…")` |

**DOM**
```js
const el = document.querySelector('#id');      // null if none · querySelectorAll → NodeList
el.textContent = 'text';
el.classList.add('x') / .remove('x') / .toggle('x');
el.setAttribute('id','y');  el.getAttribute('id');  el.style.color = 'red';
const n = document.createElement('p');  box.append(n);   // appendChild · prepend · before · after
n.remove();
```
**Events**
```js
el.addEventListener('click', (event) => { event.target; });
form.addEventListener('submit', (e) => { e.preventDefault(); /* use input.value */ });
```
**fetch**
```js
async function go() {
  try {
    const res = await fetch(url);                 // GET by default
    if (!res.ok) { console.log(res.status); return; }
    const data = await res.json();
  } catch (err) { /* network failure */ }
}
await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(obj) });
```
**JSON:** double quotes everywhere · no trailing comma · no comments · `JSON.parse(text)` ↔ `JSON.stringify(obj)`.

---

## 🍳 Node.js · Express · REST

```bash
node -v && npm -v          # check install
node file.js              # run a file        node (alone) = REPL
npm init -y               # create package.json
npm install express       # add a package    (don't commit node_modules/)
```

| Built-in | For |
|---|---|
| `fs` | `readFileSync(p,'utf8')` · `writeFileSync(p,data)` |
| `path` | `path.join(__dirname,'data','x.txt')` |
| `process` | `process.argv` · `process.env.NAME` |
| `http` | `http.createServer((req,res)=>{…}).listen(3000)` |

**Modules:** `module.exports = fn;` ↔ `const fn = require('./file.js');` (`./` = local file).

**Express skeleton**
```js
const express = require('express');
const app = express();
app.use(express.json());                 // before routes!
app.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);      // params are strings
  if (!found) return res.status(404).json({ error: 'Not found' });
  res.json(found);
});
app.listen(3000);
```

| REST | Request | Typical status |
|---|---|---|
| Read all | `GET /tasks` | 200 |
| Read one | `GET /tasks/1` | 200 / 404 |
| Create | `POST /tasks` | 201 |
| Update | `PUT /tasks/1` | 200 / 404 |
| Delete | `DELETE /tasks/1` | 204 |

**`req`:** `body` · `params` · `query` · `headers` · `method` · `url`  ·  **`res`:** `json()` · `send()` · `status()` · `end()` · `set()` · `redirect()`

**Mongoose**
```js
mongoose.connect('mongodb://127.0.0.1:27017/schoolApp');
const User = mongoose.model('User', new mongoose.Schema({ name: String, email: String }));
await new User({ name, email }).save();
```

**Test:** Postman (visual) · `curl -X POST -H "Content-Type: application/json" -d '{"title":"x"}' URL`

---

## 🚑 Quick troubleshooting

| Symptom | First thing to check |
|---|---|
| CSS/JS has no effect | Path in `<link>`/`<script>`; Network tab for 404; hard refresh |
| `Cannot read properties of null` | Script ran before the element existed → add `defer` |
| Page reloads on submit | Missing `event.preventDefault()` |
| Logged `Promise { <pending> }` | Missing `await` |
| `req.body` undefined | `express.json()` missing, or no `Content-Type: application/json` |
| `Cannot find module 'x'` | Forgot `./` for a local file, or forgot `npm install` |
| `EADDRINUSE` | Another process is on that port |
| `fetch` blocked (CORS) | Page and API are on different origins/ports |

---

⬅️ [Back to the main README](../README.md)
