function start() {
    var buttonCalculateIMC = document.querySelector('#button-calculate-imc')
	buttonCalculateIMC.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
    return weight / (height * height);

}

function handleButtonClick() {

    
}

start();















