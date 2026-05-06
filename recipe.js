const recipes = {
    1: {
        name: "Блины",
        img: "image 4.png",
        ingredients: "Состав: яйца, сахар, соль, молоко, мука, растительное масло",
        text: "Смешать ингредиенты, жарить на сковороде до золотистой корочки."
    },
    2: {
        name: "Сырники",
        img: "image 5.png",
        ingredients: "Состав: творог, яйцо, сахар, мука, ванильный сахар, соль",
        text: "Смешать всё, сформировать лепёшки и обжарить."
    },
    3: {
        name: "Шарлотка",
        img: "image 6.png",
        ingredients: "Состав: яйца, сахар, мука, яблоки, разрыхлитель",
        text: "Смешать тесто, добавить яблоки и выпекать в духовке."
    }
};

// получаем id из URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// если рецепта нет — защита
if (!recipes[id]) {
    document.body.innerHTML = "<h1>Рецепт не найден </h1>";
} else {
    const recipe = recipes[id];

    document.getElementById("recipe_name").textContent = recipe.name;
    document.getElementById("recipe_img").src = recipe.img;
    document.getElementById("recipe_ingredients").textContent = recipe.ingredients;
    document.getElementById("recipe_text").textContent = recipe.text;
}


