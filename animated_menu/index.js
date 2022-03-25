const menuT = document.getElementById('menu-trigger');
const menu = document.getElementById('site-menu');
const menuI = document.getElementById('menu-icon');
const serviceT = document.getElementById('service-trigger');
const serviceL = document.querySelector('.service-links');
const aboutT = document.getElementById('about-trigger');
const aboutL = document.querySelector('.about-links');
const resourceT = document.getElementById('resource-trigger');
const resourceL = document.querySelector('.resource-links');
const blogT = document.getElementById('blog-trigger');
const blogL = document.querySelector('.blog-links');
const connectT = document.getElementById('connect-trigger');
const connectL = document.querySelector('.connect-links');

menu.style.marginBottom = '200vh';
serviceL.style.display = 'none';
aboutL.style.display = 'none';
resourceL.style.display = 'none';
blogL.style.display = 'none';
connectL.style.display = 'none';

menuT.addEventListener('click', () => {
    if (menu.style.marginBottom == '200vh') {
        menu.style.marginBottom = '0vh';
        menuT.style.backgroundColor = '#fefefe';
        menuT.style.borderColor = '#900C3F';
        menuT.style.color = '#900C3F';
        menuI.classList.replace('fa-bars', 'fa-times');
    } else {
        menu.style.marginBottom = '200vh';
        menuT.style.backgroundColor = '#333333';
        menuT.style.borderColor = '#333333';
        menuT.style.color = '#fefefe';
        menuI.classList.replace('fa-times', 'fa-bars');
        serviceL.style.display = 'none';
        aboutL.style.display = 'none';
        resourceL.style.display = 'none';
        blogL.style.display = 'none';
        serviceT.style.color = '#fefefe'
        serviceT.style.borderBottom = 'none';
        aboutT.style.color = '#fefefe'
        aboutT.style.borderBottom = 'none';
        resourceT.style.color = '#fefefe'
        resourceT.style.borderBottom = 'none';
        blogT.style.color = '#fefefe'
        blogT.style.borderBottom = 'none';
        connectT.style.color = '#fefefe'
        connectT.style.borderBottom = 'none';
    }
});

serviceT.addEventListener('click', () => {
    if (serviceL.style.display === 'none') {
        serviceL.style.display = 'block';
        aboutL.style.display = 'none';
        resourceL.style.display = 'none';
        blogL.style.display = 'none';
        connectL.style.display = 'none';
        serviceT.style.color = '#ffcb23'
        serviceT.style.borderBottom = '#fefefe solid 1px';
        aboutT.style.color = '#fefefe'
        aboutT.style.borderBottom = 'none';
        resourceT.style.color = '#fefefe'
        resourceT.style.borderBottom = 'none';
        blogT.style.color = '#fefefe'
        blogT.style.borderBottom = 'none';
        connectT.style.color = '#fefefe'
        connectT.style.borderBottom = 'none';
    } else {
        serviceL.style.display = 'none';
        serviceT.style.color = '#fefefe'
        serviceT.style.borderBottom = 'none';
    }
});

aboutT.addEventListener('click', () => {
    if (aboutL.style.display === 'none') {
        aboutL.style.display = 'block';
        serviceL.style.display = 'none';
        resourceL.style.display = 'none';
        blogL.style.display = 'none';
        connectL.style.display = 'none';
        aboutT.style.color = '#ffcb23'
        aboutT.style.borderBottom = '#fefefe solid 1px';
        serviceT.style.color = '#fefefe'
        serviceT.style.borderBottom = 'none';
        resourceT.style.color = '#fefefe'
        resourceT.style.borderBottom = 'none';
        blogT.style.color = '#fefefe'
        blogT.style.borderBottom = 'none';
        connectT.style.color = '#fefefe'
        connectT.style.borderBottom = 'none';
    } else {
        aboutL.style.display = 'none';
        aboutT.style.color = '#fefefe'
        aboutT.style.borderBottom = 'none';
    }
});

resourceT.addEventListener('click', () => {
    if (resourceL.style.display === 'none') {
        resourceL.style.display = 'block';
        serviceL.style.display = 'none';
        aboutL.style.display = 'none';
        blogL.style.display = 'none';
        connectL.style.display = 'none';
        resourceT.style.color = '#ffcb23'
        resourceT.style.borderBottom = '#fefefe solid 1px';
        serviceT.style.color = '#fefefe'
        serviceT.style.borderBottom = 'none';
        aboutT.style.color = '#fefefe'
        aboutT.style.borderBottom = 'none';
        blogT.style.color = '#fefefe'
        blogT.style.borderBottom = 'none';
        connectT.style.color = '#fefefe'
        connectT.style.borderBottom = 'none';
    } else {
        resourceL.style.display = 'none';
        resourceT.style.color = '#fefefe'
        resourceT.style.borderBottom = 'none';
    }
});

blogT.addEventListener('click', () => {
    if (blogL.style.display === 'none') {
        blogL.style.display = 'block';
        serviceL.style.display = 'none';
        aboutL.style.display = 'none';
        resourceL.style.display = 'none';
        connectL.style.display = 'none';
        blogT.style.color = '#ffcb23'
        blogT.style.borderBottom = '#fefefe solid 1px';
        serviceT.style.color = '#fefefe'
        serviceT.style.borderBottom = 'none';
        aboutT.style.color = '#fefefe'
        aboutT.style.borderBottom = 'none';
        resourceT.style.color = '#fefefe'
        resourceT.style.borderBottom = 'none';
        connectT.style.color = '#fefefe'
        connectT.style.borderBottom = 'none';
    } else {
        blogL.style.display = 'none';
        blogT.style.color = '#fefefe'
        blogT.style.borderBottom = 'none';
    }
});

connectT.addEventListener('click', () => {
    if (connectL.style.display === 'none') {
        connectL.style.display = 'block';
        serviceL.style.display = 'none';
        aboutL.style.display = 'none';
        resourceL.style.display = 'none';
        blogL.style.display = 'none';
        connectT.style.color = '#ffcb23'
        connectT.style.borderBottom = '#fefefe solid 1px';
        serviceT.style.color = '#fefefe'
        serviceT.style.borderBottom = 'none';
        aboutT.style.color = '#fefefe'
        aboutT.style.borderBottom = 'none';
        resourceT.style.color = '#fefefe'
        resourceT.style.borderBottom = 'none';
        blogT.style.color = '#fefefe'
        blogT.style.borderBottom = 'none';
    } else {
        connectL.style.display = 'none';
        connectT.style.color = '#fefefe'
        connectT.style.borderBottom = 'none';
    }
})