import JustValidate from "just-validate";
import Inputmask from "inputmask";

let selector = document.querySelector("#phone");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

let validation = new JustValidate("#req-form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Заполните имя!",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Поле должно содержать минимум 2 символа",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Заполните email!",
    },
  ])
  .addField("#phone", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      errorMessage: "Заполните телефон!",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: "Введите телефон полностью",
    },
  ])
  .addField("#city", [
    {
      rule: "required",
      errorMessage: "Заполните город!",
    },
  ])
  .addField("#message", [
    {
      rule: "required",
      errorMessage: "Заполните сообщение!",
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Минимум 10 символов!",
    },
  ])
  .onSuccess(async function () {
    let data = {
      name: document.getElementById("name").value,
      tel: selector.inputmask.unmaskedvalue(),
      mail: document.getElementById("email").value,
      city: document.getElementById("city").value,
      msg: document.getElementById("message").value,
    };

    let response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    let result = await response.text();

    alert(result);
  });
