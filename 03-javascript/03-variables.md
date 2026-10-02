# 3 · Variables: `let`, `const` and `var` 📦

> **TL;DR:** Use `const` by default, `let` when the value must change, and avoid `var`.

## 💡 The big idea

A variable is a **labelled box** that holds a value. A variable name can use any letters, digits and underscores, as long as it does **not start with a digit**. There are three ways to declare one, and none of them require stating a type.

| Keyword | Can be reassigned? | Scope | Recommendation |
|---|---|---|---|
| `let` | ✅ Yes | Block (nearest `{}`) | Use when the value must change |
| `const` | ❌ No | Block (nearest `{}`) | **Use by default** |
| `var` | ✅ Yes | Whole function (or global) | Older; avoid |

## 🔍 The details

### `let` — a box you can refill

`let` allows a variable's value **or type** to be changed. It is **block scoped** (belongs to the nearest `{}`).

```js
let x = 10;
console.log(typeof x); // number
x = 20;
console.log(x);        // 20
x = "Hello World";
console.log(typeof x); // string
```

### `const` — a box that is glued shut

`const` prevents the variable **itself** from being reassigned. It is recommended to use `const` by default unless a value requires changing. It is also block scoped.

```js
const x = 10;
x = 20;           // TypeError: Assignment to constant variable.
x = "HELLO";      // TypeError: Assignment to constant variable.
```

⚠️ **But** if a `const` holds an object or array, the *contents* can still change; only the **binding is locked**. (Analogy: the box is glued to the shelf, but you can still rearrange what's inside it.)

```js
const arr = [];
arr.push(1);   // No error: the array itself is not reassigned, only edited.
```

### `var` — the old way

`var` is visible across the whole **function** (or globally) rather than the nearest `{}`. It allows a variable's value to be changed similarly to `let`, however it's older and less recommended due to having different scope behaviour.

### Block scope in pictures

```js
if (true) {
  let a = 1;   // exists only inside these braces
  var b = 2;   // "leaks" out to the whole function
}
console.log(b); // 2
console.log(a); // ReferenceError: a is not defined
```

### Hoisting (why `var` surprises people)

```js
console.log(x); // undefined (var: hoisted, no error)
var x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

`var` declarations are quietly "lifted" to the top of their function (with the value `undefined`), so reading them early doesn't crash but gives a confusing `undefined`. `let` and `const` refuse to be read before their declaration line, which catches mistakes early — a big reason to prefer them.

## 🛠️ Try it — Exercise 3

1. **Declare a variable with `let` inside an `if` block and try to read it outside the block. Then do the same with `var`. Compare the errors.**
   ```js
   if (true) { let a = 1; }
   console.log(a);   // ReferenceError: a is not defined

   if (true) { var b = 2; }
   console.log(b);   // 2 — no error at all!
   ```
   With `let` you get a **ReferenceError**; with `var` there is **no error**, because `var` ignores block boundaries. That's the "different scope behaviour" the lesson warns about.
2. **Declare a `const` array and push two values into it. Then try `arr = []` on the same variable and read the error.**
   ```js
   const arr = [];
   arr.push(1);
   arr.push(2);
   console.log(arr);   // [ 1, 2 ]  — allowed: the array is edited, not replaced
   arr = [];           // TypeError: Assignment to constant variable.
   ```

## ⚠️ Watch out

- Using `var` out of habit.
- Believing `const` makes objects and arrays *frozen* (it doesn't).

## 📚 Go deeper

- [W3Schools – let](https://www.w3schools.com/js/js_let.asp) · [const](https://www.w3schools.com/js/js_const.asp)
- [MDN – let, const and var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

---

⬅️ [2 · Syntax and logging](02-syntax-and-logging.md) · ➡️ Next: [**4 · Primitive types**](04-primitive-types.md)
