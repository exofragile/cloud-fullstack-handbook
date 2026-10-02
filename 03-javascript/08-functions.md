# 8 · Functions 🛠️

> **TL;DR:** A function is a named, reusable recipe. In JavaScript functions are also *values*: you can store them in variables, pass them around and return them.

## 💡 The big idea

A function is a **recipe card**: give it ingredients (parameters), it follows its steps and hands back a dish (the return value). Functions behave much like in other languages, but because they are also objects, they can be **stored in variables, passed as arguments and returned from other functions**. The conventional naming style is camelCase.

We'll go in the order that makes this feel natural:

1. a **named** function (the classic recipe card)
2. a function as a **value** you hand to someone else (a **callback**)
3. the **arrow** shorthand
4. what happens when you call it with the **wrong number of ingredients**

## 🔍 The details

### 1️⃣ Named functions

```js
function square(a) {
  return a * a;
}
console.log(square(4)); // 16
```

A named function is available **anywhere in its scope, even in code written before the function itself**:

```js
foo(); // Bar

function foo() {
  console.log("Bar");
}
```

(This is "hoisting" again: the browser reads the whole file for function declarations first.)

### 2️⃣ Anonymous functions and callbacks

An **anonymous function** is a function with no name of its own, typically passed directly as an argument to another function. This is called a **callback**: "call me back when you're ready". `forEach`, an array method that runs a function once per item, is a common example:

```js
const numbers = [1, 2, 3];
numbers.forEach(function (num) {
  console.log(num * 2); // 2, 4, 6
});

function double(num) {
  console.log(num * 2);
}
numbers.forEach(double); // 2, 4, 6: a named function used as a callback
```

Note `numbers.forEach(double)` has **no parentheses** after `double`. You're handing over the recipe itself; `forEach` will cook it for each item. Writing `double()` would *run it right now* and pass its result instead.

> If a callback is only ever used in that one place, keeping it anonymous is usually clearer; if it might be reused, give it a name.

### 3️⃣ Arrow functions

An **arrow function** is a shorter syntax using `=>` instead of the `function` keyword. It is the common style for short callbacks (`forEach`, `map`, `filter`, event handlers).

```js
const square = (a) => {
   return a * a;
};
console.log(square(4)); // 16

// If the body is a single expression, drop the braces and "return"
const square2 = (a) => a * a;

// With exactly one parameter, the parentheses are optional too
const square3 = a => a * a;

numbers.forEach((num) => {
  console.log(num * 2); // 2, 4, 6
});
```

Three levels of shortening, from longest to shortest:

| Form | Code |
|---|---|
| Classic | `function square(a) { return a * a; }` |
| Arrow, full | `const square = (a) => { return a * a; };` |
| Arrow, short | `const square = a => a * a;` |

### 4️⃣ Calling with the wrong number of arguments

When calling a function, the runtime **does not throw an error** for the wrong number of arguments; extra ones are ignored and missing ones become `undefined`. It is up to the developer to make sure a function is called correctly.

```js
function printValue(a) {
  console.log(a);
}
printValue("Hello World"); // Hello World
printValue();              // undefined
printValue(1, 2, 3);       // 1 (the extra arguments are simply ignored)
```

### Bonus: `this` in arrow functions vs regular functions

You'll often see this said: *"`this` behaves differently inside an arrow function than inside a regular function. It matters once you attach methods to objects."*

- A **regular function** gets its own `this`, which depends on **how it is called**. Called as `workshop.describe()`, `this` is `workshop`.
- An **arrow function has no `this` of its own**: it uses the `this` of the code **around** it.

```js
const workshop = {
  name: "Introduction to AWS",
  describeRegular: function () {
    return this.name;          // `this` is workshop
  },
  describeArrow: () => {
    return typeof this;        // `this` is NOT workshop (it's whatever surrounds the object)
  }
};
console.log(workshop.describeRegular()); // Introduction to AWS
console.log(workshop.describeArrow());   // "object" in Node, but it is not `workshop`
```

Practical rule: **use regular function (or method shorthand) syntax for object methods; use arrow functions for short callbacks.** Arrows are also handy *inside* a method: `[1].map(() => this.name)` keeps the method's `this`, while a regular function callback inside would lose it.

## 🛠️ Try it — Exercise 8

1. **Write a named function that doubles a number, then rewrite it as an arrow function on one line.**
   ```js
   function double(n) { return n * 2; }
   const doubleArrow = n => n * 2;
   console.log(double(4), doubleArrow(4)); // 8 8
   ```
2. **Pass an anonymous arrow function to `numbers.map(...)` to build a new array of the squares. Compare it with writing the same thing using a named function passed by reference.**
   ```js
   const numbers = [1, 2, 3];
   console.log(numbers.map(n => n * n));   // [ 1, 4, 9 ]  — anonymous, defined in place

   function square(n) { return n * n; }
   console.log(numbers.map(square));       // [ 1, 4, 9 ]  — named, passed by reference (no parentheses)
   ```
   Same result. The anonymous version is shorter if you use it once; the named one is reusable.
3. **Call a function with too few and then too many arguments and observe what happens to the missing and the extra ones.**
   ```js
   function add(a, b) { return a + b; }
   console.log(add(1));        // NaN   — b is undefined, and 1 + undefined = NaN
   console.log(add(1, 2, 3));  // 3     — the third argument is silently ignored
   ```
4. **Look up why `this` behaves differently inside an arrow function than inside a regular function.** See the "Bonus" section above: an arrow function borrows `this` from its surroundings instead of getting its own.

## ⚠️ Watch out

- Writing `fn()` when you meant to pass `fn` (calling it instead of handing it over).
- Using an arrow function as an object method and expecting `this` to be the object.

## 📚 Go deeper

- [W3Schools – JS Functions](https://www.w3schools.com/js/js_functions.asp) · [Arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)
- [MDN – Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

⬅️ [7 · Conditionals and loops](07-conditionals-and-loops.md) · ➡️ Next: [**9 · Error handling**](09-error-handling.md)
