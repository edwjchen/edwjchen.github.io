// Toggles dark mode and stuff.
// css-tricks.com/a-complete-guide-to-dark-mode-on-the-web

function getTheme() {
    currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        return currentTheme;
    } else {
        return "light"; // dark by default
    }
}

function toggleTheme() {
    let theme = getTheme();
    if (theme == "light") {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");

        $("i").removeClass("light");
        $("i").addClass("dark");

        let navigationLinks = document.querySelectorAll("nav a");
        for (var i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].classList.remove("light");
            navigationLinks[i].classList.add("dark");
        }

        $("h1, h2, h3, h4, h5, h6").removeClass("light");
        $("h1, h2, h3, h4, h5, h6").addClass("dark");

        $(".author_title").removeClass("light_title");
        $(".author_title").addClass("dark_title");

        $(".post_date").removeClass("light_title");
        $(".post_date").addClass("dark_title");

        $(".dark_mode").removeClass("fa-sun-o");
        $(".dark_mode").addClass("fa-moon-o");

        localStorage.setItem("theme", "dark");
    } else if (theme == "dark") {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");

        $("i").removeClass("dark");
        $("i").addClass("light");

        let navigationLinks = document.querySelectorAll("nav a");
        for (var i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].classList.remove("dark");
            navigationLinks[i].classList.add("light");
        }

        $("h1, h2, h3, h4, h5, h6").removeClass("dark");
        $("h1, h2, h3, h4, h5, h6").addClass("light");

        $(".author_title").removeClass("dark_title");
        $(".author_title").addClass("light_title");

        $(".post_date").removeClass("dark_title");
        $(".post_date").addClass("light_title");

        $(".dark_mode").removeClass("fa-moon-o");
        $(".dark_mode").addClass("fa-sun-o");

        localStorage.setItem("theme", "light");
    }
}

function setTheme() {
    let theme = getTheme();
    if (theme == "dark") {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");

        $("i").removeClass("light");
        $("i").addClass("dark");

        let navigationLinks = document.querySelectorAll("nav a");
        for (var i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].classList.remove("light");
            navigationLinks[i].classList.add("dark");
        }

        $("h1, h2, h3, h4, h5, h6").removeClass("light");
        $("h1, h2, h3, h4, h5, h6").addClass("dark");

        $(".author_title").removeClass("light_title");
        $(".author_title").addClass("dark_title");

        $(".post_date").removeClass("light_title");
        $(".post_date").addClass("dark_title");

        $(".dark_mode").removeClass("fa-sun-o");
        $(".dark_mode").addClass("fa-moon-o");

        localStorage.setItem("theme", "dark");
    } else if (theme == "light") {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");

        $("i").removeClass("dark");
        $("i").addClass("light");

        let navigationLinks = document.querySelectorAll("nav a");
        for (var i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].classList.remove("dark");
            navigationLinks[i].classList.add("light");
        }

        $("h1, h2, h3, h4, h5, h6").removeClass("dark");
        $("h1, h2, h3, h4, h5, h6").addClass("light");

        $(".author_title").removeClass("dark_title");
        $(".author_title").addClass("light_title");

        $(".post_date").removeClass("dark_title");
        $(".post_date").addClass("light_title");

        $(".dark_mode").removeClass("fa-moon-o");
        $(".dark_mode").addClass("fa-sun-o");

        localStorage.setItem("theme", "light");
    }
}

function showContent() {
    document.body.style.visibility = "visible";
    document.body.style.opacity = 1;
}

window.onload = () => {
    setTheme();
    showContent();
};
