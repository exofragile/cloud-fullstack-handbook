# 1 · Adding JavaScript to a page 🔌

> **TL;DR:** Put your code in an external `.js` file and load it with `<script src="…" defer>` in the `<head>`.

## 💡 The big idea

Just like CSS, there are three ways to connect JavaScript to a page: **inline**, **internal** and **external**. As with CSS, **external** JavaScript is the recommended way: it keeps the page and the script in separate files (tidy, reusable, cacheable).

## 🔍 The details

An external script can be referenced in `<head>` **or** at the end of `<body>`:

```html
<!-- In <head>, with defer -->
<head>
  <title>My Web Page</title>
  <script src="js/app.js" defer></script>
</head>

<!-- Or just before </body>, no attribute needed -->
<body>
  <h1>Hello World</h1>
  <script src="js/app.js"></script>
</body>
```

Both work for the same reason: **the script must run after the HTML elements it wants to use exist.** `defer` says "download now, run after the page is parsed". Putting the script at the very end of `<body>` achieves the same, because everything above it has already been read.

| Method | Where the code lives | When to use it |
|---|---|---|
| **External** | A separate `.js` file, linked with `<script src="...">` | **Almost always.** |
| **Internal** | Directly inside a `<script>` element in the page | A quick demo or a single throwaway page |
| **Inline** | Inside an HTML attribute such as `onclick` | **Not recommended**, though you will see it on buttons in older code |

```html
<!-- Internal -->
<script>
  alert("This page has loaded!");
</script>

<!-- Inline -->
<button onclick="alert('You clicked the button!')">Click Me</button>
```

## 🛠️ Try it — Exercise 1

1. **Create `js/app.js` containing `console.log("Hello from app.js");`. Link it in `<head>` with `defer`, save, refresh, and check the Console tab (F12) in DevTools.**
   ```html
   <script src="js/app.js" defer></script>
   ```
   **You should see:** `Hello from app.js` in the Console, with the file name and line number (`app.js:1`) on the right. Clicking that link jumps to the source.
2. **Remove `defer` and move the `<script>` to the end of `<body>` instead. Does the console output change?**
   **No — the output is the same.** Both approaches run the code after the HTML above it exists. (If you had left the script in `<head>` *without* `defer`, it would run before the `<body>` existed. `console.log` wouldn't care, but any code that looks up an element would fail; you'll see that in [Lesson 11](11-working-with-the-dom.md).)

## ⚠️ Watch out

- A wrong path in `src`, so nothing runs (look for a 404 in the Network tab).
- Putting a script in `<head>` without `defer` when it needs page elements.

## 📚 Go deeper

- [W3Schools – JS Where To](https://www.w3schools.com/js/js_whereto.asp)
- [MDN – `<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) · [Learn JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

---

⬅️ [Chapter 3 home](README.md) · ➡️ Next: [**2 · Syntax and logging**](02-syntax-and-logging.md)
