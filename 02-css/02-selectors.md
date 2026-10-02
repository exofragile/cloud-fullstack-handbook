# 2 · Selectors 🎯

> **TL;DR:** A selector chooses *which* elements a rule applies to. It reuses the tag names, classes and ids you wrote in HTML.

## 💡 The big idea

Selectors are like **addressing a crowd**: "Everyone!" (`*`), "All teachers!" (element), "Anyone wearing a red badge!" (class), "You — Sara, passport 123!" (id). The more precise your address, the fewer people respond.

## 🔍 The details

| Selector | Example | Selects |
|---|---|---|
| Element | `p { }` | Every `<p>` element |
| Class | `.workshop { }` | Every element with `class="workshop"` |
| ID | `#register { }` | The one element with `id="register"` |
| Multiple classes | `.workshop.featured { }` | Elements that have **both** classes (no space between!) |
| Group | `h1, h2, h3 { }` | All the listed elements |
| Descendant | `nav a { }` | Every `<a>` **anywhere inside** a `<nav>` |
| Child | `ul > li { }` | `<li>` elements that are **direct children** of a `<ul>` |
| Attribute | `input[type="email"] { }` | Inputs whose `type` is `email` |
| Pseudo-class | `a:hover { }` | A link while the mouse is over it |

```css
/* element selector: every <h1> and <ul> */
h1 {
  color: #1f3864;
}

ul {
  list-style: none;
  padding: 0;
}

/* class selector: every element with class="workshop" */
.workshop {
  border-left: 4px solid #2f6dbf;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

/* id selector: the one element with id="register" */
#register {
  background-color: #e8f1fb;
  padding: 1rem;
}

/* pseudo-class: a link while the mouse is over it */
a:hover {
  color: #c2410c;
}
```

**Result:**

![A page with a navy heading, a list of three items with blue left borders, and a light-blue Register box containing a link](../assets/css-selectors-result.png)

Hover over the link in your own browser to see it turn orange.

### Descendant vs. child (a common confusion)

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
  </ul>
</nav>
```

- `nav a` matches the link (it's *somewhere* inside `nav`, however deep).
- `nav > a` would match **nothing** here (the `<a>` is not a *direct* child of `<nav>`).

### Prefer classes to ids for styling

An `id` must be unique, and its **high specificity** (see [Lesson 5](05-the-cascade.md)) makes rules harder to override. Classes also become the **link to JavaScript** later: a script adds or removes a class, and CSS does the rest.

## 🛠️ Try it — Exercise 2

1. **Style all `<h2>` elements with one colour,** then give only the `<h2>` with `id="workshops"` a different colour.
   ```css
   h2 { color: #1f3864; }
   #workshops { color: #c2410c; }
   ```
   *You should see:* every `h2` navy except "Upcoming Workshops", which is orange. The id selector is more specific, so it wins.
2. **Add a class such as `highlight` to two different elements** and style it. Then style `.workshop.featured` differently from `.workshop`.
   ```css
   .highlight { background-color: #fff3bf; }
   .workshop { border: 1px solid #d0d7e2; }
   .workshop.featured { border: 2px solid #1f5fbf; }
   ```
3. **Use `nav a:hover` to underline menu links.** Then look up `:focus` and use it on `input` so the field you are typing in stands out.
   ```css
   nav a:hover { text-decoration: underline; }
   input:focus { outline: 3px solid #f59e0b; }
   ```
   `:focus` applies to whichever element currently has keyboard focus, so it also helps keyboard users see where they are.
4. **Open DevTools, select an element and read the Styles pane.** *Which rules apply to it, and in what order are they listed?* The Styles pane lists matching rules with the **most important (winning) rule at the top**, then the ones it overrides below, with overridden declarations crossed out. Each rule shows the file and line it came from.

## ⚠️ Watch out

- Forgetting the `.` in a class selector or the `#` in an id selector.

## 📚 Go deeper

- [W3Schools – CSS Selectors](https://www.w3schools.com/css/css_selectors.asp)
- [MDN – CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)

---

⬅️ [1 · Adding CSS](01-adding-css.md) · ➡️ Next: [**3 · Colours, text and units**](03-colors-text-and-units.md)
