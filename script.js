'use strict';

const canvas = document.querySelector('#canvas');


function stroke(event) {
    const ctx = canvas.getContext('2d');
    const [x, y] = [
        event.clientX - ctx.canvas.offsetLeft,
        event.clientY - ctx.canvas.offsetTop,
    ];
    ctx.lineTo(x, y);
    ctx.stroke();
}

canvas.addEventListener('mousedown', event => {
    const ctx = canvas.getContext('2d');
    const [x, y] = [
        event.clientX - ctx.canvas.offsetLeft,
        event.clientY - ctx.canvas.offsetTop,
    ];
    ctx.moveTo(x, y);
    canvas.addEventListener('mousemove', stroke);
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', stroke);
    });
    canvas.addEventListener('mouseleave', () => {
        const [x, y] = [
            event.clientX - ctx.canvas.offsetLeft,
            event.clientY - ctx.canvas.offsetTop,
        ];
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
        canvas.removeEventListener('mousemove', stroke);
    });
});