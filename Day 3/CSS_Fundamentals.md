# CSS Fundamentals

A practical, no-fluff reference for the CSS concepts every developer uses daily.

---

## 1. Three Ways to Write CSS

### Way 1 — Inline
Written directly on an HTML element using the `style` attribute.
```html
<p style="color: purple;">hello</p>
```

### Way 2 — Internal
Written inside a `<style>` tag in the `<head>` of the HTML file.
```html
<style>
  p {
    color: purple;
  }
</style>
```

### Way 3 — External
Written in a separate `.css` file and linked to the HTML file.
```html
<link rel="stylesheet" href="style.css">
```

### Comparison Table

| Type      | Where it lives          | Reusability            | Best for                          | Priority (specificity) |
|-----------|--------------------------|-------------------------|-------------------------------------|--------------------------|
| Inline    | Inside the HTML tag      | None (one element only) | Quick fixes, dynamic styles via JS  | Highest                  |
| Internal  | `<head>` of the HTML page| Only within that page   | Single-page demos, quick prototypes | Medium                   |
| External  | Separate `.css` file     | Across the whole site   | Real projects, production apps      | Lowest (but most maintainable) |

**In practice:** Industry standard is **external CSS**. Inline is used sparingly (mostly for JS-driven dynamic styles), and internal is mostly for quick testing or emails.

---

## 2. Selectors — Tag, Class, ID, Universal

| Selector   | Syntax          | Targets                          | Reusable? |
|------------|-----------------|-----------------------------------|-----------|
| Tag/Element| `p { }`         | All elements of that tag          | Yes (broad) |
| Class      | `.classname { }`| Any element with that class       | Yes (multiple elements) |
| ID         | `#idname { }`   | One unique element                | No (should be unique per page) |
| Universal  | `* { }`         | Every single element on the page  | Yes (broad reset use) |

```css
p { color: black; }         /* tag selector */
.highlight { color: red; }  /* class selector */
#main-header { color: blue; } /* id selector */
* { margin: 0; padding: 0; } /* universal selector */
```

### ID vs Class — Key Difference

| | ID | Class |
|---|---|---|
| Uniqueness | One per page | Can be reused on many elements |
| HTML usage | `id="header"` | `class="card"` |
| CSS usage | `#header` | `.card` |
| Specificity | Higher | Lower |
| Common use | Unique sections (nav, footer), JS hooks | Reusable styling (buttons, cards) |

**Rule of thumb:** Use **classes** for styling (reusable), use **IDs** mainly for JavaScript hooks or unique one-off elements, not general styling.

### Background Color
```css
body { background-color: #f5f5f5; }
.card { background-color: white; }
```

---

## 3. Measuring Units

### Absolute Units
Fixed size, doesn't scale with anything else.

| Unit | Meaning | Common use |
|------|---------|-------------|
| `px` | Pixels | Most common, precise control (borders, small fixed sizes) |

### Relative Units
Size depends on another value (parent, root, or viewport).

| Unit | Relative to | Common use |
|------|-------------|-------------|
| `%`  | Parent element | Widths, flexible layouts |
| `em` | Parent's font-size | Padding/margin relative to text |
| `rem`| Root (`html`) font-size | Font sizes, consistent scaling across the app |
| `vw` | 1% of viewport width | Full-width sections, responsive layouts |
| `vh` | 1% of viewport height | Full-height sections (e.g., hero banners) |

**Industry usage:**
- Use `rem` for font sizes (predictable, scales cleanly with accessibility settings).
- Use `%` or `vw`/`vh` for responsive layout widths/heights.
- Use `px` for things that should never change (borders, icons).
- Avoid `em` for deeply nested elements — it compounds and gets unpredictable.

---

## 4. Text & Font Properties

```css
p {
  text-align: center;      /* left | right | center | justify */
  font-family: 'Arial', sans-serif;
  font-weight: 700;        /* or: normal, bold, 100–900 */
}
```

