function openAPCSP() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank")
}

function openAPCSA() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank")
}

const imageSources = [
    "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
]
let currentIndex = 0;

function rightButton() {
    if (currentIndex === 2) {
        currentIndex = 0
    } else {
        currentIndex++;
    }
    document.getElementById("carousel-item").src = imageSources[currentIndex];
}

function leftButton() {
    if (currentIndex === 0) {
        currentIndex = 2
    } else {
        currentIndex--;
    }
    document.getElementById("carousel-item").src = imageSources[currentIndex];
}

function sidebar() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    navbar.classList.toggle("hidden");
    if (hamburger.classList.contains("white")) {
        hamburger.classList.remove("white")
        hamburger.classList.add("blue");
    } else if (hamburger.classList.contains("blue")) {
        hamburger.classList.remove("blue");
        hamburger.classList.add("white");
    }
}

function classesDropdown(type) {
    const classes = document.getElementById("classes");
    const clubs = document.getElementById("clubs");
    if (type === "classes") {
        navTo("#courses-title");
        if (clubs.classList.contains("shown")) {
            clubs.classList.remove("shown");
            clubs.classList.add("hidden");
        }
        if (classes.classList.contains("hidden")) {
            classes.classList.remove("hidden");
            classes.classList.add("shown");
        } else if (classes.classList.contains("shown")) {
            classes.classList.remove("shown");
            classes.classList.add("hidden");
        }
    } else if (type === "clubs") {
        navTo("#extracurriculars");
        if (classes.classList.contains("shown")) {
            classes.classList.remove("shown");
            classes.classList.add("hidden");
        }
        if (clubs.classList.contains("hidden")) {
            clubs.classList.remove("hidden");
            clubs.classList.add("shown");
        } else if (clubs.classList.contains("shown")) {
            clubs.classList.remove("shown");
            clubs.classList.add("hidden");
        }
    }
}

function navTo(id) {
    window.location.href = id
}