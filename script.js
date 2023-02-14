"use strict";

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <article class="key"> 
        ${e.key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </article>
    <article class="key"> 
        ${e.keyCode}
        <small>event.keyCode</small>
    </article>
    <article class="key"> 
        ${e.code}
        <small>event.code</small>
    </article>
    `
})