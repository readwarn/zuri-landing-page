const toggler = document.querySelector('nav img.toggler');
const sidebar = document.querySelector('aside.links');
const close = document.querySelector('img.close');
const reg = document.querySelector('a#reg');
const log = document.querySelector('a#log');
const logForm = document.querySelector('form.login');
const secA = document.querySelector('section.a');
const secB = document.querySelector('section.b')

toggler.addEventListener('click',()=>{
    sidebar.classList.toggle('show');
});

close.addEventListener('click',()=>{
    sidebar.classList.remove('show');
});

log.addEventListener('click',()=>{
    logForm.style.display = 'block';
    secA.classList.add('hide');
    secB.style.display = 'none';
});

reg.addEventListener('click',()=>{
    secA.classList.remove('hide');
    secB.style.display = 'block';
    logForm.style.display = 'none';
});