const sidebar = document.querySelector(".Sidebar")
const sidebarToggleBtn = document.querySelectorAll(".sidebar-toggle");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");
const searchForm  = document.querySelector(".search-form");
const updateThemeIcon = () => {
    const isDark = document.body.classList.contains("dark-theme");
    themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode") : "dark_mode";
}

const savedTheme = localStorage.getItem("theme");
const systemPreferenceDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPreferenceDark);
document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeIcon();
sidebarToggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        updateThemeIcon();
    });
});

searchForm.addEventListener("click", () => {
    if(sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
        searchForm.querySelector("input").focus();
        
    }
});

themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon();
});


if(window.innerWidth > 768) sidebar.classList.add("collapsed");











