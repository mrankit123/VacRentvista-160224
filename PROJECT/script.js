// script.js

function search() {
    var searchInput = document.getElementById('searchInput').value;
    // Implement search functionality
}

function navigateToSearch() {
    // Redirect to search page
    window.location.href = 'search.html';
}

// Sample data for featured properties
const properties = [
    {
        name: "Rajwar PG",
        description: "Aambhag, Tanakpur",
        imageUrl: "aaa.JPG",
        detailsUrl: "#"
    },
    {
        name: "Chatori Gali",
        description: "Aambhag, Tanakpur",
        imageUrl: "222.JPG",
        detailsUrl: "#"
    },
    {
        name: "Bhatt PG",
        description: "Aambhag, Tanakpur",
        imageUrl: "3333.JPG",
        detailsUrl: "#"
    }
    // Add more properties here
];

// Function to create a card element
function createCard(property) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = property.imageUrl;
    image.alt = property.name;

    const heading = document.createElement("h3");
    heading.textContent = property.name;

    const description = document.createElement("p");
    description.textContent = property.description;

    const button = document.createElement("button");
    button.textContent = "View Details";
    button.addEventListener("click", function() {
        window.location.href = property.detailsUrl;
    });

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(button);

    return card;
}

// Function to render the cards
function renderCards() {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = ""; // Clear existing cards

    properties.forEach(function(property) {
        const card = createCard(property);
        cardContainer.appendChild(card);
    });
}

// Call the renderCards function to initially render the cards
renderCards();

function navigateToPropertiesPage() {
    window.location.href = "properties.html"; // Replace "properties.html" with the actual URL of the properties page
}

// script.js

// Function to toggle the visibility of navigation links
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Function to handle click event on the toggle button
function toggleButtonClick() {
    toggleNav(); // Toggle the visibility of navigation links
}

// Function to handle clicks outside the navigation links
function handleOutsideClick(event) {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.querySelector('.navbar-toggle');

    // Check if the click occurred outside the navigation links and toggle button
    if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
        nav.classList.remove('active'); // Hide navigation links
    }
}

// Event listener for the toggle button click
document.querySelector('.navbar-toggle').addEventListener('click', toggleButtonClick);

// Event listener to close navigation links when clicking outside
document.addEventListener('click', handleOutsideClick);
