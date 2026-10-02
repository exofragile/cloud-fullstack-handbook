# 3 · Colours, text and units 🌈

> **TL;DR:** Colours can be written four ways. Text is styled with a handful of properties. Prefer `rem` for font sizes and spacing so your page respects the reader's settings.

## 💡 The big idea

This is the **paint, typeface and measuring-tape** lesson. Paint (colour), typeface (font properties) and the measuring tape (units) are what turn a grey page into something with personality.

## 🔍 The details

### Four ways to write one colour

Colours can be written as **names** (`navy`), **hexadecimal codes** (`#1f3864`), `rgb(31, 56, 100)` or `hsl(218, 53%, 26%)`.

| Format | Example | How to think about it |
|---|---|---|
| Name | `navy` | About 140 built-in names. Handy, but limited |
| Hex | `#1f3864` | Three pairs of hexadecimal digits: **R**ed, **G**reen, **B**lue (`1f` = 31, `38` = 56, `64` = 100) |
| RGB | `rgb(31, 56, 100)` | The same three numbers, 0–255, in ordinary decimal |
| HSL | `hsl(218, 53%, 26%)` | **H**ue (0–360° on the colour wheel), **S**aturation (how vivid), **L**ightness (how light). Great for making a colour lighter or darker |

All four can describe exactly the same colour.

### Text and colour properties

| Property | What it does | Example |
|---|---|---|
| `color` | Text colour | `color: #1f2937;` |
| `background-color` | Background colour | `background-color: #f5f8fc;` |
| `font-family` | Typeface, with fallbacks | `font-family: Arial, sans-serif;` |
| `font-size` | Text size | `font-size: 1.25rem;` |
| `font-weight` | How bold the text is | `font-weight: bold;` |
| `line-height` | Space between lines | `line-height: 1.6;` |
| `text-align` | Horizontal alignment | `text-align: center;` |
| `text-decoration` | Underline and similar | `text-decoration: none;` |

**Fallbacks:** `font-family: Arial, Helvetica, sans-serif;` is a wish list. If the visitor's device has no Arial, the browser tries Helvetica, then any sans-serif font.

### Units

| Unit | Meaning | Good for |
|---|---|---|
| `px` | A CSS pixel: a fixed size | Thin borders and small fixed details |
| `rem` | A multiple of the **root** (`<html>`) font size, **16px by default** | Font sizes and spacing |
| `em` | A multiple of the **element's own** font size | Spacing that should scale with its text |
| `%` | A percentage of the **parent** element | Widths |
| `vw` / `vh` | 1% of the viewport width or height | Full-screen sections |

So `1.25rem` is 1.25 × 16 = 20px by default. If a visitor raises their browser's default font size to 20px, `rem` text grows with it, but `px` text stays stubbornly the same. That's why `rem` is friendlier.

### Putting it together

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #1f2937;
  background-color: #f5f8fc;
}

h1 {
  font-size: 2.25rem;
  color: #1f3864;
}

a {
  color: #1f5fbf;
  text-decoration: none;
}
```

**Result:**

![A pale-blue page with a large navy heading, two paragraphs of dark grey text and a blue link](../assets/css-colors-text-result.png)

## 🛠️ Try it — Exercise 3

1. **Add the rules above to your `styles.css`. Then change `line-height` to `1` and to `2`.** *Which is easiest to read?*
   With `1`, lines are crammed together and hard to track from one line to the next. With `2`, they float apart and the paragraph stops reading as one block. Something around **1.5–1.6** is the sweet spot, which is why the example uses `1.6`.
2. **Write the same colour four ways** (name, hex, rgb, hsl). In DevTools, click a colour swatch in the Styles pane to open the colour picker and convert between formats.
   ```css
   h1 { color: navy; }
   h1 { color: #000080; }
   h1 { color: rgb(0, 0, 128); }
   h1 { color: hsl(240, 100%, 25%); }
   ```
   All four look identical. (Note that `navy` is `#000080`, a different shade from the `#1f3864` used elsewhere.) In DevTools, **Shift-click** the swatch to cycle through formats.
3. **Change a `font-size` from `px` to `rem`. Then raise the default font size in your browser settings.** *Which text scales?*
   The `rem` text grows; the `px` text does not. This is an accessibility win for people who need larger text.
4. **Check your text and background colours with the [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/).** *Do they pass?*
   The palette used in this book does: dark text `#1f2937` on the page background `#f5f8fc` is about **13.8:1**, navy headings about **10.9:1**, and blue links `#1f5fbf` about **5.7:1**. WCAG asks for at least **4.5:1** for normal text, so all pass. Use your own colours to see how quickly light grey on white fails.

## ⚠️ Watch out

- Colours with too little contrast against their background.
- Using `px` for everything and locking out people who need bigger text.

## 📚 Go deeper

- [W3Schools – CSS Colors](https://www.w3schools.com/css/css_colors.asp)
- [MDN – CSS colour](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/)

---

⬅️ [2 · Selectors](02-selectors.md) · ➡️ Next: [**4 · The box model**](04-the-box-model.md)
