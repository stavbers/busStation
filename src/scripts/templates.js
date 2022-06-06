export function fImage(block) {
return `
       <div class="first-screen__img">
         <img src="${block.value}" alt="автобус на остановке">
       </div>
`
}


export function fTitle(block) {
    return `
    <h2 class="first-screen__title">${block.value}</h2>
    `
}

export function fDescr(block) {
    return `
    <p class="first-screen__info">${block.value}</p>
    `
}

export function fbtns(block) {
    const html = block.value.map(item => `<a href="#" class="btn choice-btn">${item}</a>`)
    return `
      <div class="first-screen__choice choice">
            ${html.join('')}
      </div>
    `
}
export function fLang(block) {
    const html = block.value.map(item => ` <option value='${item}'>${item}</option>`)
    return `
       <div class="first-screen--lang">
            <select name="lang" id="lang">
               ${html.join('')}
        </select>
      </div>
    `
}

