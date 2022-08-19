const sectionMain = document.querySelector('[data-main]');

function elementFromHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

const card1 = elementFromHtml(`
<div class="card">
<div class="card__content">
  <h2 class="title--secondary">Supervisor</h2>
  <span class="card__text"
    >Monitors activity to identify project roadblocks</span
  >
</div>

<div class="card__icon">
  <svg aria-hidden="true" focusable="false">
    <use
      xlink:href="./develop/assets/images/sprite.svg#icon-supervisor"
    ></use>
  </svg>
</div>
</div>
`);
const card2 = elementFromHtml(`
<div class="card">
<div class="card__content">
  <h2 class="title--secondary">Team Builder</h2>
  <span class="card__text"
    >Scans our talent network to create the optimal team for your project</span
  >
</div>

<div class="card__icon">
  <svg aria-hidden="true" focusable="false">
    <use
      xlink:href="./develop/assets/images/sprite.svg#icon-team-builder"
    ></use>
  </svg>
</div>
</div>
`);
const card3 = elementFromHtml(`
<div class="card">
<div class="card__content">
  <h2 class="title--secondary">Karma</h2>
  <span class="card__text"
    >Regularly evaluates our talent to ensure quality</span
  >
</div>

<div class="card__icon">
  <svg aria-hidden="true" focusable="false">
    <use
      xlink:href="./develop/assets/images/sprite.svg#icon-karma"
    ></use>
  </svg>
</div>
</div>
`);
const card4 = elementFromHtml(`
<div class="card">
<div class="card__content">
  <h2 class="title--secondary">Calculator</h2>
  <span class="card__text"
    >Uses data from past projects to provide better delivery estimates</span
  >
</div>

<div class="card__icon">
  <svg aria-hidden="true" focusable="false">
    <use
      xlink:href="./develop/assets/images/sprite.svg#icon-calculator"
    ></use>
  </svg>
</div>
</div>
`);

sectionMain.append(card1, card2, card3, card4);
