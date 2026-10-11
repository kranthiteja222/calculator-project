
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const result = document.getElementById("result");

addButton.addEventListener("click", function () {
    const firstValue = num1Input.value.trim();
    const secondValue = num2Input.value.trim();

    if (firstValue === "" || secondValue === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    const sum = num1 + num2;
    result.textContent = String(sum);
});
