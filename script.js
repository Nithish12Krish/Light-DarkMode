const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const textBox=document.getElementById('text-box');

const DARK_THEME='dark';
const LIGHT_THEME='light';
//image Mode
function imageMode(color)
{
    image1.src=`img/undraw_proud_coder_${color}.svg`;
    image2.src=`img/undraw_feeling_proud_${color}.svg`;
    image3.src=`img/undraw_conceptual_idea_${color}.svg`;
}
//toggle Dark/Light Mode
function toggleDarkLightMode(THEME)
{
    nav.style.backgroundColor=THEME===DARK_THEME? 'rgb(0 0 0 /50%)': 'rgb(255 255 255/50%)';
    textBox.style.backgroundColor=THEME===DARK_THEME? 'rgb(255 255 255 /50%)':'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent=THEME===DARK_THEME? 'Dark Mode': 'Light Mode';
    THEME===DARK_THEME? toggleIcon.children[1].classList.replace('fa-sun','fa-moon'):toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    THEME===DARK_THEME ?imageMode('dark'):imageMode('light'); 
}

//switch Theme Dynamically
function switchTheme(event)
{
    if(event.target.checked)
    {
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        toggleDarkLightMode('dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        toggleDarkLightMode('light');
    }
}
//Event Listener
toggleSwitch.addEventListener('change',switchTheme);

//Check Local Storage for Theme
const currentTheme=localStorage.getItem('theme');
if(currentTheme)
{
    document.documentElement.setAttribute('data-theme','dark');
    if(currentTheme==='dark')
    {
        toggleSwitch.checked=true;
        toggleDarkLightMode('dark');
    }
}