- **text-align** → controls horizontal alignment of text inside its container.
- **font-family** → sets the typeface; always provide a fallback (e.g., `sans-serif`).
- **font-weight** → controls thickness/boldness of text (`normal`, `bold`, or numeric `100`–`900`).

---

## 5. Advanced Selectors

| Selector Type | Syntax | Meaning |
|----------------|--------|---------|
| Multiple selector | `h1, p { }` | Apply same style to multiple unrelated elements |
| Nested (descendant) selector | `div p { }` | Selects `p` anywhere inside `div` (any depth) |
| Immediate/Child selector | `div > p { }` | Selects `p` that is a **direct child** of `div` only |

```css
h1, h2, p { margin: 0; }     /* multiple selector */
.container p { color: gray; } /* nested/descendant selector */
.container > p { color: black; } /* immediate child selector */
```

**When to use which:**
- Multiple selector → avoid repeating the same CSS block.
- Descendant selector → style something wrapped anywhere inside a parent.
- Child selector → style only the direct/immediate children (more precise, avoids unwanted overrides).

---

## 6. Border, Margin, Padding & the CSS Box Model

Every HTML element is a rectangular box made up of four layers, from inside out:

```
Content → Padding → Border → Margin
```

```css
.box {
  width: 200px;
  padding: 20px;      /* space inside the border, around content */
  border: 2px solid black;  /* line around the padding */
  margin: 10px;        /* space outside the border, between elements */
}
```

| Property | Meaning |
|----------|---------|
| **Content** | The actual text/image/element |
| **Padding** | Space between content and border (inside the box) |
| **Border**  | The line surrounding the padding |
| **Margin**  | Space outside the border, separating it from other elements |

**Important:** By default, `width`/`height` only apply to content — padding & border add extra size. Use `box-sizing: border-box;` to make width/height include padding and border (industry-standard practice).

```css
* { box-sizing: border-box; }
```

---

## 7. Display & Visibility

| Property | Behavior |
|----------|-----------|
| `display: block` | Takes full width, starts on a new line (e.g., `div`, `p`) |
| `display: inline` | Takes only as much width as content needs, no line break (e.g., `span`, `a`) |
| `display: inline-block` | Like inline (sits in line) but allows setting width/height/margin like block |
| `display: none` | Element is removed from layout completely (no space reserved) |
| `visibility: hidden` | Element is invisible but still takes up its space in layout |

**Key difference:** `display: none` removes the element from the page flow entirely; `visibility: hidden` just hides it visually while keeping its space.

---

## 8. Box Shadow & Background Image

```css
.card {
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  /* x-offset | y-offset | blur | color */
}

.hero {
  background-image: url('banner.jpg');
  background-size: cover;
  background-position: center;
}
```

- **box-shadow** → adds depth/elevation to elements (cards, buttons, modals).
- **background-image** → sets an image as the background; commonly paired with `background-size: cover` and `background-position: center` for responsive full-coverage images.

---

## Interview Questions

1. What are the three ways to apply CSS to a webpage? Which one is preferred in production and why?
2. What is the difference between `id` and `class` selectors? When would you use one over the other?
3. What is the difference between the universal selector and a tag selector?
4. What's the difference between absolute and relative units in CSS? Give examples of each.
5. Why is `rem` generally preferred over `px` for font sizing?
6. Explain the CSS Box Model. What are its four components?
7. What does `box-sizing: border-box` do, and why is it commonly used?
8. What is the difference between `margin` and `padding`?
9. What is the difference between `display: none` and `visibility: hidden`?
10. Explain the difference between `display: block`, `inline`, and `inline-block`.
11. What is the difference between a descendant selector (`div p`) and a child selector (`div > p`)?
12. How do you apply the same CSS rule to multiple different elements at once?
13. What does CSS specificity mean, and how do inline, ID, and class styles compare in priority?
14. How would you add a shadow effect to a card component?
15. How do you set a background image to cover the entire element responsively?
