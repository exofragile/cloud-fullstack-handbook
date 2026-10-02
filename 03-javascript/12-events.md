# 12 · Events ⚡

> **TL;DR:** An event is something that happens (a click, a keystroke, a form submit). `addEventListener` says "when *this* happens to *that* element, run *this* function".

## 💡 The big idea

A page becomes interactive by **responding to events**: user actions such as a click, a keystroke or a form submission. Every HTML element can trigger several kinds of events.

Think of a **doorbell**: the bell (the element) can ring (the event). `addEventListener` is you wiring the bell to a particular action: "when it rings, go answer the door."

## 🔍 The details

`addEventListener` connects an event to a function: first the **event name** (`'click'`, `'submit'`, and others), then the **function** to run.

```js
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  console.log('Button clicked');
});
```

The function you pass is a **callback** ([Lesson 8](08-functions.md)): you don't call it, the browser does, each time the event happens.

### The event object

The function receives an **event object** with information about what happened, for example which exact element was clicked:

```js
btn.addEventListener('click', (event) => {
  console.log(event.target); // the exact element clicked
});
```

### Handling form submissions

For HTML forms, the **default behaviour** reloads the page and sends the request to the form's `action` URL. To handle a submission with JavaScript instead, listen for the `submit` event and call the event's `preventDefault()` method, which is specific to cancellable events like this one.

```html
<form id="myForm">
  <input id="nameInput" />
  <button type="submit">Submit</button>
</form>
```

```js
const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();               // stop the page from reloading
  const input = document.querySelector('#nameInput');
  console.log(input.value);             // log the user's input
});
```

Notice you listen on the **form** for `submit`, not on the button for `click`: that way pressing **Enter** in a field works too.

### Some common events

| Event | Fires when… | Typical element |
|---|---|---|
| `click` | Something is clicked | buttons, links |
| `submit` | A form is submitted | `<form>` |
| `input` | The value of a field changes (every keystroke) | `<input>`, `<textarea>` |
| `change` | A field's value is committed (e.g. it loses focus, a select changes) | `<select>`, `<input>` |

## 🛠️ Try it — Exercise 12

1. **Add a `click` listener to a button that logs a message, then one that logs `event.target`.**
   ```js
   btn.addEventListener('click', () => console.log('Button clicked'));
   btn.addEventListener('click', (event) => console.log(event.target));
   ```
   Both listeners run, in the order you added them. `event.target` prints the `<button>` element, which you can hover to highlight on the page.
2. **Add a `submit` listener to a form with `preventDefault()`, and log the value of one of its inputs instead of letting the page reload.** (This is the `myForm` example above.) Type "Sara", press Enter or click Submit: the Console shows `Sara`, and the page stays put.
3. **Add a listener for `input` on a text field that logs its value on every keystroke. Compare this with only reading the value on submit.**
   ```js
   document.querySelector('#nameInput').addEventListener('input', (event) => {
     console.log(event.target.value);   // S, Sa, Sar, Sara
   });
   ```
   `input` fires on every keystroke so you can react live (character counters, instant search). Reading on `submit` gives you only the final value, once.
4. **Remove `preventDefault()` and submit the form. What does the browser do, and where does it try to send the data?**
   The page **reloads**. The browser performs the form's default behaviour: it sends the data to the form's `action` URL (with no `action`, that's the **current page's own URL**) using the `method` (default `get`). With `get` the fields are appended to the address bar as `?name=value`. Note that `<input id="nameInput" />` has **no `name` attribute**, so nothing is appended at all — a nice reminder of the HTML-chapter rule that inputs without a `name` are never sent.

## ⚠️ Watch out

- Forgetting `event.preventDefault()` in a `submit` handler and watching the page reload anyway.
- Writing `btn.addEventListener('click', handler())`. The parentheses call the function immediately.

## 📚 Go deeper

- [W3Schools – JS Events](https://www.w3schools.com/js/js_events.asp)
- [MDN – `addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

---

⬅️ [11 · Working with the DOM](11-working-with-the-dom.md) · ➡️ Next: [**13 · Talking to a server**](13-talking-to-a-server.md)
