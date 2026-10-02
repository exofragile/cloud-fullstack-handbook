# 1 · Adding CSS to a page 🔗

> **TL;DR:** There are three ways to connect CSS to HTML: inline, internal and external. Almost always, use **external**.

## 💡 The big idea

Imagine giving styling instructions to a decorator. You could (a) scribble a note on one chair, (b) pin a page of notes inside one room, or (c) hand over a **style guide** that every room in the building follows. Option (c) is an external stylesheet: change it once and everything updates.

## 🔍 The details

| Method       | Where the CSS lives                            | When to use it                            |
| ------------ | ---------------------------------------------- | ----------------------------------------- |
| **Inline**   | In the `style` attribute of one element        | Quick tests only. It is hard to maintain. |
| **Internal** | In a `<style>` element in the `<head>`         | A single page or a demo.                  |
| **External** | In a separate `.css` file linked with `<link>` | **Almost always.**                        |

```html
<!-- 1. Inline: one element only -->
<p style="color: navy;">Hello</p>

<!-- 2. Internal: inside the <head> of one page -->
<style>
  p {
    color: navy;
  }
</style>

<!-- 3. External: a separate file shared by every page -->
<link rel="stylesheet" href="styles.css" />
```

### Using an external stylesheet

Create a file called `styles.css` **next to your HTML file** and link it inside `<head>`. The `href` works like `src` and `href` in HTML: it is **relative to the HTML file**.

```html
<head>
  <meta charset="UTF-8" />
  <title>Cloud Computing Events</title>
  <link rel="stylesheet" href="styles.css" />
</head>
```

```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
}
```

`/* … */` is a CSS **comment**. (CSS has no `//` comments.)

## 🛠️ Try it — Exercise 1

_All exercises are sequential from the previous chapter._

1. **Create `styles.css`** next to your `index.html`, link it in the `<head>`, add the `body` rule above, save and refresh.
   **You should see:** the text switches to a sans-serif font (Arial). Everything else is unchanged.
2. **Add a comment above the rule.** _Does it change anything on the page?_ **No.** Comments are ignored by the browser; they are notes for humans. Use them to label sections of your stylesheet.
3. **Misspell the file name in the `href`** (e.g. `style.css`) and refresh. Open the **Console** or **Network** tab in DevTools and find the error.
   **You should see:** the page goes back to the default look, and a red **404 (Not Found)** for the misspelled file in the Network tab (and a message in the Console). Lesson: when styles "don't apply at all", check the path first. Then fix the name.

## ⚠️ Watch out

- A wrong stylesheet path.
- Seeing no change after editing CSS: the browser may be showing a cached copy. Do a **hard refresh** (Ctrl+F5, or Cmd+Shift+R on a Mac).

## 📚 Go deeper

- [W3Schools – CSS How To](https://www.w3schools.com/css/css_howto.asp)
- [MDN – Learn CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)

---

⬅️ [Chapter 2 · CSS](README.md) · ➡️ Next: [**2 · Selectors**](02-selectors.md)
