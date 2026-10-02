# Chapter 1 · Common mistakes 🚧

Every developer has made every one of these. Learn to spot them fast and you'll save hours.

| # | Mistake | Why it hurts | The fix |
|---|---|---|---|
| 1 | **Forgetting a closing tag**, or closing tags in the wrong order | The browser guesses where an element ends — and often guesses wrong, so layout goes strange | Indent your code; close the last-opened element first. Run the [W3C validator](https://validator.w3.org/) |
| 2 | **Leaving out `alt` on images**, or writing alt text that says nothing ("image") | Screen-reader users get no information; nothing shows if the file is missing | Describe what the image shows: `alt="Students working on laptops in a cloud workshop"` |
| 3 | **Choosing headings for their size** instead of their meaning, or **skipping heading levels** | Screen-reader users navigate by headings; a broken outline is confusing | Use `h1 → h2 → h3` in order. Change the *size* with CSS |
| 4 | **Using a `<div>` where a semantic element or a `<button>` exists** | You lose free accessibility and keyboard behaviour | `<nav>`, `<main>`, `<button>`… use the element made for the job |
| 5 | **Form inputs without a `name`** (the value is never sent) or **without a label** | The server never receives the data; users (and screen readers) don't know what the field is | Every input gets a `name` *and* a `<label for="…">` matching its `id` |
| 6 | **Wrong file paths in `src` and `href`.** Paths are relative to the HTML file and are **case-sensitive on most servers** | Broken images, missing styles, dead links | Check the folder structure and spelling; look for 404s in DevTools → Network |
| 7 | **Using tables to lay out a page** instead of presenting data | Inaccessible, inflexible, painful to maintain | Tables for data; Flexbox/Grid for layout |

---

⬅️ [Chapter 1 home](README.md) · ➡️ [**Chapter 2: CSS →**](../02-css/README.md)
