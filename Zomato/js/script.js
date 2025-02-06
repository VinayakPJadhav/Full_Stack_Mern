document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("input");

    // Smooth hover effect on input field
    searchInput.addEventListener("focus", function () {
        searchInput.style.backgroundColor = "#ffe6e6";
    });

    searchInput.addEventListener("blur", function () {
        searchInput.style.backgroundColor = "#fff";
    });

    // Logo animation on page load
    const logo = document.querySelector("main img");
    setTimeout(() => {
        logo.style.transform = "scale(1.1)";
    }, 300);
    
    setTimeout(() => {
        logo.style.transform = "scale(1)";
    }, 600);

    function openLink(url) {
        window.location.href = url;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("theme-toggle");
        const currentTheme = localStorage.getItem("theme") || "light";
        
        document.body.setAttribute("data-theme", currentTheme);
        themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    
        themeToggle.addEventListener("click", () => {
            let newTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
            document.body.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
        });
    });
    
    
});
