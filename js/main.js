const navBtns = document.querySelectorAll('.navbar ul li a');
const imagePerfil = document.getElementById('image');
const sec_skills = document.querySelector('#sec-skills .grid');
const sections = document.querySelectorAll('#container section');
const skill_img = ['html','css','js','react','php','mysql','c-sharp',
'excel','word','powerpoint'];
const skills = [
    {skill: 'HTML', value: 81, img: 'img/html-logo.png'},
    {skill: 'CSS', value: 76, img: 'img/css-logo.png'},
    {skill: 'Js', value: 56, img: 'img/js-logo.png'},
    {skill: 'React', value: 40, img: 'img/react-logo.png'},
    {skill: 'PHP', value: 55, img: 'img/php-logo.png'},
    {skill: 'MySql', value: 88, img: 'img/mysql-logo.png'},
    {skill: 'C#', value: 89, img: 'img/c-sharp-logo.png'},
    {skill: 'Excel', value: 90, img: 'img/excel-logo.png'},
    {skill: 'Word', value: 87, img: 'img/word-logo.png'},
    {skill: 'PowerPoint', value: 95, img: 'img/powerpoint-logo.png'},
    {skill: 'Administracion', value: 96, img: 'img/powerpoint-logo.png'},
    {skill: 'Photshop', value: 73, img: 'img/powerpoint-logo.png'},
    {skill: 'Estadistica', value: 82, img: 'img/powerpoint-logo.png'}
]


for (let id = 0; id < skills.length; id++) {
    const _skill = skills[id];
    var skill = document.createElement('li');
    skill.classList.add('noObs');
    var img = document.createElement('img');
    img.setAttribute('src', _skill.img);
    var h3 = document.createElement('h3');
    h3.innerText = _skill.skill + ' ' + _skill.value + '%';
    var bar = document.createElement('span');
    bar.classList.add('bar');
    skill.style.setProperty('--value-bar', _skill.value + '%');
    skill.style.setProperty('--id-skill', id);
    skill.appendChild(img);
    skill.appendChild(h3);
    skill.appendChild(bar);
    sec_skills.style.setProperty('--count-skills', skills.length)
    sec_skills.appendChild(skill);
}

navBtns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        var atr = e.target.getAttribute('href');
        if (atr != '#sec-home') {
            if (imagePerfil.classList.contains('sect-home')) {
                imagePerfil.classList.remove('sect-home');
                imagePerfil.classList.add('sect-other');
            }
        } else {
            if (!imagePerfil.classList.contains('sect-home')) {
                imagePerfil.classList.add('sect-home');
                imagePerfil.classList.remove('sect-other');
            }
        }
    })
});
for (let i = 0; i < sections.length; i++) {
    const element = sections[i];
    let count = sections.length;
    element.style.setProperty('--num-section', i);
    element.style.setProperty('--count', count);
    
}
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    rootMargin: '200px',
    threshold: [0, .25, .5, .75, 1]
});
const observeWindow = new IntersectionObserver((elements) => {
    console.log(elements);
    elements.forEach((el) => {
        const element = el.target;
        if (el.intersectionRatio > 0) {
            element.classList.add('observed');
            element.style.animation = 'StartFromLeft 0.7s ease 0.2s both';
        } else {
            element.classList.remove('observed');
            // element.style.animation = 'none';
            // element.style.setProperty('animation', '');
            // element.style.removeProperty('animation');
        }
    })
},{
    // root: document.getElementById('sec-skills'),
    rootMargin: '-65px 0px -65px 0px',
    threshold: 1
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
document.querySelectorAll('#sec-skills .grid li').forEach((li) => observeWindow.observe(li));
console.log(observeWindow);