# CSS Layout & HTML Tables — Emmet, Flexbox, Grid, Positioning

A complete reference covering Emmet in VS Code, Flexbox (nav bar & hero section), CSS Grid (calendar layout), Grid vs Flex, CSS positioning, HTML tables, and interview questions.

---

## Table of Contents

1. [Introduction to Emmet in VS Code](#introduction-to-emmet-in-vs-code)
2. [Flexbox: justify-content & align-items](#flexbox-justify-content--align-items)
3. [Build a Navigation Bar Using Flex](#build-a-navigation-bar-using-flex)
4. [Hero Section Design — Banner Using Flexbox](#hero-section-design--banner-using-flexbox)
5. [Grid Fundamentals — Columns, Gap, Basic Layout](#grid-fundamentals--columns-gap-basic-layout)
6. [Difference Between Grid and Flex](#difference-between-grid-and-flex)
7. [Grid in Practice — Build a Calendar Layout](#grid-in-practice--build-a-calendar-layout)
8. [CSS Positioning](#css-positioning--static-relative-absolute-fixed-sticky)
9. [HTML Table in Detail](#html-table-in-detail)
10. [Interview Questions & Answers](#interview-questions--answers)

---

## Introduction to Emmet in VS Code

**Emmet** is a built-in toolkit in VS Code (and most modern editors) that lets you write HTML/CSS using short, CSS-like abbreviations that expand into full code snippets when you press `Tab` or `Enter`.

### Why use Emmet?
- Massively speeds up writing repetitive HTML/CSS.
- Reduces typos from manually writing boilerplate tags.
- Built into VS Code by default — no extension needed.

### Basic Syntax & Examples

| Abbreviation | Expands To |
|---|---|
| `!` | Full HTML5 boilerplate (`<!DOCTYPE html>` ... `<html><head>...</head><body></body></html>`) |
| `div.container` | `<div class="container"></div>` |
| `div#main` | `<div id="main"></div>` |
| `ul>li*5` | `<ul>` with 5 `<li>` children |
| `p{Hello World}` | `<p>Hello World</p>` |
| `div>ul>li*3>a` | Nested: div > ul > 3 list items, each containing an anchor |
| `nav>ul>li*4>a{Item $}` | Nav with 4 links labeled "Item 1", "Item 2", etc. (`$` = auto-increment) |
| `.box+.box+.box` | Three sibling divs each with class `box` |
| `img[src="pic.jpg" alt="photo"]` | `<img src="pic.jpg" alt="photo">` |
| `table>tr*3>td*4` | Table with 3 rows, each containing 4 cells |

### Example: Expanding a Navbar
Typing:
```
nav>ul.nav-list>li.nav-item*4>a.nav-link{Link $}
```
and pressing **Tab** expands to:
```html
<nav>
  <ul class="nav-list">
    <li class="nav-item"><a href="" class="nav-link">Link 1</a></li>
    <li class="nav-item"><a href="" class="nav-link">Link 2</a></li>
    <li class="nav-item"><a href="" class="nav-link">Link 3</a></li>
    <li class="nav-item"><a href="" class="nav-link">Link 4</a></li>
  </ul>
</nav>
```

### CSS Emmet Abbreviations
| Abbreviation | Expands To |
|---|---|
| `m10` | `margin: 10px;` |
| `p10-20` | `padding: 10px 20px;` |
| `d:f` | `display: flex;` |
| `jc:c` | `justify-content: center;` |
| `w100p` | `width: 100%;` |
| `bgc:#fff` | `background-color: #fff;` |

---

## Flexbox: justify-content & align-items

Flexbox lays out items along a **main axis** and a **cross axis**. By default, `flex-direction: row` makes the main axis horizontal and the cross axis vertical.

- **`justify-content`** — aligns items along the **main axis**.
- **`align-items`** — aligns items along the **cross axis**.

```css
.flex-container {
  display: flex;
  justify-content: center;  /* main axis alignment */
  align-items: center;      /* cross axis alignment */
}
```

### `justify-content` values
| Value | Effect |
|---|---|
| `flex-start` | Items packed at the start (default) |
| `flex-end` | Items packed at the end |
| `center` | Items centered |
| `space-between` | Equal space *between* items (no space at edges) |
| `space-around` | Equal space around each item (including edges) |
| `space-evenly` | Fully equal space between and around all items |

### `align-items` values
| Value | Effect |
|---|---|
| `stretch` | Items stretch to fill the container (default) |
| `flex-start` | Items aligned to the top (cross axis start) |
| `flex-end` | Items aligned to the bottom (cross axis end) |
| `center` | Items centered vertically |
| `baseline` | Items aligned by their text baseline |

### Full Example
```html
<div class="box-wrapper">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```
```css
.box-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background: #f0f0f0;
}
.box {
  width: 60px;
  height: 60px;
  background: #4CAF50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## Build a Navigation Bar Using Flex

```html
<nav class="navbar">
  <div class="logo">MyBrand</div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="cta-btn">Sign Up</button>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between; /* logo left, links middle, button right */
  align-items: center;
  padding: 16px 32px;
  background-color: #1f2937;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 1.4rem;
}

.nav-links {
  display: flex;         /* nested flex for the links */
  gap: 24px;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.cta-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

/* Responsive: stack on smaller screens */
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 12px;
  }
}
```

**Key idea:** The outer `.navbar` is a flex container arranging logo/links/button horizontally with `space-between`. The `.nav-links` itself is *also* a flex container, arranging its `<li>` items in a row with a `gap`.

---

## Hero Section Design — Banner Using Flexbox

A typical hero section has text content on one side and an image on the other, centered vertically.

```html
<section class="hero">
  <div class="hero-content">
    <h1>Build Better Websites, Faster</h1>
    <p>A modern toolkit for designers and developers to create stunning layouts.</p>
    <button class="hero-btn">Get Started</button>
  </div>
  <div class="hero-image">
    <img src="hero-illustration.svg" alt="Hero illustration">
  </div>
</section>
```

```css
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;           /* allows stacking on small screens */
  gap: 40px;
  padding: 80px 60px;
  background-color: #f9fafb;
}

.hero-content {
  flex: 1 1 400px;           /* grow, shrink, base width */
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.hero-content p {
  color: #555;
  margin-bottom: 24px;
}

.hero-btn {
  padding: 12px 28px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

.hero-image {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}
```

**Key idea:** `flex-wrap: wrap` combined with `flex: 1 1 400px` on children lets the hero section stack into a single column automatically on narrow screens without extra media query logic.

---

## Grid Fundamentals — Columns, Gap, Basic Layout

CSS Grid arranges content into **rows and columns simultaneously** (2-dimensional), unlike Flexbox which is primarily 1-dimensional.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal-width columns */
  grid-template-rows: auto auto;
  gap: 20px;                            /* space between rows & columns */
}
```

### Key Grid Properties
| Property | Purpose |
|---|---|
| `display: grid` | Activates grid layout on the container |
| `grid-template-columns` | Defines number & width of columns |
| `grid-template-rows` | Defines number & height of rows |
| `gap` (or `row-gap` / `column-gap`) | Space between grid cells |
| `grid-column` | Makes an item span specific columns |
| `grid-row` | Makes an item span specific rows |
| `grid-template-areas` | Names areas for a visual, readable layout |
| `repeat()` | Shorthand for repeating column/row definitions |
| `fr` unit | Fractional unit — divides remaining space proportionally |

### Basic Example
```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 16px;
}
.item {
  background: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
}
```

### Spanning Columns/Rows
```css
.item:first-child {
  grid-column: span 2; /* this item takes up 2 columns */
}
```

---

## Difference Between Grid and Flex

| | **Flexbox** | **CSS Grid** |
|---|---|---|
| **Dimension** | 1-dimensional (row OR column at a time) | 2-dimensional (rows AND columns together) |
| **Best for** | Aligning items in a single row/column (navbars, toolbars, small components) | Full page layouts, complex structures (dashboards, galleries, calendars) |
| **Content vs Layout driven** | Content-first — sizing driven by content | Layout-first — you define the grid structure, then place content into it |
| **Item placement** | Items flow in order along one axis | Items can be placed precisely at specific row/column coordinates |
| **Alignment tools** | `justify-content`, `align-items`, `align-self` | Same alignment properties, plus `grid-template-areas`, `grid-column`, `grid-row` |
| **Overlapping elements** | Difficult | Easy — items can overlap via explicit placement |
| **Nesting** | Common to nest flex containers | Can nest grids, or mix grid + flex together |
| **Browser support** | Excellent, mature | Excellent, mature (slightly newer than flexbox) |

**Rule of thumb:** Use **Flexbox** for aligning items in a single direction (like a navbar or a row of buttons). Use **Grid** when you need to control both rows and columns simultaneously (like a full page layout or calendar).

---

## Grid in Practice — Build a Calendar Layout

```html
<div class="calendar">
  <div class="day-name">Sun</div>
  <div class="day-name">Mon</div>
  <div class="day-name">Tue</div>
  <div class="day-name">Wed</div>
  <div class="day-name">Thu</div>
  <div class="day-name">Fri</div>
  <div class="day-name">Sat</div>

  <!-- Empty cells before the 1st (e.g. month starts on Wed) -->
  <div class="day empty"></div>
  <div class="day empty"></div>
  <div class="day empty"></div>

  <div class="day">1</div>
  <div class="day">2</div>
  <div class="day">3</div>
  <div class="day">4</div>
  <div class="day">5</div>
  <div class="day">6</div>
  <div class="day">7</div>
  <!-- ...continue through the month... -->
  <div class="day">28</div>
  <div class="day">29</div>
  <div class="day">30</div>
</div>
```

```css
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 columns for days of week */
  gap: 8px;
  max-width: 700px;
  margin: 0 auto;
}

.day-name {
  font-weight: bold;
  text-align: center;
  padding: 8px 0;
  background: #333;
  color: white;
}

.day {
  aspect-ratio: 1 / 1;    /* keeps each cell square */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  border-radius: 6px;
  font-size: 1.1rem;
}

.day.empty {
  background: transparent;
}

.day:hover {
  background: #4CAF50;
  color: white;
  cursor: pointer;
}
```

**Key idea:** `repeat(7, 1fr)` creates exactly 7 equal columns for the days of the week. Empty placeholder cells (`.empty`) are used to offset the first day of the month to the correct weekday column — this is the classic technique for calendar grids.

### Bonus: Naming Areas for a Full Calendar Page Layout
```css
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}
.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }
```

---

## CSS Positioning — Static, Relative, Absolute, Fixed, Sticky

```css
.static-el   { position: static; }
.relative-el { position: relative; top: 10px; left: 10px; }
.absolute-el { position: absolute; top: 0; right: 0; }
.fixed-el    { position: fixed; bottom: 20px; right: 20px; }
.sticky-el   { position: sticky; top: 0; }
```

| Position | Behavior | Reference Point |
|---|---|---|
| **static** | Default. Element sits in normal document flow. `top`/`left`/etc. have no effect. | Normal flow |
| **relative** | Stays in normal flow, but offset properties (`top`, `left`, etc.) shift it *relative to its own original position*. Also establishes a positioning context for absolute children. | Its own default position |
| **absolute** | Removed from normal flow entirely. Positioned relative to the **nearest positioned ancestor** (any ancestor with `position` other than `static`). If none exists, positioned relative to the `<html>` document. | Nearest positioned ancestor |
| **fixed** | Removed from normal flow. Positioned relative to the **viewport**, and stays fixed even when the page is scrolled. | Browser viewport |
| **sticky** | Behaves like `relative` until the scroll position hits the specified offset (e.g. `top: 0`), then it "sticks" like `fixed` within its parent container. | Nearest scrolling ancestor / viewport |

### Practical Examples

**Relative + Absolute combo (common pattern — a badge on a card):**
```html
<div class="card">
  <span class="badge">New</span>
  <p>Card content here</p>
</div>
```
```css
.card {
  position: relative;  /* establishes positioning context */
  border: 1px solid #ddd;
  padding: 20px;
}
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
}
```

**Fixed navbar that always stays on screen:**
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #222;
  z-index: 1000;
}
```

**Sticky table header (stays visible while scrolling the table):**
```css
thead th {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
}
```

---

## HTML Table in Detail

Tables organize tabular data into rows and columns.

### Basic Structure
```html
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Product</th>
      <th>Q1</th>
      <th>Q2</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptops</td>
      <td>120</td>
      <td>150</td>
      <td>270</td>
    </tr>
    <tr>
      <td>Phones</td>
      <td>300</td>
      <td>280</td>
      <td>580</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>420</td>
      <td>430</td>
      <td>850</td>
    </tr>
  </tfoot>
</table>
```

### Table Elements Explained

| Tag | Purpose |
|---|---|
| `<table>` | Root container for the entire table |
| `<caption>` | A title/description for the table. Must be the **first** child of `<table>`. Displayed above the table by default. |
| `<thead>` | Groups the header row(s) — typically column titles. Semantically separates header from body for styling/accessibility. |
| `<tbody>` | Groups the main body rows of data. |
| `<tfoot>` | Groups footer row(s) — typically totals/summaries. Can appear before `<tbody>` in code but browsers render it last. |
| `<tr>` | Table row |
| `<th>` | Header cell — bold and centered by default; carries `scope` attribute for accessibility |
| `<td>` | Standard data cell |

### `colspan` and `rowspan`

**`colspan`** — makes a cell span multiple columns.
```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>First</td>
    <td>Last</td>
    <td>25</td>
  </tr>
</table>
```

**`rowspan`** — makes a cell span multiple rows.
```html
<table>
  <tr>
    <th rowspan="2">Category</th>
    <th>Item</th>
  </tr>
  <tr>
    <td>Laptop</td>
  </tr>
</table>
```

### Combined Example (colspan + rowspan)
```html
<table border="1">
  <tr>
    <th rowspan="2">Department</th>
    <th colspan="2">Employees</th>
  </tr>
  <tr>
    <th>Full-time</th>
    <th>Part-time</th>
  </tr>
  <tr>
    <td>Engineering</td>
    <td>20</td>
    <td>5</td>
  </tr>
</table>
```

### `scope` attribute (accessibility)
```html
<th scope="col">Name</th>   <!-- header for a column -->
<th scope="row">Total</th>  <!-- header for a row -->
```

### Styling a Table
```css
table {
  width: 100%;
  border-collapse: collapse; /* removes double borders between cells */
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
thead {
  background-color: #4CAF50;
  color: white;
}
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
caption {
  font-weight: bold;
  margin-bottom: 8px;
}
```

---

## Interview Questions & Answers

### Emmet

1. **What is Emmet, and how does it help productivity in VS Code?**
   Emmet is a built-in abbreviation expansion toolkit that lets developers type short CSS-like shorthand which expands into full HTML/CSS code, drastically reducing typing time and boilerplate errors.

2. **How would you generate a `<ul>` with 5 `<li>` items using Emmet?**
   Type `ul>li*5` and press Tab.

### Flexbox

3. **What is the main axis vs the cross axis in Flexbox?**
   The main axis runs in the direction set by `flex-direction` (`row` by default = horizontal). The cross axis runs perpendicular to it (vertical by default). `justify-content` controls alignment along the main axis; `align-items` controls the cross axis.

4. **What's the difference between `align-items` and `align-content`?**
   `align-items` aligns individual flex items within their line along the cross axis. `align-content` aligns entire *lines* of items (only relevant when `flex-wrap: wrap` creates multiple lines).

5. **What does `flex: 1 1 300px` mean on a flex item?**
   It's shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 300px;` — meaning the item starts at 300px width but can grow or shrink to fill/fit available space.

6. **How do you center an item both horizontally and vertically using Flexbox?**
   ```css
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
   }
   ```

### Grid vs Flex

7. **When would you choose Grid over Flexbox?**
   When you need to control layout in two dimensions simultaneously (both rows and columns) — such as full-page layouts, dashboards, or calendars — Grid is the better choice. Flexbox is best for simpler, single-direction alignment like navbars or button groups.

8. **Can Grid and Flexbox be used together?**
   Yes — it's common to use Grid for the overall page layout (header, sidebar, main, footer) and Flexbox within individual grid areas to align smaller groups of content (like a nav bar inside the header).

9. **What does the `fr` unit mean in CSS Grid?**
   `fr` stands for "fraction" — it represents a fraction of the available space in the grid container. `grid-template-columns: 1fr 2fr` creates two columns where the second is twice as wide as the first.

10. **What is `grid-template-areas` used for?**
    It lets you define a visual, named layout for a grid by assigning string labels to regions, then mapping child elements to those named areas via `grid-area`, making complex layouts easier to read and maintain.

### CSS Positioning

11. **What is the difference between `position: relative` and `position: absolute`?**
    `relative` keeps the element in normal document flow and offsets it from its own default position. `absolute` removes the element from normal flow entirely and positions it relative to the nearest ancestor with a non-static position (or the document if none exists).

12. **Why do we often set `position: relative` on a parent when using `position: absolute` on a child?**
    Because an absolutely positioned element is placed relative to its nearest *positioned* ancestor. Setting `position: relative` on the parent (even without offsets) establishes that reference point, so the child positions itself relative to the parent instead of the whole document.

13. **What's the difference between `position: fixed` and `position: sticky`?**
    `fixed` is always positioned relative to the viewport and never moves, regardless of scrolling. `sticky` behaves like `relative` until a scroll threshold is reached, then "sticks" in place like `fixed` — but only within its containing block, and it un-sticks once that container scrolls out of view.

14. **What is `z-index` and when does it take effect?**
    `z-index` controls the stacking order of overlapping elements along the z-axis (closer to/away from the viewer). It only takes effect on elements that have a `position` value other than `static` (or on flex/grid items).

### HTML Tables

15. **What is the purpose of `<thead>`, `<tbody>`, and `<tfoot>`?**
    They semantically group a table's header, body, and footer rows respectively, improving accessibility, enabling independent styling, and allowing browsers to potentially render/print them distinctly (e.g. repeating `<thead>` across printed pages).

16. **What's the difference between `colspan` and `rowspan`?**
    `colspan` makes a table cell span multiple **columns** horizontally. `rowspan` makes a cell span multiple **rows** vertically.

17. **What does `<caption>` do, and where must it be placed?**
    `<caption>` provides a title/description for the table, improving accessibility. It must be the first child immediately after the opening `<table>` tag, and is displayed above the table by default (though CSS can reposition it).

18. **What is `border-collapse: collapse` used for?**
    It merges adjacent table cell borders into a single border instead of each cell having its own separate border, producing a cleaner grid appearance (the default `border-collapse: separate` leaves gaps between cell borders).

19. **What is the `scope` attribute on `<th>` used for?**
    It tells assistive technologies (screen readers) whether a header cell applies to a column (`scope="col"`) or a row (`scope="row"`), improving table accessibility.