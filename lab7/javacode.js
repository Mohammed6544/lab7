window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('colorForm');
    const header = document.getElementById('header');

    form.onsubmit = function(event) {
        event.preventDefault();
        const color = document.getElementById('colorInput').value;
        header.style.color = color;
    };
});
