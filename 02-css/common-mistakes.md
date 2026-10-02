# Chapter 2 · Common mistakes 🚧

| # | Mistake | Why it hurts | The fix |
|---|---|---|---|
| 1 | **Forgetting a semicolon or a closing brace** | The browser silently ignores the broken declaration, and often **everything after it** | Check for `;` after every declaration and a `}` after every rule. Editors highlight mismatched braces |
| 2 | **Typos in property names or values** | CSS does not report errors: the line simply has no effect | Check the Styles pane for **crossed-out or greyed-out** lines |
| 3 | **Forgetting the `.` in a class selector or the `#` in an id selector** | `workshop { }` targets a `<workshop>` element, which doesn't exist | Class = `.name`, id = `#name` |
| 4 | **Forgetting `box-sizing: border-box`** | Boxes end up wider than the width you set | Start every stylesheet with `* { box-sizing: border-box; }` |
| 5 | **Styling everything with ids and `!important`** | Leads to specificity battles | Use classes; fix conflicts with better selectors |
| 6 | **Setting every font size in `px`** | The page ignores the user's browser font-size setting | Use `rem` for font sizes and spacing |
| 7 | **Low contrast** between text and background | Hard or impossible to read for many people | Check with the [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/) (aim for 4.5:1 for normal text) |
| 8 | **Using `position: absolute` or tables to lay out a page** | Brittle and inaccessible | Use Flexbox and Grid |
| 9 | **Changing the CSS but seeing no difference** | The browser may be showing a **cached copy** | Hard refresh: **Ctrl+F5** (or **Cmd+Shift+R** on a Mac) |
| 10 | **A wrong stylesheet path, or a missing viewport meta tag on a mobile test** | Nothing loads / the phone shows a shrunken desktop page | Check the Network tab for 404s; add `<meta name="viewport" …>` |

---

⬅️ [Chapter 2 home](README.md) · ➡️ [**Chapter 3: JavaScript →**](../03-javascript/README.md)
