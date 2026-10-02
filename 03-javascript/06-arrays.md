# 6 · Arrays 📋

> **TL;DR:** An array is an ordered list. Items are numbered from **0**. Arrays come with a toolbox of methods, and `map`, `filter` and `find` are the ones you'll use most.

## 💡 The big idea

An array is a **row of numbered lockers**, starting at locker **0**. Technically, arrays are a special kind of object: their keys are a sequential list of numbers rather than named properties, and values are accessed with bracket notation instead of dot notation. They are **0-indexed**, so the first element is at index `0`.

```js
const fruits = ['tomato', 'peach', 'apple'];
console.log(Object.keys(fruits)); // ['0', '1', '2']
console.log(fruits.length);       // 3

console.log(fruits[1]); // peach
console.log(fruits[3]); // undefined: no element at that index yet
```

> 🧭 **How this lesson is organised:** the source material lists the methods in one run. Here I've grouped them by **what you're trying to do**, which makes them easier to remember. Nothing has been left out.

## 🔍 The details

### 1️⃣ Changing a slot directly (and the "gap" trap)

Assigning past the current length grows the array, leaving **empty items** in between:

```js
fruits[1] = "orange";
fruits[3] = "banana";
fruits[5] = "strawberry";
console.log(fruits.length); // 6
console.log(fruits);
// [ 'tomato', 'orange', 'apple', 'banana', <1 empty item>, 'strawberry' ]
```

Index 4 was skipped, so there's a hole. Holes are rarely what you want, so prefer `push` (below) for adding.

### 2️⃣ Adding and removing at the **ends** (queue and stack)

Arrays can grow and shrink from both ends, which lets one act as a **queue** (first in, first out) or a **stack** (last in, first out).

```js
const arr = ['one', 'two', 'three'];
arr.pop();              // removes from the end
console.log(arr);       // ['one', 'two']
arr.push('four');       // adds to the end
console.log(arr);       // ['one', 'two', 'four']
arr.shift();            // removes from the start
console.log(arr);       // ['two', 'four']
arr.unshift('five');    // adds to the start
console.log(arr);       // ['five', 'two', 'four']
```

| | End | Start |
|---|---|---|
| **Add** | `push` | `unshift` |
| **Remove** | `pop` | `shift` |

Memory trick: **push/pop** are the "plate stack" pair at the end (you push a plate on, pop one off). **shift/unshift** do the same at the front.

### 3️⃣ Removing from the **middle**

To remove an item from the middle and have the length **shrink** to match, use `filter` (which builds a **new** array) or `splice` (which edits the array **in place**). `delete` alone would leave an empty slot instead of shrinking the array.

```js
const newFruits = fruits.filter(a => a !== 'tomato');
console.log(newFruits); // [ 'orange', 'apple', 'banana', 'strawberry' ]

delete newFruits[2];
console.log(newFruits); // [ 'orange', 'apple', <1 empty item>, 'strawberry' ]

newFruits.splice(1, 2); // start at index 1, remove 2 items
console.log(newFruits); // [ 'orange', 'strawberry' ]
```

(`filter` also quietly skipped the empty slot in `fruits` when it built the new array.)

| Tool | New array or in place? | Leaves a gap? |
|---|---|---|
| `filter(cond)` | New array | No |
| `splice(start, count)` | In place | No |
| `delete arr[i]` | In place | **Yes** ⚠️ |

### 4️⃣ Looking things up and transforming

| Method | What it does | Example |
|---|---|---|
| `map` | Builds a **new array** by transforming every item | `[1,2,3].map(n => n * 2)` → `[2,4,6]` |
| `find` | Returns the **first** item matching a condition, or `undefined` | `fruits.find(f => f.startsWith("a"))` |
| `includes` | Checks whether a value is present | `fruits.includes("apple")` → `true` |
| `join` | Joins every item into **one string** | `fruits.join(", ")` |
| `forEach` | Runs a function once per item (**no new array**) | `fruits.forEach(f => console.log(f))` |
| `filter` | Keeps only the items passing a test (new array) | `[1,2,3,4].filter(n => n > 2)` → `[3,4]` |

Picture a factory conveyor belt: `map` **converts** each item, `filter` **rejects** some, `find` **grabs the first match**, `forEach` just **does something** with each one, `join` **packs** them into one box.

> 💡 `map` and `filter` are especially useful once you start rendering data from a server: a `fetch` response often arrives as an array of objects that you `map` straight into HTML elements ([Lesson 13](13-talking-to-a-server.md)).

## 🛠️ Try it — Exercise 6

1. **Build an array of three workshop names. Add a fourth with `push`, then remove the first with `shift`.**
   ```js
   const names = ["Introduction to AWS", "Getting Started with Google Cloud", "Cloud Security Basics"];
   names.push("Networking Basics");
   names.shift();
   console.log(names);
   // [ 'Getting Started with Google Cloud', 'Cloud Security Basics', 'Networking Basics' ]
   ```
2. **Remove an item from the middle with `splice`. Then try `delete` on a middle item of a different array and compare the results with `console.log`.**
   ```js
   const a = [1, 2, 3, 4];
   a.splice(1, 1);
   console.log(a);          // [ 1, 3, 4 ]   — closed up, length 3

   const b = [1, 2, 3, 4];
   delete b[1];
   console.log(b, b.length); // [ 1, <1 empty item>, 3, 4 ] 4  — a hole, length still 4
   ```
3. **Use `map` to build an array of just the workshop names from an array of workshop objects. Use `find` to get the one whose level is `"Intermediate"`.**
   ```js
   const workshops = [
     { name: "Introduction to AWS", level: "Beginner" },
     { name: "Getting Started with Google Cloud", level: "Beginner" },
     { name: "Cloud Security Basics", level: "Intermediate" }
   ];
   console.log(workshops.map(w => w.name));
   // [ 'Introduction to AWS', 'Getting Started with Google Cloud', 'Cloud Security Basics' ]
   console.log(workshops.find(w => w.level === "Intermediate"));
   // { name: 'Cloud Security Basics', level: 'Intermediate' }
   ```
4. **Assign past an array's current length and log it. What do the empty items look like in the console?**
   ```js
   const c = [];
   c[3] = "x";
   console.log(c, c.length);   // [ <3 empty items>, 'x' ] 4
   ```
   Chrome and Node print `<3 empty items>` (Chrome shows `empty × 3`): they're **not** the value `undefined`, they're genuine holes where no element exists at all.

## ⚠️ Watch out

- Using `delete` on an array item (leaves a hole).
- Forgetting arrays start at index 0.

## 📚 Go deeper

- [W3Schools – JS Arrays](https://www.w3schools.com/js/js_arrays.asp)
- [MDN – Array reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

⬅️ [5 · Objects](05-objects.md) · ➡️ Next: [**7 · Conditionals and loops**](07-conditionals-and-loops.md)
