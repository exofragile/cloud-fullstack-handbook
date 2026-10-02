# 4 · Types: primitives 🧱

> **TL;DR:** JavaScript has simple "primitive" types (string, number, boolean, undefined, null…) that are copied by value.

## 💡 The big idea

JavaScript has two categories of types. **Primitives** are **copied and stored by value**: when you assign one to a new variable or pass it to a function, you get an **independent copy**. (Like photocopying a note: scribbling on the copy doesn't change the original.) The other category, objects, is next lesson.

## 🔍 The details

| Type | Example | Notes |
|---|---|---|
| String | `"hi"`, `'hi'`, `` `hi` `` | Double or single quotes work the same |
| Number | `42`, `3.14` | Integers and floats share **one** type. `NaN` and `Infinity` are also of type number |
| Boolean | `true`, `false` | The result of a logical expression ([Lesson 7](07-conditionals-and-loops.md)) |
| Undefined | `undefined` | A variable, property or return value that has **no value yet** |
| Null | `null` | A value the developer sets **on purpose** to say "no value here" |
| BigInt, Symbol | — | Less common; see the resources below |

```js
const age = 20;
const name = "John";
console.log(`${name} ${age}`); // John 20

const int = 42;
const float = 3.14;
console.log(typeof int, typeof float); // number number
console.log(10 / 4);                   // 2.5 (no integer division)
console.log(typeof NaN);               // number ("Not a Number" is still type number)

const isAdult = age >= 18;
console.log(isAdult, typeof isAdult);  // true boolean
```

### `undefined` vs `null` 🤔

```js
let x;
console.log(x); // undefined: declared but not yet assigned

const user = { name: "John" };
console.log(user.age); // undefined: the property does not exist

function doNothing() {}
console.log(doNothing()); // undefined: no return statement

let selectedUser = null; // no user selected yet, on purpose
console.log(selectedUser === undefined); // false: null and undefined are different types
```

Rule of thumb: **`undefined` = "nobody has given this a value yet"** (JavaScript's default). **`null` = "I deliberately set this to empty"** (your choice).

> **Note:** the `typeof` operator outputs a value's type.

## 🛠️ Try it — Exercise 4

1. **Log `typeof` for a string, a number, a boolean, `undefined`, `null`, an object, an array and a function. Note which ones surprise you.**
   ```js
   console.log(typeof "hi");        // string
   console.log(typeof 42);          // number
   console.log(typeof true);        // boolean
   console.log(typeof undefined);   // undefined
   console.log(typeof null);        // object   ← surprise!
   console.log(typeof {});          // object
   console.log(typeof []);          // object   ← surprise! (arrays are objects)
   console.log(typeof function(){}) // function
   ```
   Two surprises: **`typeof null` is `"object"`** (a famous historical quirk of the language, not a sign that `null` is an object), and **arrays report `"object"`** because they are a special kind of object (use `Array.isArray(x)` to tell them apart).
2. **Write an expression that produces `NaN` on purpose, for example `"abc" * 2`. Check its `typeof`.**
   ```js
   const result = "abc" * 2;
   console.log(result, typeof result); // NaN number
   ```
   You can't multiply text, so the result is "Not a Number" — yet its type is still `number`.

## ⚠️ Watch out

- Assuming `typeof null` means "object".
- Mixing up `undefined` (no value yet) and `null` (deliberately empty).

## 📚 Go deeper

- [MDN – Primitive (glossary)](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

---

⬅️ [3 · Variables](03-variables.md) · ➡️ Next: [**5 · Objects**](05-objects.md)
