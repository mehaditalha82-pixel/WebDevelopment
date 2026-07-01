# HTML & CSS Notes — Tags, Semantic Elements, Attributes & Interview Questions

A quick-reference guide covering common HTML tags, semantic tags, CSS display types, key attributes, and frequently asked interview questions.

---

## Table of Contents

1. [Basic HTML Tags](#basic-html-tags)
2. [Semantic Tags](#semantic-tags)
3. [CSS Display: block, inline, inline-block](#css-display-block-inline-inline-block)
4. [Important Attributes](#important-attributes)
5. [HTML4 vs HTML5](#html4-vs-html5)
6. [Interview Questions](#interview-questions)

---

## Basic HTML Tags

### `<h1>` — Heading
Largest section heading. Use only one `<h1>` per page for SEO/accessibility.
```html
<h1>This is a main heading</h1>
```

### `<p>` — Paragraph
Defines a block of text.
```html
<p>This is a paragraph of text.</p>
```

### `<strong>` — Strong Importance
Marks text as important. Renders bold by default and carries semantic weight (screen readers emphasize it).
```html
<strong>This text is important.</strong>
```

### `<em>` — Emphasis
Marks text with stress emphasis. Renders italic by default.
```html
<em>This text is emphasized.</em>
```

### `<br>` — Line Break
Inserts a single line break. Self-closing/void element.
```html
Line one<br>Line two
```

### `<hr>` — Horizontal Rule
Creates a thematic break (horizontal line) between content. Void element.
```html
<p>Section one</p>
<hr>
<p>Section two</p>
```

### `<ul>` — Unordered List
Bullet-point list.
```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```

### `<ol>` — Ordered List
Numbered list.
```html
<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

### `<li>` — List Item
Defines an item inside `<ul>` or `<ol>`.
```html
<li>List item content</li>
```

### `<a>` — Anchor (Link)
Creates a hyperlink.
```html
<a href="https://example.com">Visit Example</a>
```

### `<div>` — Division
Generic block-level container with no inherent meaning. Used for grouping/styling.
```html
<div class="container">
  <p>Content inside a div</p>
</div>
```

### `<span>` — Inline Container
Generic inline container with no inherent meaning. Used for styling small bits of text.
```html
<p>This is <span class="highlight">highlighted</span> text.</p>
```

---

## Forms

### `<form>`
Wraps form controls and defines how data is submitted.
```html
<form action="/submit" method="post">
  <!-- form fields here -->
</form>
```

### `<input>`
Collects user input. Type varies via the `type` attribute.
```html
<input type="text" name="username" placeholder="Enter username">
<input type="email" name="email">
<input type="password" name="password">
<input type="checkbox" name="subscribe">
<input type="radio" name="gender" value="male">
<input type="submit" value="Submit">
```

### `<label>`
Describes/labels a form control. Improves accessibility.
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

### `<button>`
Clickable button. Default `type` inside a form is `submit`.
```html
<button type="submit">Submit</button>
<button type="button" onclick="doSomething()">Click Me</button>
```

### `<textarea>`
Multi-line text input.
```html
<textarea name="message" rows="4" cols="50">Default text</textarea>
```

### `<select>` and `<option>`
Dropdown list of choices.
```html
<select name="country">
  <option value="bd">Bangladesh</option>
  <option value="in">India</option>
  <option value="us">USA</option>
</select>
```

---

## Semantic Tags

Semantic tags clearly describe their meaning to both the browser and the developer — improving accessibility, SEO, and code readability.

### `<header>`
Introductory content or navigational links for a page or section (logo, title, nav).
```html
<header>
  <h1>My Website</h1>
  <nav>...</nav>
</header>
```

### `<nav>`
Defines a block of navigation links.
```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
```

### `<main>`
The dominant, unique content of the document. Only one `<main>` per page.
```html
<main>
  <article>...</article>
</main>
```

### `<article>`
Self-contained, independently distributable content (blog post, news story, comment).
```html
<article>
  <h2>Article Title</h2>
  <p>Article content...</p>
</article>
```

### `<aside>`
Content tangentially related to the main content (sidebar, pull quote, ads).
```html
<aside>
  <h3>Related Links</h3>
  <ul>...</ul>
</aside>
```

### `<footer>`
Footer for its nearest sectioning ancestor (copyright, contact info, links).
```html
<footer>
  <p>&copy; 2026 My Website. All rights reserved.</p>
</footer>
```

### `<section>`
Generic standalone section of content, usually with its own heading.
```html
<section>
  <h2>Our Services</h2>
  <p>...</p>
</section>
```

---

## CSS Display: block, inline, inline-block

| Property | Starts on new line | Width/Height settable | Default width |
|---|---|---|---|
| **block** | Yes | Yes | 100% of parent |
| **inline** | No | No (ignored) | Content width only |
| **inline-block** | No | Yes | Content width only |

```css
.block-el {
  display: block;        /* e.g. div, p, h1, ul, li */
}

.inline-el {
  display: inline;       /* e.g. span, a, strong, em */
}

.inline-block-el {
  display: inline-block; /* flows inline but accepts width/height/margin/padding fully */
}
```

- **block** elements stack vertically and take up the full width available.
- **inline** elements flow within text and only take up as much width as their content; `width`/`height`/top-bottom `margin` have no effect.
- **inline-block** elements behave like inline elements in flow (sit next to each other) but accept box-model properties like a block element.

---

## Important Attributes

### `target="_blank"`
Opens a link in a new browser tab/window. Best practice: pair with `rel="noopener noreferrer"` for security.
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Open in new tab</a>
```

### `mailto:`
Used in `href` to open the user's default email client with a pre-filled recipient.
```html
<a href="mailto:someone@example.com">Email Us</a>
<a href="mailto:someone@example.com?subject=Hello&body=Hi there">Email with Subject</a>
```

### `controls` (audio/video)
Boolean attribute that displays the browser's default playback controls (play, pause, volume, seek bar).
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

Other useful `<audio>`/`<video>` attributes: `autoplay`, `loop`, `muted`, `preload`.

---

## HTML4 vs HTML5

| Feature | HTML4 | HTML5 |
|---|---|---|
| **Doctype** | `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" ...>` (long) | `<!DOCTYPE html>` (simple) |
| **Semantic tags** | No (`<div id="header">` used instead) | Yes (`<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`, `<aside>`) |
| **Audio/Video** | Required third-party plugins (Flash, etc.) | Native `<audio>` and `<video>` tags |
| **Graphics** | No native support (needed Flash/Silverlight) | Native `<canvas>` and SVG support |
| **Form input types** | Basic types only (text, password, checkbox, radio) | New types: `email`, `date`, `number`, `range`, `url`, `search`, `tel`, `color` |
| **Local storage** | Only cookies | `localStorage` and `sessionStorage` APIs |
| **Offline support** | Not supported | Application Cache / Service Workers |
| **Geolocation** | Not supported | Native Geolocation API |
| **Drag and drop** | Not supported natively | Native Drag and Drop API |
| **Browser compatibility** | Widely supported, older standard | Modern standard, supported by all current browsers |
| **Error handling** | Strict parsing, less forgiving | More forgiving and consistent parsing rules |
| **Multimedia plugins** | Plugin-dependent | Plugin-free, native support |
| **Web Sockets** | Not supported | Native WebSocket API for real-time communication |
| **Vector Graphics** | Not supported natively | Native SVG support |
| **New attributes** | Limited | `placeholder`, `autofocus`, `required`, `pattern`, `multiple`, etc. |

---

## Interview Questions

### HTML Basics

1. **What is the difference between `<strong>` and `<b>`, and between `<em>` and `<i>`?**
   `<strong>` and `<em>` carry semantic meaning (importance/emphasis, read differently by screen readers), while `<b>` and `<i>` are purely presentational (bold/italic) with no semantic meaning.

2. **What is the difference between `<ul>`, `<ol>`, and `<li>`?**
   `<ul>` creates an unordered (bulleted) list, `<ol>` creates an ordered (numbered) list, and `<li>` defines each item inside either list type.

3. **What does the `target="_blank"` attribute do, and why should it be paired with `rel="noopener noreferrer"`?**
   It opens the link in a new tab/window. Without `rel="noopener noreferrer"`, the new page can access `window.opener`, posing a security/performance risk (tabnabbing).

4. **What is the difference between `<div>` and `<span>`?**
   `<div>` is a block-level generic container used to group larger sections of content. `<span>` is an inline generic container used to style small pieces of text within a line.

5. **Why is `<hr>` considered a void/self-closing element?**
   Because it has no content or closing tag — it simply represents a thematic break and doesn't wrap anything.

### Semantic HTML

6. **What is semantic HTML and why does it matter?**
   Semantic HTML uses tags that describe their meaning/purpose (`<header>`, `<nav>`, `<article>`, etc.) rather than generic containers. It improves accessibility (screen readers), SEO (search engines understand page structure), and code readability/maintainability.

7. **What's the difference between `<section>` and `<div>`?**
   `<section>` is a semantic element representing a thematic grouping of content (typically with a heading), while `<div>` has no semantic meaning and is used purely for styling/layout grouping.

8. **What's the difference between `<article>` and `<section>`?**
   `<article>` is meant for self-contained, independently distributable content (like a blog post that could stand alone elsewhere), whereas `<section>` groups related content within a page that may not make sense standalone.

9. **Can you have more than one `<header>`, `<nav>`, or `<footer>` on a page?**
   Yes — `<header>`, `<nav>`, and `<footer>` can be used multiple times (e.g., a page header and an article header), but `<main>` should only appear once per page.

10. **Where would you typically use `<aside>`?**
    For content tangentially related to the main content, such as sidebars, pull quotes, advertisements, or related-links widgets.

### CSS Display

11. **What's the difference between `display: block`, `inline`, and `inline-block`?**
    `block` elements start on a new line and take full available width; `width`/`height` apply. `inline` elements flow within the text line and ignore `width`/`height`/vertical margin. `inline-block` flows like inline but respects `width`/`height` and full box-model properties.

12. **Why doesn't setting `width` on a `<span>` work by default?**
    Because `<span>` is `display: inline` by default, and inline elements ignore explicit `width`/`height`. You'd need to change its `display` to `inline-block` or `block`.

13. **Name some default block-level and default inline elements.**
    Block: `<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<ol>`, `<li>`, `<section>`, `<article>`. Inline: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>` (technically inline but accepts width/height).

### Forms

14. **What is the purpose of the `<label>` tag, and how is it linked to an input?**
    It provides an accessible, clickable text description for a form control. It's linked via the `for` attribute matching the input's `id`, or by wrapping the input inside the label.

15. **What's the difference between `<button type="submit">` and `<button type="button">`?**
    `type="submit"` submits the enclosing form when clicked. `type="button"` does nothing by default and is typically used with JavaScript event handlers for custom actions.

16. **What new `<input>` types were introduced in HTML5?**
    `email`, `url`, `tel`, `number`, `range`, `date`, `time`, `datetime-local`, `month`, `week`, `color`, `search` — these provide built-in validation and specialized UI controls.

### HTML4 vs HTML5

17. **What are the main new semantic elements introduced in HTML5?**
    `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<main>`, `<figure>`, `<figcaption>`.

18. **How does HTML5 handle audio and video differently from HTML4?**
    HTML5 introduced native `<audio>` and `<video>` tags with a built-in `controls` attribute, removing the need for third-party plugins like Flash that HTML4 relied on.

19. **What storage options does HTML5 provide that HTML4 didn't have?**
    `localStorage` and `sessionStorage` (Web Storage API), offering more storage capacity and persistence options than cookies alone.

20. **Is HTML5 backward compatible with HTML4?**
    Yes, HTML5 was designed to be backward compatible — older HTML4 markup generally still renders correctly in HTML5-compliant browsers, although deprecated tags/attributes should be avoided in new code.

### Miscellaneous

21. **What does the `controls` attribute do on `<audio>`/`<video>` tags?**
    It's a boolean attribute that tells the browser to display its default playback UI (play/pause button, volume, progress bar) for the media element.

22. **How would you create a clickable email link that pre-fills a subject line?**
    ```html
    <a href="mailto:someone@example.com?subject=Hello">Email Me</a>
    ```

23. **What's the difference between a void element and a normal element? Give two examples.**
    A void element has no closing tag and cannot contain content (e.g., `<br>`, `<hr>`, `<img>`, `<input>`). A normal element has both opening and closing tags and can contain content (e.g., `<p>...</p>`, `<div>...</div>`).
