import heroesDb from '../json/heroes.json';
import createHeroesCard from '../templates/heroes.hbs';
// import Handlebars from 'handlebars';

// const template = Handlebars.compile('<p>Name: {{name}}</p>');

// console.log(template({name: 'Andrii'}));

const heroesListEl = document.querySelector('.js-heroes-list');

const heroesCards = createHeroesCard(heroesDb);

heroesListEl.innerHTML = heroesCards;

/*
<li class="heroes__item">
    <img src="${url}" alt="${name}" class="heroes__picture">
    <div class="heroes__content">
        <h2 class="heroes__name">${name}</h2>
        <ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
        </ul>
    </div>
</li>
*/

// const heroesListEl = document.querySelector('.js-heroes-list');

// const createHeroesCard = ({
//   images: { lg: url },
//   name,
//   appearance: { gender },
//   biography: { alterEgos },
// } = {}) => {
//   if (alterEgos === null) {
//     alterEgos = '-';
//   }

//   return `<li class="heroes__item">
//     <img src="${url}" alt="${name}" class="heroes__picture">
//     <div class="heroes__content">
//         <h2 class="heroes__name">${name}</h2>
//         <ul class="heroes__biography list">
//             <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
//             <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
//         </ul>
//     </div>
// </li>`;
// };

// const heroesCardsArr = heroesDb.map(el => {
//   return createHeroesCard(el);
// });

// heroesListEl.innerHTML = heroesCardsArr.join('');
