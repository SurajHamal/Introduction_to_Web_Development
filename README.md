North Star Bakery Website Project

Project Overview

A client website development project integrating HTML5, CSS Flexbox, and JavaScript to build a fully functional, responsive multi-page web presence. Included semantic site architecture, client-side data persistence via browser storage, form validation, and clear communication of technical decisions for stakeholders.

Tech Used: HTML5, CSS3, JavaScript (ES6+), Web Storage API (localStorage), Git, GitHub Pages

Briefly summarize the North Star Bakery project. Who was the client? What type of system did they want you to design?

This project is for our client North Star Bakery, a local community bakery offering hand-crafted artisanal breads, fresh morning pastries, and custom celebration cakes. The client needed a mobile-first, responsive multi-page website (index.html, products.html, about.html, contact.html) to connect with local customers and expand their digital reach. They wanted a system that allows customers to explore their product offerings, curate a personalized list of favorite bakery items using an interactive tracker that persists across sessions, view operating hours, and submit online pre-orders and inquiries through a validated form.

What did you do particularly well?

I did particularly well in structuring a clean, semantic HTML5 foundation across multiple pages, building a mobile-first responsive layout using CSS Flexbox, and implementing modular JavaScript to power interactive features. Specifically, I excelled at implementing client-side data persistence using the Web Storage API (localStorage) so that saved user favorites remain intact after browser refreshes, establishing inline form validation to provide clear error messages without losing user inputs, and maintaining synchronicity between browser storage and dynamic DOM button states. Furthermore, I successfully documented my code using JSDoc standards and presented technical design choices clearly through presentation artifacts.

If you could choose one part of your work on this project to revise, what would you pick? How would you improve it?

I would choose the CSS layout architecture to revise so that I could refactor repeat rules into more reusable utility classes, adopt CSS Grid alongside Flexbox for complex two-dimensional layouts, and establish CSS custom variables (:root) for color palettes and font stacks earlier in the project lifecycle. Additionally, I would expand the interactive features on the Products page by adding filtering mechanisms (e.g., filtering by category like "Breads" or "Pastries") to further enhance usability as the product catalog grows.

How did you interpret the user’s needs and implement them into your system design? Why is it so important to consider the user’s needs when designing?

I interpreted the user's needs by focusing on convenience and clarity for local customers who want to plan bakery visits or place pre-orders quickly. I implemented these needs by designing intuitive top navigation, creating a dynamic product favorites tracker to let users save items for future orders, and providing instant inline validation feedback on the contact form so users can submit inquiries without confusion. Considering user needs during design is essential because it eliminates usability friction, improves accessibility for diverse users, ensures the web application works seamlessly across both desktop and mobile screens, and drives business success by delivering a positive brand experience that keeps customers returning.

How do you approach designing software? What techniques or strategies would you use in the future to analyze and design a system?

I approach designing software by following a structured web development lifecycle that includes planning, wireframing, frontend architecture, implementation, testing, and deployment. In the planning and analysis phase, I identify key client goals, define target user personas, and map out site navigation and data requirements. In the design phase, I build mobile-first responsive layouts using semantic markup and CSS, ensuring visual hierarchy and contrast. In the implementation phase, I write modular, well-documented JavaScript functions to separate concerns, test DOM manipulation, and implement data persistence. During testing, I verify responsive breakpoints across devices and check for edge-case errors before deploying via Git and GitHub Pages.

In future web development projects, I will continue using strategies learned during this project:

Gathering and mapping client requirements directly to user interface features.

Utilizing semantic HTML landmarks (<header>, <nav>, <main>, <footer>) to maximize web accessibility and SEO.

Applying CSS Flexbox and responsive media queries to guarantee mobile adaptability.

Structuring JavaScript logic into modular, single-responsibility functions with descriptive parameter naming and JSDoc annotations.

Using localStorage and JSON serialization to preserve user state across sessions.

Implementing robust client-side validation with standard regular expressions and dynamic DOM error messaging to prevent invalid data submission.
