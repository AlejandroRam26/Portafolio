const navBtns = document.querySelectorAll('.navbar ul li a');
const imagePerfil = document.getElementById('image');
const sec_skills = document.querySelector('#sec-skills .grid');
const sections = document.querySelectorAll('#container section');
const skill_img = ['html','css','js','react','php','mysql','c-sharp',
'excel','word','powerpoint'];
const skills = [
    {skill: 'HTML', value: 70, img: 'img/html-logo.png'},
    {skill: 'CSS', value: 76, img: 'img/css-logo.png'},
    {skill: 'Js', value: 56, img: 'img/js-logo.png'},
    {skill: 'React', value: 40, img: 'img/react-logo.png'},
    {skill: 'PHP', value: 55, img: 'img/php-logo.png'},
    {skill: 'MySql', value: 88, img: 'img/mysql-logo.png'},
    {skill: 'C#', value: 89, img: 'img/c-sharp-logo.png'},
    {skill: 'Excel', value: 90, img: 'img/excel-logo.png'},
    {skill: 'Word', value: 87, img: 'img/word-logo.png'},
    {skill: 'PowerPoint', value: 95, img: 'img/powerpoint-logo.png'}
]


skills.forEach(_skill => {
    console.log(_skill);
    var skill = document.createElement('li');
    var img = document.createElement('img');
    img.setAttribute('src', _skill.img);
    var h3 = document.createElement('h3');
    h3.innerText = _skill.skill;
    var bar = document.createElement('span');
    var barValue = document.createElement('span');
    bar.classList.add('bar');
    barValue.classList.add('value');
    skill.style.setProperty('--value-bar', _skill.value + '%');
    barValue.style.setProperty('--value-bar', _skill.value + '%');
    bar.appendChild(barValue);
    skill.appendChild(img);
    skill.appendChild(h3);
    skill.appendChild(bar);
    sec_skills.appendChild(skill);
    // var imgLogo = document.createElement('img');
    // skill.classList.add('skill');
    // imgLogo.setAttribute('src', 'img/' + strLogo + '-logo.png');
    // imgLogo.setAttribute('alt', strLogo + '-logo');
    // skill.appendChild(imgLogo);
    // sec_skills.appendChild(skill);
});

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
        // console.log(entry.target);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.01
});
// const SectionDivs = (entries, ovserbador) => {
//     // console.clear();
//     entries.forEach((entry) =>{
//         if (entry.isIntersecting) {
//             entry.target.classList.remove('hidden');
//         } else {
//             entry.target.classList.add('hidden');
//         }
//     });
// };
// const observer = new IntersectionObserver(SectionDivs, {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
// });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));