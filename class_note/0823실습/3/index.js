var foods = [
    "hamburger",
    "pasta",
    "curry",
    "chicken",
    "salad",
    "tteokbokki",
    "ramen",
    "pizza",
    "gimbap",
    "sushi",
];
// 1번
document.write(foods.length, "<br />");

for (let i = 0; i < foods.length; i++) {
    if (i % 2 === 0) document.write(foods[i], "<br/>");
}

// 2번
document.write(foods.length, "<br />");

for (let i = 0; i < foods.length; i += 2) {
    document.write(foods[i], "<br/>");
}

// 3번
document.write(foods.length, "<br />");

foods.map((item, idx) => {
    if (idx % 2 === 0) document.write(item, "<br/>");
});
