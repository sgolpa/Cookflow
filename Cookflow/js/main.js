import recipes from "../data/recipes.js";

const recipeListEl = document.getElementById("recipe-list");
const searchInputEl = document.getElementById("search-input");

const createRecipeCard = (recipe) => {
  const card = document.createElement("article");
  card.className = "recipe-card";

  const title = document.createElement("a");
  title.className = "recipe-title";
  title.href = `recipe.html?id=${encodeURIComponent(recipe.id)}`;
  title.textContent = recipe.title;

  const header = document.createElement("div");
  header.className = "card-header";
  header.appendChild(title);

  const description = document.createElement("p");
  description.className = "recipe-description";
  description.textContent = recipe.description || "Ingen beskrivning ännu.";

  const tagsWrapper = document.createElement("div");
  tagsWrapper.className = "tags";
  const visibleTags = (recipe.tags || []).slice(0, 3);
  visibleTags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = tag;
    tagsWrapper.appendChild(tagEl);
  });
  const remaining = (recipe.tags || []).length - visibleTags.length;
  if (remaining > 0) {
    const moreEl = document.createElement("span");
    moreEl.className = "tag more";
    moreEl.textContent = `+${remaining}`;
    tagsWrapper.appendChild(moreEl);
  }

  card.appendChild(header);
  card.appendChild(description);
  card.appendChild(tagsWrapper);

  return card;
};

const renderList = (items) => {
  recipeListEl.innerHTML = "";

  if (!items.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "Inga recept hittades.";
    recipeListEl.appendChild(emptyState);
    return;
  }

  items.forEach((recipe) => {
    const card = createRecipeCard(recipe);
    recipeListEl.appendChild(card);
  });
};

const filterBySearch = (query) => {
  const term = query.trim().toLowerCase();
  if (!term) return recipes;
  return recipes.filter((recipe) => recipe.title.toLowerCase().includes(term));
};

const init = () => {
  renderList(recipes);

  if (searchInputEl) {
    searchInputEl.addEventListener("input", (event) => {
      const filtered = filterBySearch(event.target.value);
      renderList(filtered);
    });
  }
};

document.addEventListener("DOMContentLoaded", init);
