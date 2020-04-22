function getButton(className) {
    return document.getElementsByClassName(className).item(0);
}

function getDegree(id) {
    return parseInt(document.getElementById(id).value);
}

function setDegree(id, degree) {
    return document.getElementById(id).setAttribute("value", degree);
}

function setBorderColorOutputValue(id, color) {
    document.getElementById(id).style.borderColor = color;
}

function handleExceptionNaN(id) {
    setBorderColorOutputValue(id, "red");
    setDegree(id, "Неверный параметр");
    isExceptionNaN = true;
}

function isFarengeit() {
    return document.getElementById('temperature-output-measure').value === "far"
}

function isKelvin() {
    return document.getElementById('temperature-output-measure').value === "kel"
}

function calculateCelsiaToFarengeit(celsia) {
    return celsia * (9 / 5) + 32;
}

function calculateCelsiaToKelvin(celsia) {
    return celsia + 273.15;
}

function convertEvent() {
    var celsiaDegree = getDegree("temperature-input-value");

    if (isNaN(celsiaDegree)) {
        return handleExceptionNaN("temperature-output-value");
    }

    if (isExceptionNaN) {
        setBorderColorOutputValue("temperature-output-value", "gray");
        isExceptionNaN = false;
    }

    if (isFarengeit()) {
        return setDegree("temperature-output-value", calculateCelsiaToFarengeit(celsiaDegree));
    }

    if (isKelvin()) {
        return setDegree("temperature-output-value", calculateCelsiaToKelvin(celsiaDegree));
    }
}

var isExceptionNaN = false;

function main() {
    getButton("button-convert").addEventListener("click", () => convertEvent());

    document.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            convertEvent();
        }
    });
}

main();
