const accordionBtns = document.querySelectorAll(".accordion-btn");
const listItems = document.querySelectorAll("li");

function toggleHideClass(element) {
  element.classList.toggle("hide");
}

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
