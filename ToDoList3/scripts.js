const restContainer = document.querySelector(".rest");

restContainer.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("checkbox")) {
    const li = target.nextElementSibling.querySelector("li");
    if (li) {
      li.classList.toggle("completed");
    }
    target.style.backgroundColor = "rgb(246, 99, 46)";
    target.style.border = "none";
  }

  if (target.tagName === "BUTTON") {
    target.parentNode.parentNode.classList.add("deletedTask");
  }
});

const inputField = document.querySelector(".search input");
const mainBtn = inputField.nextElementSibling;

mainBtn.addEventListener("click", function () {
  let inputValue = inputField.value;
  inputField.value = "";
  restContainer.innerHTML += `<div class="tasks">
        <div class="checkbox">🗸</div>
        <div class="task-items">
            <li>${inputValue}</li>
            <button>X</button>
        </div>
    </div>`;
});
function addTask() {
    let inputValue = inputField.value;
    inputField.value = "";
    restContainer.innerHTML += `<div class="tasks">
      <div class="checkbox">🗸</div>
      <div class="task-items">
          <li>${inputValue}</li>
          <button>X</button>
      </div>
    </div>`;
  }
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
});
