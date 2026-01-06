const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const unitType = document.getElementById("unitType");
const result = document.getElementById("result");

const units = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01
  },
  weight: {
    gram: 1,
    kilogram: 1000,
    pound: 453.592
  }
};

function resetUnits() {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  const selected = unitType.value;
  for (let unit in units[selected]) {
    fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
    toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
  }
}

resetUnits();

function convert() {
  const value = document.getElementById("inputValue").value;
  if (value === "") return;

  const type = unitType.value;
  const from = fromUnit.value;
  const to = toUnit.value;

  const converted =
    (value * units[type][from]) / units[type][to];

  result.innerText = `Result: ${converted}`;
}
