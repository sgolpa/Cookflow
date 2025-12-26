import recipes from "../data/recipes.js";

const root = document.getElementById("recipe-root");

const formatAmount = (ingredient) => {
  if (ingredient.amount === null || ingredient.amount === undefined) {
    return ingredient.label;
  }

  const unitPart = ingredient.unit ? ` ${ingredient.unit}` : "";
  return `${ingredient.amount}${unitPart} ${ingredient.label}`;
};

const createIngredientList = (items) => {
  const list = document.createElement("ul");
  list.className = "ingredients-list";

  items.forEach((ingredient) => {
    const li = document.createElement("li");
    li.className = "ingredient-item";

    const line = document.createElement("div");
    line.textContent = formatAmount(ingredient);
    li.appendChild(line);

    if (ingredient.note) {
      const note = document.createElement("div");
      note.className = "ingredient-note";
      note.textContent = ingredient.note;
      li.appendChild(note);
    }

    list.appendChild(li);
  });

  return list;
};

const renderIngredients = (ingredients) => {
  const section = document.createElement("section");
  section.className = "recipe-section";

  const title = document.createElement("h2");
  title.textContent = "Ingredienser";
  section.appendChild(title);

  const grouped = ingredients.reduce((acc, item) => {
    const key = item.section || "__default";
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});

  const groups = Object.entries(grouped);

  groups.forEach(([key, items]) => {
    if (key !== "__default") {
      const groupTitle = document.createElement("h3");
      groupTitle.className = "section-subtitle";
      groupTitle.textContent = key;
      section.appendChild(groupTitle);
    }

    section.appendChild(createIngredientList(items));
  });

  return section;
};

const renderSteps = (steps) => {
  const section = document.createElement("section");
  section.className = "recipe-section";

  const title = document.createElement("h2");
  title.textContent = "Gör så här";
  section.appendChild(title);

  const list = document.createElement("ol");
  list.className = "steps-list";

  steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    list.appendChild(li);
  });

  section.appendChild(list);
  return section;
};

const renderMeta = (recipe) => {
  const hasTime = Number.isFinite(recipe.time);
  const hasServings = Number.isFinite(recipe.servings);

  if (!hasTime && !hasServings) return null;

  const meta = document.createElement("div");
  meta.className = "meta-row";

  if (hasTime) {
    const time = document.createElement("span");
    time.className = "meta-pill";
    time.textContent = `${recipe.time} min`;
    meta.appendChild(time);
  }

  if (hasServings) {
    const servings = document.createElement("span");
    servings.className = "meta-pill";
    servings.textContent = `${recipe.servings} portioner`;
    meta.appendChild(servings);
  }

  return meta;
};

const renderRecipe = (recipe) => {
  const fragment = document.createDocumentFragment();

  const backLink = document.createElement("a");
  backLink.href = "index.html";
  backLink.className = "back-link";
  backLink.textContent = "← Tillbaka till alla recept";
  fragment.appendChild(backLink);

  const header = document.createElement("header");
  header.className = "recipe-header";

  const title = document.createElement("h1");
  title.textContent = recipe.title;
  header.appendChild(title);

  if (recipe.description) {
    const description = document.createElement("p");
    description.className = "recipe-description";
    description.textContent = recipe.description;
    header.appendChild(description);
  }

  const meta = renderMeta(recipe);
  if (meta) {
    header.appendChild(meta);
  }

  fragment.appendChild(header);

  fragment.appendChild(renderIngredients(recipe.ingredients || []));
  fragment.appendChild(renderSteps(recipe.steps || []));

  return fragment;
};

const renderNotFound = () => {
  const container = document.createElement("div");
  container.className = "not-found";

  const title = document.createElement("h1");
  title.textContent = "Receptet hittades inte";
  container.appendChild(title);

  const link = document.createElement("a");
  link.href = "index.html";
  link.textContent = "Tillbaka till alla recept";
  container.appendChild(link);

  return container;
};

const init = () => {
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const recipe = recipes.find((item) => item.id === id);

  root.innerHTML = "";

  if (!recipe) {
    root.appendChild(renderNotFound());
    return;
  }

  root.appendChild(renderRecipe(recipe));
};

document.addEventListener("DOMContentLoaded", init);
