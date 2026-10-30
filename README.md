<h1>
  <a href="https://surajhamal.github.io/Introduction_to_Web_Development/" target="_blank">North Star Bakery Website Project</a>
</h1>

## Project Overview

A client website development project integrating HTML5, CSS Flexbox, and JavaScript to build a fully functional, responsive multi-page web presence. Included semantic site architecture, client-side data persistence via browser storage, form validation, and clear communication of technical decisions for stakeholders.

- **Tech Used:** HTML5, CSS3, JavaScript (ES6+), Web Storage API (`localStorage`), Git, GitHub Pages

---

## Project Summary: The Client & System

**Who was the client? What type of system did they want you to design?**
This project is for our client North Star Bakery, a local community bakery offering hand-crafted artisanal breads, fresh morning pastries, and custom celebration cakes. The client needed a mobile-first, responsive multi-page website (`index.html`, `products.html`, `about.html`, `contact.html`) to connect with local customers and expand their digital reach. They wanted a system that allows customers to explore their product offerings, curate a personalized list of favorite bakery items using an interactive tracker that persists across sessions, view operating hours, and submit online pre-orders and inquiries through a validated form.

---

## What I Did Particularly Well

I did particularly well in structuring a clean, semantic HTML5 foundation across multiple pages, building a mobile-first responsive layout using CSS Flexbox, and implementing modular JavaScript to power interactive features. Specifically, I excelled at:
- Implementing client-side data persistence using the Web Storage API (`localStorage`) so that saved user favorites remain intact after browser refreshes.
- Establishing inline form validation to provide clear error messages without losing user inputs.
- Maintaining synchronicity between browser storage and dynamic DOM button states.
- Documenting code using JSDoc standards and presenting technical design choices clearly through presentation artifacts.

---

## Areas for Revision & Improvement

If I could choose one part of my work on this project to revise, I would choose the CSS layout architecture so that I could:
- Refactor repeat rules into more reusable utility classes.
- Adopt CSS Grid alongside Flexbox for complex two-dimensional layouts.
- Establish CSS custom variables (`:root`) for color palettes and font stacks earlier in the project lifecycle.
- Expand interactive features on the Products page by adding filtering mechanisms (e.g., filtering by category like "Breads" or "Pastries") to further enhance usability as the product catalog grows.

---

## Interpreting User Needs & System Implementation

**How did you interpret the user’s needs and implement them into your system design? Why is it so important to consider the user’s needs when designing?**
I interpreted the user's needs by focusing on convenience and clarity for local customers who want to plan bakery visits or place pre-orders quickly. I implemented these needs by designing intuitive top navigation, creating a dynamic product favorites tracker to let users save items for future orders, and providing instant inline validation feedback on the contact form so users can submit inquiries without confusion. 

Considering user needs during design is essential because it eliminates usability friction, improves accessibility for diverse users, ensures the web application works seamlessly across both desktop and mobile screens, and drives business success by delivering a positive brand experience that keeps customers returning.

---

## Approach to Designing Software & Future Strategies

I approach software design by following a structured web development lifecycle that includes planning, wireframing, frontend architecture, implementation, testing, and deployment:
1. **Planning & Analysis:** Identify key client goals, define target user personas, and map out site navigation and data requirements.
2. **Design:** Build mobile-first responsive layouts using semantic markup and CSS, ensuring visual hierarchy and contrast.
3. **Implementation:** Write modular, well-documented JavaScript functions to separate concerns, test DOM manipulation, and implement data persistence.
4. **Testing & Deployment:** Verify responsive breakpoints across devices and check for edge-case errors before deploying via Git and GitHub Pages.

### Future Web Development Strategies:
- Gathering and mapping client requirements directly to user interface features.
- Utilizing semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) to maximize web accessibility and SEO.
- Applying CSS Flexbox and responsive media queries to guarantee mobile adaptability.
- Structuring JavaScript logic into modular, single-responsibility functions with descriptive parameter naming and JSDoc annotations.
- Using `localStorage` and JSON serialization to preserve user state across sessions.
- Implementing robust client-side validation with standard regular expressions and dynamic DOM error messaging to prevent invalid data submission.
