function calculate(operation) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                result = "Kan ikke dele på 0";
            } else {
                result = num1 / num2;
            }
            break;
    }

    document.getElementById("result").textContent = result;
}