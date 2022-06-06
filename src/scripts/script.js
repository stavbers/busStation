import {model, screen} from './model';
import '../style.css';



const block = document.querySelectorAll('.screen');

const site = document.querySelector('.wrapper');



block.forEach(item => {
    clearApp(item);
})

startApp(screen)


function startApp(screen) {
screen.forEach(screen => {
   if(screen.type === 'firstScreen') site.innerHTML = firstScreen(screen.value)
})
}

function clearApp(elem){
    elem.classList.add('hide');
}

function firstScreen(elem) {
    console.log(elem)
    elem.forEach(elem => {
        console.log(elem)
    })
return `
    <div class="screen first-screen">
      <div class="first-screen__img">
        <img src="${elem.type[fScreenImage]}" alt="автобус на остановке">
      </div>
      <h2 class="first-screen__title">${elem.type[fScreenTitle]}</h2>
      <p class="first-screen__info">${elem.type[fScreenTitle]}</p>
      <div class="first-screen__choice choice">
        <a href="#" class="btn choice-true">${elem.type[fScreenTitle]}</a>
        <a href="#" class="btn choice-false">${elem.type[fScreenTitle]}</a>
      </div>
      <div class="first-screen--lang"> ${elem.type[fScreenTitle]}
        <select name="lang" id="lang">
          <option value='eng'>${elem.type[fScreenTitle]}</option>
          <option value='ukr'>${elem.type[fScreenTitle]}</option>
          <option value='rus' selected>${elem.type[fScreenTitle]}</option>
        </select>
      </div>
    </div>
`
}