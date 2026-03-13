# AGENTS.md

## Project Overview

This is a simple static website for a grocery store in Uppsala, Sweden. The project consists of HTML, CSS, and vanilla JavaScript with no build system or framework.

## Build / Lint / Test Commands

This project has no build system, linting, or test framework configured.

### Running the Project

Open `index.html` directly in a browser, or use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if installed)
npx serve .
```

### Testing

No tests are configured. If you add tests in the future, prefer:

- **Vitest** for JavaScript unit tests (works well with Vite)
- **Playwright** for end-to-end browser testing

### Linting

No linter is configured. If you add one, consider:

- **ESLint** for JavaScript linting
- **Prettier** for code formatting
- **stylelint** for CSS linting

## Code Style Guidelines

### General

- Keep files small and focused
- Use semantic HTML5 elements
- Write CSS using modern features (CSS variables, flexbox, grid)
- Use vanilla JavaScript (no frameworks unless explicitly requested)

### HTML

- Use lowercase tags and attributes
- Use double quotes for attributes
- Include `lang` attribute on `<html>` for accessibility
- Include meta viewport for responsive design
- Use meaningful, descriptive class names (lowercase, hyphen-separated)

Example:
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

- Use CSS custom properties (variables) for colors and reusable values
- Use flexbox and grid for layouts
- Follow BEM naming convention for complex components: `block__element--modifier`
- Keep selectors simple and avoid deep nesting
- Group related styles together
- Put global styles first, then component styles

Example:
```css
:root {
    --primary-color: #FA4114;
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

- Use ES6+ syntax (const/let, arrow functions, template literals)
- Use strict mode
- Declare variables with `const` by default, `let` when reassignment is needed
- Avoid global variables; wrap code in IIFE or use modules
- Use meaningful variable and function names (camelCase)
- Add semicolons at statement ends
- Use JSDoc comments for functions

Example:
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

const prices = [100, 200, 300];
const totals = prices.map(price => calculateTotal(price, 0.25));
```

### Error Handling

- Use try/catch for code that may throw
- Provide meaningful error messages
- Handle errors gracefully (show user-friendly messages, don't expose internals)

Example:
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
| JavaScript variables/functions | camelCase | `calculateTotal()`, `isValid` |
| JavaScript constants | UPPER_SNAKE_CASE | `MAX_ITEMS`, `API_BASE_URL` |
| CSS custom properties | lowercase, hyphen-separated | `--primary-color` |

### Accessibility

- Use semantic HTML elements (`<main>`, `<nav>`, `<header>`, `<footer>`)
- Include alt text for images
- Use sufficient color contrast
- Ensure keyboard navigation works
- Use ARIA attributes when needed

### Performance

- Minimize CSS and JavaScript
- Use lazy loading for images
- Optimize images (use appropriate formats and sizes)
- Defer non-critical JavaScript

### Version Control

- Make small, focused commits
- Write clear commit messages describing what and why
- Don't commit generated files, dependencies, or secrets

### Adding Dependencies

If you need a build system or framework, consider:

- **Vite** - Fast build tool, great for vanilla JS or frameworks
- **Parcel** - Zero-config bundler
- **esbuild** - Very fast bundler

To add Vite:
```bash
npm create vite@latest . -- --template vanilla
npm install
npm run dev
```

## Project Structure

```
/
├── index.html      # Main HTML file
├── style.css      # Main stylesheet
├── main.js        # Main JavaScript file
├── img/           # Images
├── LICENSE        # License file
└── README.md      # Project readme
```

## Common Tasks

### Adding a new page

1. Create new HTML file (e.g., `about.html`)
2. Copy header/footer from `index.html`
3. Add link to the new page in navigation

### Adding a new script

1. Create new JS file in root or `js/` folder
2. Import in HTML: `<script src="main.js"></script>`
3. Or use ES modules: `<script type="module" src="js/module.js"></script>`

### Adding styles

1. Add CSS to `style.css` or create component-specific CSS file
2. Import in HTML `<head>` after main stylesheet
