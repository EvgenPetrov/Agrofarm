const openFormButton = document.getElementById("openFormButton");

// Проверить, существует ли кнопка на странице
if (openFormButton) {
  // Добавить обработчик события click на кнопку
  openFormButton.addEventListener("click", () => {
    scrollToForm(); // Вызвать функцию scrollToForm при клике на кнопку
  });
} else {
  console.error("Кнопка для прокрутки к форме не найдена");
}

// Стрелочная функция для плавной прокрутки к форме
const scrollToForm = () => {
  // Проверка существования элемента формы
  const formElement = document.getElementById("req-form");
  if (formElement) {
    // Получение позиции элемента формы
    const formTop = formElement.getBoundingClientRect().top;

    // Плавная прокрутка к элементу
    window.scrollTo({
      top: formTop,
      behavior: "smooth",
    });
  } else {
    console.error("Элемент формы не найден");
  }
};
