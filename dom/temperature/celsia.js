function getDegree(id) {
    return parseInt(document.getElementById(id).value);
}

function getButton(className) {
    return document.getElementsByClassName(className).item(0);
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
    isExceptionNan = true;
}

function isFarengeit() {
    return document.getElementById('temperature-output-measure').value === "far"
}

function iskelvin() {
    return document.getElementById('temperature-output-measure').value === "kel"
}

function calculateCelsiaToFarengeit(celsia) {
    return celsia * (9 / 5) + 32;
}

function calculateCelsiaToKelvun(celsia) {
    return celsia + 273.15;
}

var isExceptionNan = false;

function main() {
    getButton("button-convert")
        .addEventListener("click", function () {
            var celsiaDegree = getDegree("temperature-input-value");

            if (isNaN(celsiaDegree)) {
                handleExceptionNaN("temperature-output-value");
                return;
            }

            if (isExceptionNan) {
                setBorderColorOutputValue("temperature-output-value", "gray");
                isExceptionNan = false;
            }

            if (isFarengeit()) {
                setDegree("temperature-output-value", calculateCelsiaToFarengeit(celsiaDegree));
                return
            }

            if (iskelvin()) {
                setDegree("temperature-output-value", calculateCelsiaToKelvun(celsiaDegree))
                return;
            }
        });
}

main();
