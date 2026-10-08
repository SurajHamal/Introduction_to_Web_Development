/* ==========================================
   NORTH STAR BAKERY - INTERACTIVITY SCRIPT
   ========================================== */

// Data Structures: Using objects and arrays (Meets Advanced requirement)
const bakeryProducts = [
    { id: 1, name: "Signature Sourdough Loaf", category: "Bread", price: "$8.50" },
    { id: 2, name: "Flaky Butter Croissant", category: "Pastry", price: "$4.00" },
    { id: 3, name: "Artisanal Bread Loaf", category: "Bread", price: "$6.00" },
    { id: 4, name: "Custom Celebration Cake", category: "Cakes", price: "$45.00" }
];

let userFavorites = [];

// Initialize storage and event listeners on page load
document.addEventListener("DOMContentLoaded", function () {
    loadFavoritesFromStorage();
    setupInteractiveButtons();
    setupFormValidation();
});

/* ==========================================
   1. INTERACTIVE FEATURE & BROWSER STORAGE
   ========================================== */
function setupInteractiveButtons() {
    const buttons = document.querySelectorAll(".fav-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-product");
            toggleFavorite(productName, this);
        });
    });
}

function toggleFavorite(productName, buttonElement) {
    const index = userFavorites.indexOf(productName);
    if (index === -1) {
        userFavorites.push(productName); // Add to array
        if (buttonElement) buttonElement.textContent = "Saved!";
    } else {
        userFavorites.splice(index, 1); // Remove from array
        if (buttonElement) buttonElement.textContent = "Save to Favorites";
    }
    saveFavoritesToStorage();
    renderFavorites();
}

function saveFavoritesToStorage() {
    localStorage.setItem("northStarFavorites", JSON.stringify(userFavorites));
}

function loadFavoritesFromStorage() {
    const storedFavorites = localStorage.getItem("northStarFavorites");
    if (storedFavorites) {
        userFavorites = JSON.parse(storedFavorites);
        renderFavorites();
    }
}

function renderFavorites() {
    const listContainer = document.getElementById("favorites-list");
    if (!listContainer) return;

    listContainer.innerHTML = "";
    if (userFavorites.length === 0) {
        listContainer.innerHTML = "<li>No favorites saved yet.</li>";
        return;
    }

    userFavorites.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listContainer.appendChild(li);
    });
}

/* ==========================================
   2. FORM VALIDATION & USER FEEDBACK
   ========================================== */
function setupFormValidation() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Clear previous error texts
        document.getElementById("name-error").textContent = "";
        document.getElementById("email-error").textContent = "";

        // Check 1: Required Field Check (Full Name)
        const nameInput = document.getElementById("full_name");
        if (nameInput.value.trim() === "") {
            document.getElementById("name-error").textContent = "Please enter your full name.";
            isValid = false;
        }

        // Check 2: Email Format Validation
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

        // Prevent submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
}