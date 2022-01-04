const textbox=document.querySelector('.data');
const button = document.querySelector('button');
const user=document.querySelector('.user-input');
const res=document.querySelector('.results')
// Added the event listener on submit btn to fetch the value enterd by the user after user clicks on submit
button.addEventListener('click',()=>{
    console.log(textbox.value);
    user.style.display="none";
    res.append(`
    hello
    `);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textbox.value}&appid=4e79ddf88f9c1157bd3d182521503b47&units=metric`)
  .then(response => response.json())
  .then(data => console.log(data['main']['temp']));

})