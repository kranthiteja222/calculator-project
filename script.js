
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const result = document.getElementById("result");
const multiplyButton = document.getElementById("multiplyButton");

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


multiplyButton.addEventListener("click", function () {
const input1 = document.getElementById("num1").value;
const input2 = document.getElementById("num2").value;

    if (input1.trim() === "" || input2.trim() === "") {
        document.getElementById("result").textContent =
            "Please enter both numbers.";
        return;
    }

    const num1 = Number(input1);
    const num2 = Number(input2);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        document.getElementById("result").textContent =
            "Please enter valid numbers.";
        return;
    }

    document.getElementById("result").textContent =
        "Result: " + (num1 * num2);
});

