const accordionBtns = document.querySelectorAll(".accordion-btn");
const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");
const answers = document.querySelectorAll(".answer-container");

function toggleHideClass(element) {
  element.classList.toggle("hide");
}

const listItems = document.querySelectorAll("li");

listItems.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    const currentAnswer = listItem.querySelector(".answer-container");
    toggleHideClass(currentAnswer);
  });
});

accordionBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const currentPlusIcon = button.querySelector(".plus-icon");
    const currentMinusIcon = button.querySelector(".minus-icon");

    toggleHideClass(currentPlusIcon);
    toggleHideClass(currentMinusIcon);
  });
});
