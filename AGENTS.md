# AGENTS.md

## Project Overview

Simple static website for Gamla Upsala Livs grocery store in Uppsala, Sweden. No build system or framework - vanilla HTML, CSS, and JavaScript.

## Build / Lint / Test Commands

No build system, linting, or tests configured.

**Running locally:**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

**Adding tests (if needed):** Vitest for unit tests, Playwright for e2e.

**Adding linting (if needed):** ESLint for JS, Prettier for formatting, stylelint for CSS.

## Code Style Guidelines

### General

- Keep files small and focused
- Use semantic HTML5 elements
- Use vanilla JavaScript (no frameworks)

### HTML

- Lowercase tags and attributes, double quotes
- Include `lang="sv"` on `<html>`, viewport meta tag
- Meaningful class names (lowercase, hyphen-separated)

```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="main-content">
        <h1>Heading</h1>
    </main>
    <script src="main.js"></script>
</body>
</html>
```

### CSS

- CSS custom properties (variables) for colors and spacing
- Flexbox and grid for layouts
- BEM naming for complex components: `block__element--modifier`
- Simple selectors, avoid deep nesting
- Global styles first, then component styles

```css
:root {
    --primary-color: #990011;
    --spacing-unit: 8px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: calc(var(--spacing-unit) * 2);
}
```

### JavaScript

- ES6+ syntax (const/let, arrow functions, template literals)
- Use strict mode: `'use strict';`
- `const` by default, `let` when reassignment needed
- Wrap code in IIFE or use modules to avoid globals
- Meaningful names (camelCase), add semicolons
- JSDoc comments for functions

```javascript
'use strict';

/**
 * Calculates total price including tax
 * @param {number} price - Base price
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.25)
 * @returns {number} Total price
 */
function calculateTotal(price, taxRate) {
    return price * (1 + taxRate);
}

const totals = [100, 200, 300].map(price => calculateTotal(price, 0.25));
```

### Error Handling

- Use try/catch for code that may throw
- Provide meaningful error messages
- Handle errors gracefully (user-friendly messages)

```javascript
try {
    const data = JSON.parse(jsonString);
    processData(data);
} catch (error) {
    console.error('Failed to parse data:', error.message);
    showErrorMessage('Something went wrong. Please try again.');
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files | lowercase, hyphen-separated | `main.js`, `contact-form.css` |
| HTML classes | lowercase, hyphen-separated | `.main-header`, `.product-card` |
| JS variables/functions | camelCase | `calculateTotal()`, `isValid` |
| JS constants | UPPER_SNAKE_CASE | `MAX_ITEMS`, `API_BASE_URL` |
| CSS custom properties | lowercase, hyphen-separated | `--primary-color` |

### Accessibility

- Semantic HTML (`<main>`, `<nav>`, `<header>`, `<footer>`)
- Alt text for images
- Sufficient color contrast
- Keyboard navigation support
- ARIA attributes when needed

### Performance

- Minimize CSS and JavaScript
- Lazy load images
- Optimize images (formats and sizes)
- Defer non-critical JavaScript

## Project Structure

```
/
├── index.html      # Main HTML file
├── style.css       # Main stylesheet
├── main.js         # Main JavaScript file
├── img/            # Images
├── LICENSE
└── README.md
```

## Common Tasks

### Adding a new page

1. Create new HTML file (e.g., `about.html`)
2. Copy header/footer from `index.html`
3. Add navigation link

### Adding a new script

1. Create new JS file in root or `js/` folder
2. Import in HTML: `<script src="main.js"></script>`
3. Or ES modules: `<script type="module" src="js/module.js"></script>`

### Adding styles

1. Add CSS to `style.css` or create component-specific CSS file
2. Import in HTML `<head>` after main stylesheet

## Version Control

- Small, focused commits
- Clear commit messages (describe what and why)
- Don't commit generated files, dependencies, or secrets
