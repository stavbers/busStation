import {model, screen} from './model';
import '../style.css';
import {fImage, fTitle, fDescr, fbtns, fLang} from './templates'


const block = document.querySelectorAll('.screen');

const site = document.querySelector('.wrapper');
site.innerHTML = '';


block.forEach(item => {
    clearApp(item);
})

startApp(screen)

// fsite.innerHTML = title(model[0][fScreenTitle])
function startApp(screen) {
screen.forEach(screen => {
   if(screen.type === 'firstScreen') {
       firstScreen(screen.value)
   }
})
}

function clearApp(elem){
    elem.classList.add('hide');
}

function firstScreen(elem) { // model1
    let fScreen = document.createElement('div');
        fScreen.classList.add(['screen', 'first-screen']);

        site.append(fScreen); //


    elem.forEach(elem => {
        console.log(elem.type)
        if(elem.type === 'fScreenImage')  fScreen.innerHTML += fImage(elem);
        if(elem.type === 'fScreenTitle')  fScreen.innerHTML += fTitle(elem);
        if(elem.type === 'fScreenDescr')  fScreen.innerHTML += fDescr(elem);
        if(elem.type === 'fScreenBtns')  fScreen.innerHTML += fbtns(elem);
        if(elem.type === 'fScreenLang')  fScreen.innerHTML += fLang(elem);
    })
// return `
//     <div class="screen first-screen">
//
//       <div class="first-screen__img">
//         <img src="" alt="автобус на остановке">
//       </div>
//
//       <h2 class="first-screen__title"></h2>
//
//       <p class="first-screen__info"></p>
//
//       <div class="first-screen__choice choice">
//         <a href="#" class="btn choice-true"></a>
//         <a href="#" class="btn choice-false"></a>
//       </div>
//
//       <div class="first-screen--lang">
//         <select name="lang" id="lang">
//           <option value='eng'></option>
          // <option value='ukr'></option>
          // <option value='rus' selected></option>
        // </select>
      // </div>
//
//     </div>
// `
}