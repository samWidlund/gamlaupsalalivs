# AGENTS.md

## Project Overview

Static single-page website for Gamla Upsala Livs grocery store in Uppsala, Sweden. No build system - vanilla HTML, CSS, and JavaScript.

### Site Sections
- **Navbar** - Fixed navigation with links
- **Hero** - Full-viewport hero with company name and tagline
- **Om oss** - About company with opening hours (9-23 daily)
- **Kontakt** - Address, phone, email, Google Maps
- **Footer** - Contact info, copyright

### Contact Info
- Address: Djäknegatan 90, 754 25 Uppsala
- Phone: 072-XXX XX XX
- Email: info@gamlaupsalalivs.se

## Build / Lint / Test Commands

No build system, linting, or tests configured.

### Running Locally
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

### Adding Tests (if needed)
```bash
npm install -D vitest
npm test                              # run all tests
npx vitest run src/test.js           # run single test
npx playwright test                  # e2e tests
```

### Adding Linting (if needed)
```bash
npm install -D eslint prettier stylelint stylelint-config-standard
npx eslint .
npx prettier --check .
npx stylelint "**/*.css"
```

## Code Style Guidelines

### General
- Keep files small and focused
- Use semantic HTML5 elements
- Vanilla JavaScript (no frameworks)
- Prefer native browser APIs

### HTML
- Lowercase tags/attributes, double quotes
- Include `lang="sv"` on `<html>`, viewport meta
- Meaningful class names (lowercase, hyphen-separated)
- Section IDs for anchor navigation (`id="section-name"`)

```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="main-content"><h1>Heading</h1></main>
    <script src="main.js"></script>
</body>
</html>
```

### CSS
- CSS custom properties for colors/spacing
- Flexbox and grid for layouts
- BEM naming: `block__element--modifier`
- Avoid deep nesting (max 3 levels)
- Global/reset styles first, then components

```css
:root { --primary-color: #990011; --spacing-unit: 8px; }
* { margin: 0; padding: 0; box-sizing: border-box; }
.container { max-width: 1200px; margin: 0 auto; padding: calc(var(--spacing-unit) * 2); }
```

### JavaScript
- ES6+ (const/let, arrow functions, template literals)
- Use strict mode: `'use strict';`
- `const` by default, `let` when reassignment needed
- Wrap code in IIFE or ES modules to avoid globals
- Use semicolons consistently
- JSDoc comments for functions, early returns

```javascript
'use strict';
/** @param {number} price @param {number} taxRate @returns {number} */
function calculateTotal(price, taxRate) {
    if (price <= 0) return 0;
    return price * (1 + taxRate);
}
```

### Imports and Modules
- ES modules with `<script type="module">`
- Explicit file extensions: `./utils.js` not `./utils`

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Files | lowercase, hyphen | `main.js`, `contact-form.css` |
| HTML classes | lowercase, hyphen | `.main-header` |
| HTML IDs | lowercase, hyphen | `#hero-section` |
| JS variables/functions | camelCase | `calculateTotal()` |
| JS constants | UPPER_SNAKE_CASE | `MAX_ITEMS` |
| CSS custom properties | lowercase, hyphen | `--primary-color` |

### Error Handling
- Use try/catch for code that may throw
- Provide meaningful error messages
- Handle errors gracefully (user-friendly)

### Accessibility
- Semantic HTML (`<main>`, `<nav>`, `<header>`, `<footer>`)
- Alt text for images, sufficient color contrast
- Keyboard navigation, ARIA when needed

### Performance
- Minimize CSS/JS, lazy load images (`loading="lazy"`)
- Optimize images (WebP), defer non-critical JS

## Project Structure
```
/
├── index.html
├── style.css
├── main.js
├── img/
├── LICENSE
├── README.md
└── SPEC.md
```

## Version Control
- Small, focused commits
- Clear commit messages (describe what and why)
- Don't commit generated files, dependencies, or secrets