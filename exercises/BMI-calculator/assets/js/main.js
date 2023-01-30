const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

const imcMessages = {
    underweight: (value) => `Seu IMC é ${value} (Abaixo do peso)`,
    normal: (value) => `Seu IMC é ${value} (Peso normal)`,
    overweight: (value) => `Seu IMC é ${value} (Sobrepeso)`,
    obesity_one: (value) => `Seu IMC é ${value} (Obesidade grau 1)`,
    obesity_two: (value) => `Seu IMC é ${value} (Obesidade grau 3)`,
    obesity_three: (value) => `Seu IMC é ${value} (Obesidade grau 3)`,
};

function calculate() {
    const valueWeight = parseFloat(weightInput.value);
    const valueHeight = parseFloat(heightInput.value);

    if (!valueWeight) {
        resultElement.innerText = 'Peso inválido!';
        resultElement.style.backgroundColor = '#f24848';
    }
    if (!valueHeight) {
        resultElement.innerText = 'Altura inválida!';
        resultElement.style.backgroundColor = '#f24848';
    }

    const imc = (valueWeight / (valueHeight * 2)).toFixed(1);

    if (imc < 5) {
        resultElement.innerText = 'Seu IMC é estremamente baixo!';
        resultElement.style.backgroundColor = '#f24848';
        return;
    }
    if (imc > 80) {
        resultElement.innerText = 'Seu IMC é estremamente alto!';
        resultElement.style.backgroundColor = '#f24848';
        return;
    }

    if (imc < 18.5) {
        resultElement.innerText = imcMessages.underweight(imc);
    } else if (imc >= 18.5 && imc < 24.9) {
        resultElement.innerText = imcMessages.normal(imc);
    } else if (imc >= 25 && imc < 29.9) {
        resultElement.innerText = imcMessages.overweight(imc);
    } else if (imc >= 30 && imc < 34.9) {
        resultElement.innerText = imcMessages.obesity_one(imc);
    } else if (imc >= 35 && imc < 39.9) {
        resultElement.innerText = imcMessages.obesity_two(imc);
    } else {
        resultElement.innerText = imcMessages.obesity_three(imc);
    }
}

calculateButton.addEventListener('click', calculate);

weightInput.addEventListener('input', (event) => {
    weightInput.value = event.target.value.replace(/\D+/g, '');
});

heightInput.addEventListener('input', (event) => {
    heightInput.value = event.target.value.replace(/\D+/g, '');
});
