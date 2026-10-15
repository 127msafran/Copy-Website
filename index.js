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