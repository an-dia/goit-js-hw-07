// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
console.log(refs.nameOutput);

// refs.nameInput.addEventListener(
//   "input",
//   () =>
//     (refs.nameOutput.textContent =
//       refs.nameInput.value.length > 0 ? refs.nameInput.value : "незнакомец")
// );

refs.nameInput.addEventListener("input", onNameOutput);

function onNameOutput(event) {
  if (refs.nameInput.value !== "") {
    refs.nameOutput.textContent = event.currentTarget.value;
  } else refs.nameOutput.textContent = "незнакомец";
}
