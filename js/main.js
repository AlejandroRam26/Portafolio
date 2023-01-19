const navBtns = document.querySelectorAll('.navbar ul li a');
const imagePerfil = document.getElementById('image');
const sec_skills = document.querySelector('#sec-skills .grid');

const skill_img = ['html','css','js','react','php','mysql','c-sharp'];

skill_img.forEach(strLogo => {
    var skill = document.createElement('div');
    var imgLogo = document.createElement('img');
    skill.classList.add('skill');
    imgLogo.setAttribute('src', 'img/' + strLogo + '-logo.png');
    skill.appendChild(imgLogo);
    sec_skills.appendChild(skill);
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

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
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