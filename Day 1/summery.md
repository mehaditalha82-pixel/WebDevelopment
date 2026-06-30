````md
# HTML Notes

A complete beginner to interview-level guide covering common HTML tags, attributes, display types, HTML5 semantic elements, and interview questions.

---

# What is HTML?

**HTML (HyperText Markup Language)** is the standard markup language used to create web pages.

- Defines the structure of a webpage
- Uses **tags**
- Works together with CSS and JavaScript

---

# Basic HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>

<body>

</body>
</html>
```

---

# Text Tags

## 1. `<h1>` - `<h6>`

### Work
Used for headings.

- `<h1>` = Largest heading
- `<h6>` = Smallest heading

### Syntax

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Small Heading</h3>
```

---

## 2. `<p>`

### Work

Defines a paragraph.

### Syntax

```html
<p>This is a paragraph.</p>
```

---

## 3. `<strong>`

### Work

Makes text **important**.

Usually appears bold.

### Syntax

```html
<strong>Important Text</strong>
```

Output:

**Important Text**

---

## 4. `<em>`

### Work

Emphasizes text.

Usually appears italic.

### Syntax

```html
<em>Italic Text</em>
```

Output:

*Italic Text*

---

## 5. `<br>`

### Work

Creates a line break.

### Syntax

```html
Hello<br>
World
```

Output

```
Hello
World
```

---

## 6. `<hr>`

### Work

Creates a horizontal line.

### Syntax

```html
<hr>
```

---

# Lists

---

## 7. `<ul>`

### Work

Creates an unordered (bulleted) list.

### Syntax

```html
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
</ul>
```

Output

- Apple
- Mango
- Banana

---

## 8. `<ol>`

### Work

Creates an ordered (numbered) list.

### Syntax

```html
<ol>
    <li>Wake Up</li>
    <li>Study</li>
    <li>Sleep</li>
</ol>
```

Output

1. Wake Up
2. Study
3. Sleep

---

## 9. `<li>`

### Work

Represents one list item.

Must be inside `<ul>` or `<ol>`.

### Syntax

```html
<li>Item</li>
```

---

# Links

---

## 10. `<a>`

### Work

Creates hyperlinks.

### Syntax

```html
<a href="https://google.com">Google</a>
```

---

# Container Tags

---

## 11. `<div>`

### Work

Block-level container used to group elements.

### Syntax

```html
<div>
    <h2>Title</h2>
    <p>Paragraph</p>
</div>
```

---

## 12. `<span>`

### Work

Inline container.

Mostly used for styling part of text.

### Syntax

```html
<p>Hello <span>World</span></p>
```

---

# Forms

---

## 13. `<form>`

### Work

Creates an HTML form.

### Syntax

```html
<form>

</form>
```

---

## 14. `<input>`

### Work

Accepts user input.

### Common Types

```html
<input type="text">

<input type="password">

<input type="email">

<input type="number">

<input type="checkbox">

<input type="radio">

<input type="file">

<input type="date">
```

---

## 15. `<label>`

### Work

Provides a label for an input.

### Syntax

```html
<label for="name">Name</label>

<input id="name">
```

---

## 16. `<button>`

### Work

Creates a clickable button.

### Syntax

```html
<button>Submit</button>
```

---

## 17. `<textarea>`

### Work

Accepts multiple lines of text.

### Syntax

```html
<textarea rows="5" cols="30"></textarea>
```

---

## 18. `<select>`

### Work

Creates a dropdown menu.

### Syntax

```html
<select>

</select>
```

---

## 19. `<option>`

### Work

Defines an option inside a dropdown.

### Syntax

```html
<select>

    <option>Bangladesh</option>

    <option>Japan</option>

</select>
```

---

# Semantic Tags (HTML5)

Semantic tags describe the meaning of the content.

---

## `<header>`

Top section of a webpage.

```html
<header>

Website Logo

</header>
```

---

## `<nav>`

Navigation links.

```html
<nav>

<a href="#">Home</a>

<a href="#">About</a>

</nav>
```

---

## `<main>`

Main content of the webpage.

```html
<main>

Main Content

</main>
```

---

## `<section>`

Represents a section of content.

```html
<section>

<h2>Courses</h2>

</section>
```

---

## `<article>`

Independent content.

Example:

- News
- Blog
- Post

```html
<article>

Blog Post

</article>
```

---

## `<aside>`

Sidebar or extra information.

```html
<aside>

Advertisements

</aside>
```

---

## `<footer>`

Bottom section of webpage.

```html
<footer>

Copyright 2026

</footer>
```

---

# Block vs Inline vs Inline-Block

| Property | Block | Inline | Inline-block |
|-----------|--------|---------|--------------|
| Starts new line | Yes | No | No |
| Width | Full width | Content width | Content width |
| Height & Width | Can set | Cannot set | Can set |
| Margin | Yes | Left & Right only | Yes |
| Padding | Yes | Limited | Yes |

