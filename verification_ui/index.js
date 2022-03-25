const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, i) => {
    code.addEventListener('keydown', (e) => {
        setTimeout(() => codes[i + 1].focus(), 10);
    });
});