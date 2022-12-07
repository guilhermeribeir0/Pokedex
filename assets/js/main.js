const pokemonList = document.getElementById('pokemonList');
const buttonLoadMore = document.getElementById('buttonCarregarMais');

const maxRecords = 151;
const limit = 10;
let offset = 0;

function pokemonToLi(pokemon) {
    return `   
        <li class="pokemon">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail"> 
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(pokemonToLi).join('');
        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit)

buttonLoadMore.addEventListener('click', () => {
    offset =+ limit
    const qtdRecordsWithNextPage = offset = + limit

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        buttonLoadMore.parentElement.removeChild(buttonLoadMore);
    } else {
        loadPokemonItens(offset, limit);
    }
})
        