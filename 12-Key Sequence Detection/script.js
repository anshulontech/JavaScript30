const pressed = [];
const secretCode1 = 'anshul';
const secretCode2 = 'ANSHUL';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    
    pressed.splice(-secretCode1.length - 1, pressed.length - secretCode1.length);

    if (pressed.join('').includes(secretCode1) || pressed.join('').includes(secretCode2)) {
        cornify_add();
    }
});