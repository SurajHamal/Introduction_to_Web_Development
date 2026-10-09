/**
 * @file script.js
 * @description Client-side interactivity, DOM updates, form validation, 
 * and persistent storage handling for North Star Bakery.
 * @author Suraj Hamal
 */

// ==========================================
// DATA STRUCTURES
// ==========================================

/**
 * Array of objects containing product catalog details.
 * @type {Array<{id: number, name: string, category: string, price: string}>}
 */
const bakeryProducts = [
    { id: 1, name: "Signature Sourdough Loaf", category: "Bread", price: "$8.50" },
    { id: 2, name: "Flaky Butter Croissant", category: "Pastry", price: "$4.00" },
    { id: 3, name: "Artisanal Bread Loaf", category: "Bread", price: "$6.00" },
    { id: 4, name: "Custom Celebration Cake", category: "Cakes", price: "$45.00" }
];

/**
 * Tracking array to store user's selected favorite products.
 * @type {string[]}
 */
let userFavorites = [];

// ==========================================
// INITIALIZATION ON DOM LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    // Load persisted favorites from localStorage and synchronize button states
    loadFavoritesFromStorage();
    // Bind click events to interactive product favorite buttons
    setupInteractiveButtons();
    // Initialize custom form validation rules on the contact form
    setupFormValidation();
});

// ==========================================
// 1. INTERACTIVE FEATURE & BROWSER STORAGE
// ==========================================

/**
 * Queries all product favorite buttons and attaches click event listeners.
 */
function setupInteractiveButtons() {
    const buttons = document.querySelectorAll(".fav-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-product");
            toggleFavorite(productName, this);
        });
    });
}

/**
 * Toggles a product in or out of the userFavorites array, updates UI text, 
 * persists changes to localStorage, and re-renders the dynamic list.
 * 
 * @param {string} productName - The unique name of the bakery product.
 * @param {HTMLElement} buttonElement - The button element that was clicked.
 */
function toggleFavorite(productName, buttonElement) {
    const index = userFavorites.indexOf(productName);
    
    if (index === -1) {
        // Item not found: Add to favorites array
        userFavorites.push(productName);
        if (buttonElement) buttonElement.textContent = "Saved!";
    } else {
        // Item already exists: Remove from favorites array
        userFavorites.splice(index, 1);
        if (buttonElement) buttonElement.textContent = "Save to Favorites";
    }
    
    saveFavoritesToStorage();
    renderFavorites();
}

/**
 * Serializes the userFavorites array and saves it to browser localStorage.
 */
function saveFavoritesToStorage() {
    localStorage.setItem("northStarFavorites", JSON.stringify(userFavorites));
}

/**
 * Retrieves stored favorites from localStorage, populates the array,
 * updates the view, and synchronizes button UI states on page reload.
 */
function loadFavoritesFromStorage() {
    const storedFavorites = localStorage.getItem("northStarFavorites");
    if (storedFavorites) {
        userFavorites = JSON.parse(storedFavorites);
        renderFavorites();
        updateButtonStates(); // Synchronize button labels with persisted data
    }
}

/**
 * Iterates through product buttons on reload to ensure buttons matching 
 * saved items correctly display the "Saved!" state instead of resetting.
 */
function updateButtonStates() {
    const buttons = document.querySelectorAll('.fav-btn');
    buttons.forEach(button => {
        const productName = button.getAttribute('data-product');
        if (userFavorites.includes(productName)) {
            button.textContent = "Saved!";
        } else {
            button.textContent = "Save to Favorites";
        }
    });
}

/**
 * Dynamically renders the current userFavorites array into the DOM list container.
 */
function renderFavorites() {
    const listContainer = document.getElementById("favorites-list");
    if (!listContainer) return; // Exit if element is not present on the current page

    listContainer.innerHTML = ""; // Clear existing list content
    
    if (userFavorites.length === 0) {
        listContainer.innerHTML = "<li>No favorites saved yet.</li>";
        return;
    }

    // Append each favorite item as a list element
    userFavorites.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listContainer.appendChild(li);
    });
}

// ==========================================
// 2. FORM VALIDATION & USER FEEDBACK
// ==========================================

/**
 * Attaches client-side validation logic to the contact form submission event.
 */
function setupFormValidation() {
    const form = document.querySelector("form");
    if (!form) return; // Exit if form is not present on the current page

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Clear previous inline error messages
        document.getElementById("name-error").textContent = "";
        document.getElementById("email-error").textContent = "";

        // Validation Check 1: Required Field Validation (Full Name)
        const nameInput = document.getElementById("full_name");
        if (nameInput.value.trim() === "") {
            document.getElementById("name-error").textContent = "Please enter your full name.";
            isValid = false;
        }

        // Validation Check 2: Email Format Pattern Matching
        const emailInput = document.getElementById("email_address");
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === "") {
            document.getElementById("email-error").textContent = "Email address is required.";
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address containing '@' and a domain.";
            isValid = false;
        }

        // Prevent default form submission if any validation checks fail
        if (!isValid) {
            event.preventDefault();
        }
    });
}