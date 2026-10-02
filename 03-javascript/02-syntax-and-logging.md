# 2 · Syntax and logging 🪵

> **TL;DR:** End statements with `;`. Use the `console` object to print things while you develop.

## 💡 The big idea

Semicolons are like **full stops** in sentences. JavaScript can often guess where they belong, but when it guesses wrong the results are baffling. And the `console` is your **developer's diary**: the place your program can quietly write notes that only you see.

## 🔍 The details

### Semicolons

In JavaScript, all expressions should end with a semicolon `;`. This signifies the end of an expression. However, this can sometimes be ignored, because the runtime automatically inserts them (called *automatic semicolon insertion*). But **this is not recommended**, as it can cause the script to behave unexpectedly.

### Logging with `console`

JavaScript uses the `console` object for printing. This is mainly for developers and doesn't take the end user into account. Output shows in the browser's developer tools (**Console** tab, usually **F12**), or in the terminal when running with Node.js. `console.log` is the most common.

```js
const user = { name: "John", age: 25 };
console.log(user);                    // { name: 'John', age: 25 }
console.log("Name:", user.name);      // Name: John
console.log(`Age: ${user.age}`);      // Age: 25

console.info("Server started");       // informational message
console.warn("Disk space low");       // warning (yellow in the browser)
console.error("Failed to load data"); // error (red in the browser)

console.table([
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
]);                                   // prints an array of objects as a table

console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop");              // loop: 2.5ms (time varies)
```

| Method | Use it for |
|---|---|
| `console.log(...)` | General output. Pass several values separated by commas |
| `console.info(...)` | Informational messages |
| `console.warn(...)` | Warnings (yellow in the browser) |
| `console.error(...)` | Errors (red in the browser) |
| `console.table(...)` | An array of objects as a neat table |
| `console.time("label")` / `console.timeEnd("label")` | Measure how long something takes |

The `` `Age: ${user.age}` `` style is a **template literal**: text in backticks where `${…}` is replaced by the value inside. It's the friendliest way to build strings.

## 🛠️ Try it — Exercise 2

1. **Log a number, a string, an array and an object with `console.log`. Which ones does the console let you expand?**
   ```js
   console.log(42);
   console.log("hello");
   console.log([1, 2, 3]);
   console.log({ name: "John", age: 25 });
   ```
   The **array and the object** have a little ▶ arrow — click to expand and inspect their contents. Numbers and strings are just printed (numbers in blue, strings in the default colour in most browsers).
2. **Try `console.warn` and `console.error`. Where do they appear differently from `console.log` in DevTools?**
   `warn` has a **yellow background** and a warning icon; `error` has a **red background** and an error icon (and usually a stack trace you can expand). You can also filter the Console by level (Errors, Warnings, Info…), which is why picking the right method matters.
3. **Build an array of three objects and print it with `console.table`.**
   ```js
   console.table([
     { name: "Introduction to AWS", date: "12 October" },
     { name: "Getting Started with Google Cloud", date: "19 October" },
     { name: "Cloud Security Basics", date: "26 October" }
   ]);
   ```
   You get a table with an `(index)` column, and one column per property.
4. **Forget a semicolon at the end of a line that is followed by a line starting with `(` or `[`. Refresh and read the error. This is one real case where a missing semicolon changes behaviour.**
   ```js
   const a = 1
   (function () { console.log("hi"); })()
   ```
   JavaScript reads this as `const a = 1(function () {…})()` — "call `1` as a function"! Node reports `TypeError: 1 is not a function` (browsers word it similarly). Likewise:
   ```js
   const a = 5
   [1, 2].forEach(n => console.log(n))
   ```
   is read as `5[1, 2].forEach(…)`, giving `TypeError: Cannot read properties of undefined (reading 'forEach')`. Add the `;` and both work. **This is why the book recommends always writing semicolons.**

## ⚠️ Watch out

- Leaving semicolons out and hoping automatic insertion guesses right.
- Leaving `console.log` calls scattered through finished code.

## 📚 Go deeper

- [MDN – console](https://developer.mozilla.org/en-US/docs/Web/API/console)

---

⬅️ [1 · Adding JavaScript](01-adding-javascript.md) · ➡️ Next: [**3 · Variables**](03-variables.md)
