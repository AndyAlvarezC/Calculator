const input = document.getElementById('input');
const buttons = document.querySelectorAll('.buttonNumbers');
const calculateButton = document.querySelector('.buttonCalculate');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');
        if (value === 'R') {
            input.value = Math.floor(Math.random() * 101);
        } else if (value === 'B') {
            input.value = input.value.slice(0, -1);
        } else if (value === 'C') {
            input.value = '';
        } else if (value === 'x' || value === 'X') {
            input.value += '*';
        } else {
            input.value += value;
        }
    });
});

input.addEventListener('input', () => {
    input.value = input.value.replace(/[xX]/g, '*');
});

calculateButton.addEventListener('click', () => {
    try {
        const result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        try {
            const result = eval(input.value);
            input.value = result;
        } catch (error) {
            input.value = 'Error';
        }
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'x' || key === 'X') {
        input.value += '*';
    }
    else if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        input.value += key;
    } else if (key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    } else if (key === 'Enter') {
        event.preventDefault();
        try {
            const result = eval(input.value);
            input.value = result;
        } catch (error) {
            input.value = 'Error';
        }
    }
});
