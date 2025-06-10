"use strict";
const Categories = document.querySelectorAll(".Category");
const Stars = document.querySelectorAll(".stars");
Categories.forEach((e) => {
    e.addEventListener("click", () => {
        Categories.forEach((Category) => Category.classList.remove("active"));
        e.classList.add("active");
    });
});
Stars.forEach((star) => {
    star.addEventListener("click", () => {
        star.classList.toggle("fa-solid");
        star.classList.toggle("text-yellow-500");
    });
});