### Examples

Block

```html
<div></div>

<p></p>

<h1></h1>
```

Inline

```html
<span></span>

<a></a>

<strong></strong>

<em></em>
```

Inline-block

Usually created using CSS.

```css
display:inline-block;
```

---

# Important HTML Attributes

---

## href

Specifies the URL.

```html
<a href="https://google.com">
Google
</a>
```

---

## target="_blank"

Opens link in a new tab.

```html
<a href="https://google.com"
target="_blank">

Google

</a>
```

---

## mailto

Opens the user's email application.

```html
<a href="mailto:abc@gmail.com">

Send Email

</a>
```

---

## controls (Audio)

Displays audio controls.

```html
<audio controls>

<source src="song.mp3">

</audio>
```

Controls include:

- Play
- Pause
- Volume
- Timeline
- Download (browser dependent)

---

# HTML4 vs HTML5

| HTML4 | HTML5 |
|--------|--------|
| Released in 1997 | Released in 2014 |
| No semantic tags | Semantic tags available |
| No audio/video support | Built-in audio/video |
| Uses long DOCTYPE | Simple DOCTYPE |
| Less form input types | Many new input types |
| Uses plugins for multimedia | Native multimedia support |
| Limited graphics | Supports Canvas and SVG |
| Poor mobile support | Mobile-friendly |

---

# Frequently Used HTML Input Types

```html
text

password

email

number

date

file

checkbox

radio

submit

reset

color

range

url

tel
```

---

# Mini Form Example

```html
<form>

<label>Name</label>

<input type="text">

<br><br>

<label>Email</label>

<input type="email">

<br><br>

<label>Country</label>

<select>

<option>Bangladesh</option>

<option>Japan</option>

</select>

<br><br>

<textarea></textarea>

<br><br>

<button>Submit</button>

</form>
```

---

# Interview Questions

## Basic

### 1. What is HTML?

HTML is the standard markup language used to create the structure of web pages.

---

### 2. Difference between `<div>` and `<span>`?

| div | span |
|------|------|
| Block element | Inline element |
| Takes full width | Takes content width |

---

### 3. Difference between `<strong>` and `<b>`?

- `<strong>` gives semantic importance (important text).
- `<b>` only makes text bold without semantic meaning.

---

### 4. Difference between `<em>` and `<i>`?

- `<em>` adds semantic emphasis.
- `<i>` only changes the appearance to italic.

---

### 5. Difference between `<ul>` and `<ol>`?

- `<ul>` = Bulleted list
- `<ol>` = Numbered list

---

### 6. Why use semantic tags?

- Better SEO
- Better Accessibility
- Easier Maintenance
- Cleaner Code

---

### 7. Difference between HTML and HTML5?

HTML5 introduced:

- Semantic elements
- Audio
- Video
- Canvas
- SVG
- Better forms
- Local storage

---

### 8. What does `target="_blank"` do?

It opens the linked page in a new browser tab.

---

### 9. What is `mailto`?

Used to open the default email application.

Example:

```html
<a href="mailto:abc@gmail.com">
Email Me
</a>
```

---

### 10. Why use `<label>`?

- Improves accessibility.
- Clicking the label focuses the corresponding input.
- Makes forms easier to use.

---

### 11. Difference between Block and Inline elements?

| Block | Inline |
|--------|--------|
| Starts on a new line | Does not start on a new line |
| Full width | Only content width |
| Can contain inline elements | Cannot contain block elements (typically) |

---

### 12. What is the purpose of the `controls` attribute?

Adds browser controls to media elements like:

- Play
- Pause
- Volume
- Timeline

Example

```html
<audio controls>

<source src="music.mp3">

</audio>
```

---

# Quick Revision

- `<h1>` → Heading
- `<p>` → Paragraph
- `<strong>` → Important bold text
- `<em>` → Emphasized italic text
- `<br>` → Line break
- `<hr>` → Horizontal line
- `<ul>` → Bullet list
- `<ol>` → Numbered list
- `<li>` → List item
- `<a>` → Hyperlink
- `<div>` → Block container
- `<span>` → Inline container
- `<form>` → Form
- `<input>` → User input
- `<label>` → Input label
- `<button>` → Button
- `<textarea>` → Multi-line input
- `<select>` → Dropdown
- `<option>` → Dropdown option
- `<header>` → Top section
- `<nav>` → Navigation
- `<main>` → Main content
- `<section>` → Content section
- `<article>` → Independent article/post
- `<aside>` → Sidebar
- `<footer>` → Bottom section
- `target="_blank"` → Open link in a new tab
- `mailto:` → Open email client
- `controls` → Show audio/video controls
````
