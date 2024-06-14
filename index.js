const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Java Programming'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
    const educationItem = document.querySelectorAll(".education-item");

    educationItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on ${item.querySelector('h3').innerText}`);
        });
    });
});
