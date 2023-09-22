// script.js
document.addEventListener("DOMContentLoaded", function () {
    const recipeDisplay = document.getElementById("recipeDisplay");
    const generateButton = document.getElementById("generate-button");

    const recipes = [
        // Define your recipe data here
        // Each recipe should be an object with properties like "name," "ingredients," and "instructions"
    ];

    generateButton.addEventListener("click", function () {
        // Generate a random index to select a recipe
        const randomIndex = Math.floor(Math.random() * recipes.length);

        // Get the random recipe
        const randomRecipe = recipes[randomIndex];

        // Display the recipe on the page
        displayRecipe(randomRecipe);
    });

    function displayRecipe(recipe) {
        recipeDisplay.innerHTML = `
            <h2>${recipe.name}</h2>
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}
            </ol>
        `;
    }
});
