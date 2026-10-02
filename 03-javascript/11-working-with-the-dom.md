# 11 · Working with the DOM 🧰

> **TL;DR:** Find an element with `querySelector`, change it (text, classes, attributes, style), or create new ones with `createElement` and insert them.

## 💡 The big idea

Three verbs cover almost everything you'll do to a page:

1. **Find** an element (`querySelector`)
2. **Change** it (`textContent`, `classList`, `style`…)
3. **Create / remove** elements (`createElement`, `append`, `remove`)

JavaScript manipulates the page through the DOM, by editing an existing element or by creating a new one. We'll use this running example (from the last lesson):

```html
<div id="box" class="container">
  <p>Hello</p>
  <button id="btn">Click</button>
</div>
```

## 🔍 The details

### 1️⃣ Finding existing elements

The most common way is `document.querySelector`, which accepts **any valid CSS selector**: `#id`, `.class`, a tag name, or a combination such as `div.item:first-child`. (Everything you learned in [CSS Lesson 2](../02-css/02-selectors.md) pays off here!)

```js
const box = document.querySelector('#box');        // by id
const firstItem = document.querySelector('.item'); // by class
const btn = document.querySelector('button');      // by tag
console.log(box); // <div id="box" class="container">...</div>
```

`querySelector` returns the **first** matching element, or **`null`** if nothing matches. `querySelectorAll` returns **all** matches as a **NodeList** (similar to an array, but missing some array methods). It can be looped with `forEach` or `for...of`, or converted to a real array (`Array.from(list)` or `[...list]`) if an array method such as `map` is needed.

```js
const items = document.querySelectorAll('.item'); // NodeList
items.forEach(item => console.log(item.textContent));
```

> 🐛 **The #1 beginner bug:** if your script runs *before* the element exists (a `<script>` in `<head>` without `defer`), `querySelector` returns `null`, and the next line crashes with *"Cannot read properties of null"*. That's the reason for `defer` ([Lesson 1](01-adding-javascript.md)).

### 2️⃣ Editing a node

A node's text, classes, attributes and inline styles can all be read and changed directly:

```js
const box = document.querySelector('#box');
const p = document.querySelector('p');

p.textContent = 'Updated text';          // changes the text

const oldId = box.getAttribute('id');
console.log(oldId);                      // box
box.setAttribute('id', 'newBox');        // change or add an attribute

box.classList.add('active');             // add a class
box.classList.remove('container');       // remove a class
box.classList.toggle('hidden');          // switch a class on/off
box.style.color = 'red';                 // set an inline style directly
```

| You want to… | Use |
|---|---|
| Change the text | `el.textContent = '…'` |
| Read / set an attribute | `el.getAttribute('id')` / `el.setAttribute('id', 'x')` |
| Add / remove a class | `el.classList.add('x')` / `.remove('x')` |
| Flip a class on and off | `el.classList.toggle('x')` |
| Set an inline style | `el.style.color = 'red'` |

**Before and after** (the page, then after `box.style.color = 'red'` and some styling):

| Before | After |
|---|---|
| ![The box with black "Hello" text and a Click button](../assets/js-dom-before.png) | ![The box with red "Hello" text and a Click button](../assets/js-dom-after.png) |

> 💡 **Best practice:** prefer `classList` over `style`. Put the look in CSS (`.active { color: red; }`) and let JS merely switch the class. That keeps design in the stylesheet.

### 3️⃣ Creating and removing elements

Adding a new element to the page takes **three steps**: create it with `document.createElement`, select an existing element as a **reference point**, then **insert** the new one relative to it (as a sibling or child).

```js
const box = document.querySelector('#box'); // reference element
const newP = document.createElement('p');   // created, but not yet on the page
newP.textContent = 'I am new';
newP.setAttribute('id', 'newText');
box.appendChild(newP); // now inserted into the DOM, inside #box

const first = document.createElement('p');
first.textContent = 'I am first';
box.before(first); // inserted as a sibling, right before #box
```

Until you insert it, the new element floats in memory, invisible. Picture building a LEGO piece (create), picking where to attach it (reference), and snapping it on (insert).

| Method | Multiple args? | Strings allowed? | Where it inserts |
|---|---|---|---|
| `appendChild` | No | No | Last child |
| `append` | Yes | Yes | Last child |
| `prepend` | Yes | Yes | First child |
| `before` | Yes | Yes | Sibling, before |
| `after` | Yes | Yes | Sibling, after |

Removing an element uses its own `remove()` method: `newP.remove();`.

### ⚠️ `innerHTML` and safety

You can set `el.innerHTML = '<p>Hi</p>'` to build content from a string, which is quick, but if that string contains **user-provided text**, someone can sneak in markup that runs code (an attack called **XSS**, cross-site scripting). `textContent` treats everything as plain text and is always safe. Rule: **use `textContent` for user data.**

## 🛠️ Try it — Exercise 11

1. **Select an element by id, one by class and one by tag name, and log all three.**
   ```js
   console.log(document.querySelector('#box'));
   console.log(document.querySelector('.container'));
   console.log(document.querySelector('button'));
   ```
2. **Change a paragraph's `textContent`, then add and remove a class from it with `classList`.**
   ```js
   const p = document.querySelector('p');
   p.textContent = 'Updated text';
   p.classList.add('highlight');
   p.classList.remove('highlight');
   ```
   Open the Elements panel while you do this and watch the `class` attribute appear and vanish.
3. **Create a new `<article>`, set its `textContent`, and append it inside a container with `appendChild`. Then insert a second one with `prepend` and compare where it lands.**
   ```js
   const container = document.querySelector('#box');

   const a = document.createElement('article');
   a.textContent = 'Appended';
   container.appendChild(a);          // goes LAST

   const b = document.createElement('article');
   b.textContent = 'Prepended';
   container.prepend(b);              // goes FIRST
   ```
   `b` ends up at the top of the container; `a` at the bottom.
4. **Set `innerHTML` on an element to a string containing a `<script>` tag. Does it run? Look up how browsers handle this case, and why relying on that behaviour would still be unsafe.**
   ```js
   document.querySelector('#box').innerHTML = '<script>alert("hi")<\/script>';
   ```
   **It does not run.** The HTML specification says `<script>` elements inserted via `innerHTML` are *not executed*. **But that does not make `innerHTML` safe:** other tags can carry code in attributes, and those do run, for example `<img src="x" onerror="alert(1)">`. So treat any user-supplied text put into `innerHTML` as dangerous; use `textContent`, or build elements with `createElement`.

## ⚠️ Watch out

- Running the script before the element exists (`null` errors).
- Calling a method on the result of a `querySelector` that matched nothing.
- Putting user input into `innerHTML`.

## 📚 Go deeper

- [MDN – Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) · [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN – `document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

---

⬅️ [10 · The DOM](10-the-dom.md) · ➡️ Next: [**12 · Events**](12-events.md)
