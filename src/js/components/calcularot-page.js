// Получаем все радио-кнопки в блоке calculator__left_culture-type
const cultureInputs = document.querySelectorAll(
  '.calculator__left_culture-type input[type="radio"]'
);

// Получаем блок меню выбора овощей
const cropMenu = document.querySelector(".calculator__left_crop-type");

// Добавляем обработчик события change на каждую радио-кнопку
cultureInputs.forEach((input) => {
  input.addEventListener("change", () => {
    // Проверяем, выбрана ли опция "Овощи"
    if (input.value === "vegetables" && input.checked) {
      // Показываем меню выбора овощей
      cropMenu.classList.add("visible");
    } else {
      // Скрываем меню выбора овощей
      cropMenu.classList.remove("visible");
    }
  });
});
////////////////////////////////////////////////////////////////////////////////
function calculate() {
  let farmArea = parseFloat(document.getElementById("area").value);
  let wagePerEmployee = parseFloat(document.getElementById("wage").value);
  let electricityTariff = parseFloat(
    document.getElementById("electricity").value
  );
  let waterTariff = parseFloat(document.getElementById("water").value);
  let marketPricePerKg = parseFloat(document.getElementById("costagri").value);
  let rentPerSquareMeter = parseFloat(document.getElementById("rent").value);
  let otherExpenses = parseFloat(document.getElementById("other").value);

  // Проверка на NaN и установка значений по умолчанию
  farmArea = isNaN(farmArea) ? 0 : farmArea;
  wagePerEmployee = isNaN(wagePerEmployee) ? 0 : wagePerEmployee;
  electricityTariff = isNaN(electricityTariff) ? 0 : electricityTariff;
  waterTariff = isNaN(waterTariff) ? 0 : waterTariff;
  marketPricePerKg = isNaN(marketPricePerKg) ? 0 : marketPricePerKg;
  rentPerSquareMeter = isNaN(rentPerSquareMeter) ? 0 : rentPerSquareMeter;
  otherExpenses = isNaN(otherExpenses) ? 0 : otherExpenses;

  // Расчеты
  let specificPowerRequirement = 0.1;
  let specificWaterRequirement = 0.01;
  let baseFarmCost = 1000000;
  let costPerSquareMeter = 5000;
  let potYieldPerSquareMeter = 10;
  let averageWeightPerPot = 0.5;
  let numberOfEmployees = 5;
  let daysInMonth = 30;

  let plantingArea = farmArea * 0.8;
  let powerRequirement = plantingArea * specificPowerRequirement;
  let dailyEnergyConsumption = powerRequirement * 24;
  let dailyWaterConsumption = plantingArea * specificWaterRequirement;
  let farmCost = baseFarmCost + plantingArea * costPerSquareMeter;
  let potYield = plantingArea * potYieldPerSquareMeter;
  let yieldKg = potYield * averageWeightPerPot;
  let revenue = yieldKg * marketPricePerKg;
  let monthlyElectricityCost =
    dailyEnergyConsumption * daysInMonth * electricityTariff;
  let monthlyLaborCost = numberOfEmployees * wagePerEmployee;
  let monthlyRent = farmArea * rentPerSquareMeter;
  let maintenanceCost = otherExpenses;
  let monthlyProfit =
    revenue -
    (monthlyElectricityCost + monthlyLaborCost + monthlyRent + maintenanceCost);
  let paybackPeriod = farmCost / monthlyProfit / 12;

  // Отображение результатов
  document.getElementById("plantingArea").innerText = plantingArea.toFixed(2);
  document.getElementById("powerRequirement").innerText =
    powerRequirement.toFixed(2);
  document.getElementById("energyConsumption").innerText =
    dailyEnergyConsumption.toFixed(2);
  document.getElementById("waterConsumption").innerText =
    dailyWaterConsumption.toFixed(2);
  document.getElementById("farmCost").innerText = (farmCost / 1000).toFixed(2); // В тыс. руб.
  document.getElementById("potYield").innerText = potYield.toFixed(2);
  document.getElementById("yieldKg").innerText = yieldKg.toFixed(2);
  document.getElementById("revenue").innerText = revenue.toFixed(2);
  document.getElementById("electricityCost").innerText =
    monthlyElectricityCost.toFixed(2);
  document.getElementById("taxAndExpenses").innerText =
    monthlyLaborCost.toFixed(2);
  document.getElementById("rentCost").innerText = monthlyRent.toFixed(2);
  document.getElementById("maintenanceCost").innerText =
    maintenanceCost.toFixed(2);
  document.getElementById("monthlyProfit").innerText = monthlyProfit.toFixed(2);
  document.getElementById("paybackPeriod").innerText = paybackPeriod.toFixed(2);
}

// Добавляем обработчики событий для всех полей ввода
document
  .querySelectorAll(".calculator__left_input-fields input")
  .forEach((input) => {
    input.addEventListener("input", calculate);
  });

// Начальные расчеты при загрузке страницы
document.addEventListener("DOMContentLoaded", calculate);
