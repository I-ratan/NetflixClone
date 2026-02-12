// ========================
// FAQ Accordion Toggle
// ========================

const faqBoxes = document.querySelectorAll(".faqbox");

faqBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Toggle "active" class to open/close
        box.classList.toggle("active");

        // Rotate the '+' icon (SVG)
        const svg = box.querySelector("svg");
        if (box.classList.contains("active")) {
            svg.style.transform = "rotate(45deg)";
        } else {
            svg.style.transform = "rotate(0deg)";
        }
    });
});

// ========================
// Email Validation
// ========================

const emailInput = document.querySelector("input[type='text']");
const getStartedBtn = document.querySelector(".btn-red");

getStartedBtn.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        alert("Please enter your email to continue.");
    } 
    else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        alert("Enter a valid email address.");
    } 
    else {
        alert("Welcome to Netflix! (Demo)");
    }
});

// ========================
// Navbar buttons
// ========================

const signInBtn = document.querySelector(".btn-red-sm");

signInBtn.addEventListener("click", () => {
    alert("Sign-in Page is not implemented. This is a demo.");
});

const languageBtn = document.querySelector("nav .btn:not(.btn-red-sm)");

languageBtn.addEventListener("click", () => {
    alert("Language options coming soon!");
});


// Fetch movies from JSON file (Local API)
async function loadMovies() {
    const response = await fetch("movies.json");
    const data = await response.json();

    displayMovies("trending", data.trending);
    displayMovies("topRated", data.topRated);
}

function displayMovies(sectionId, movies) {
    const container = document.getElementById(sectionId);

    movies.forEach(movie => {
        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;
        container.appendChild(img);
    });
}

// Load movie data
loadMovies();


// Existing FAQ + Button scripts here…
