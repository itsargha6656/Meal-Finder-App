import { recipeData } from "./data.js"


const getRecipeBtn = document.getElementById('getRecipe')
const getMenuBtn = document.getElementById('getMenu')
const contentForm = document.getElementById('content')
const menuForm = document.getElementById('menu')
const mealForm = document.querySelector(".meal")

let btnData
getRecipeBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const selectedRadio = document.querySelector("input[name='food']:checked")
  if (selectedRadio) {
    btnData = selectedRadio.value
    contentForm.style.display = 'none'
    menuForm.style.display = 'flex'
  }
  else {
    console.log("No option needed!")
  }
})
let btnData1

getMenuBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const selectedRadio = document.querySelector("input[name='mealType']:checked")
  if (selectedRadio) {
    btnData1 = selectedRadio.value
    menuForm.style.display = 'none'
    mealForm.style.display = "flex"
    document.querySelector(".banner").textContent = "Hope U will enjoy the meal"
    render(btnData)

  }
  else {
    console.log("No option needed!")
  }
})
function render(btnData) {
  let renderValue = []
  for (let a of recipeData) {
    if (a.categoryTags.includes(btnData)) {
      renderValue.push(a.recipe)
    }
  }

  if (renderValue.length > 0) {
    mealForm.innerHTML = renderValue.map(r => `<p>${r}</p>`).join("");
  } else {
    mealForm.innerHTML = `<p>No recipes found for ${btnData}</p>`;
  }
}
