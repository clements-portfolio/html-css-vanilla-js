const toggles = document.querySelectorAll('.toggle');
const react = document.querySelector('#react');
const laravel = document.querySelector('#laravel');
const django = document.querySelector('#django');
const wordpress = document.querySelector('#wordpress');
const other = document.querySelector('#other');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => toggleBall(e.target)));

function toggleBall(clicked) {
    if (react === clicked) {
        laravel.checked = false;
        django.checked = false;
        wordpress.checked = false;
        other.checked = false;
    }

    if (laravel === clicked) {
        react.checked = false;
        django.checked = false;
        wordpress.checked = false;
        other.checked = false;
    }

    if (django === clicked) {
        laravel.checked = false;
        react.checked = false;
        wordpress.checked = false;
        other.checked = false;
    }
    if (wordpress === clicked) {
        laravel.checked = false;
        django.checked = false;
        react.checked = false;
        other.checked = false;
    }
    if (other === clicked) {
        laravel.checked = false;
        django.checked = false;
        wordpress.checked = false;
        react.checked = false;
    }
}