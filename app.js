// app.js

document.addEventListener('DOMContentLoaded', function () {
    const pokemonList = [
        { name: 'Bulbasaur', img: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg' },
        { name: 'Ivysaur', img: 'https://img.pokemondb.net/artwork/large/ivysaur.jpg' },
        { name: 'Venusaur', img: 'https://img.pokemondb.net/artwork/large/venusaur.jpg' },
        { name: 'Charmander', img: 'https://img.pokemondb.net/artwork/large/charmander.jpg' },
        { name: 'Charmeleon', img: 'https://img.pokemondb.net/artwork/large/charmeleon.jpg' },
        { name: 'Charizard', img: 'https://img.pokemondb.net/artwork/large/charizard.jpg' },
        { name: 'Squirtle', img: 'https://img.pokemondb.net/artwork/large/squirtle.jpg' },
        { name: 'Wartortle', img: 'https://img.pokemondb.net/artwork/large/wartortle.jpg' },
        { name: 'Blastoise', img: 'https://img.pokemondb.net/artwork/large/blastoise.jpg' },
        { name: 'Caterpie', img: 'https://img.pokemondb.net/artwork/large/caterpie.jpg' },
        { name: 'Metapod', img: 'https://img.pokemondb.net/artwork/large/metapod.jpg' },
        { name: 'Butterfree', img: 'https://img.pokemondb.net/artwork/large/butterfree.jpg' },
        { name: 'Weedle', img: 'https://img.pokemondb.net/artwork/large/weedle.jpg' },
        { name: 'Kakuna', img: 'https://img.pokemondb.net/artwork/large/kakuna.jpg' },
        { name: 'Beedrill', img: 'https://img.pokemondb.net/artwork/large/beedrill.jpg' },
        { name: 'Pidgey', img: 'https://img.pokemondb.net/artwork/large/pidgey.jpg' },
        { name: 'Pidgeotto', img: 'https://img.pokemondb.net/artwork/large/pidgeotto.jpg' },
        { name: 'Pidgeot', img: 'https://img.pokemondb.net/artwork/large/pidgeot.jpg' },
        { name: 'Rattata', img: 'https://img.pokemondb.net/artwork/large/rattata.jpg' },
        { name: 'Raticate', img: 'https://img.pokemondb.net/artwork/large/raticate.jpg' },
        { name: 'Spearow', img: 'https://img.pokemondb.net/artwork/large/spearow.jpg' },
        { name: 'Fearow', img: 'https://img.pokemondb.net/artwork/large/fearow.jpg' },
        { name: 'Ekans', img: 'https://img.pokemondb.net/artwork/large/ekans.jpg' },
        { name: 'Arbok', img: 'https://img.pokemondb.net/artwork/large/arbok.jpg' },
        { name: 'Pikachu', img: 'https://img.pokemondb.net/artwork/large/pikachu.jpg' },
        { name: 'Raichu', img: 'https://img.pokemondb.net/artwork/large/raichu.jpg' },
        { name: 'Sandshrew', img: 'https://img.pokemondb.net/artwork/large/sandshrew.jpg' },
        { name: 'Sandslash', img: 'https://img.pokemondb.net/artwork/large/sandslash.jpg' },
        { name: 'Nidoran♀', img: 'https://img.pokemondb.net/artwork/large/nidoran-f.jpg' },
        { name: 'Nidorina', img: 'https://img.pokemondb.net/artwork/large/nidorina.jpg' },
        { name: 'Nidoqueen', img: 'https://img.pokemondb.net/artwork/large/nidoqueen.jpg' },
        { name: 'Nidoran♂', img: 'https://img.pokemondb.net/artwork/large/nidoran-m.jpg' },
        { name: 'Nidorino', img: 'https://img.pokemondb.net/artwork/large/nidorino.jpg' },
        { name: 'Nidoking', img: 'https://img.pokemondb.net/artwork/large/nidoking.jpg' },
        { name: 'Clefairy', img: 'https://img.pokemondb.net/artwork/large/clefairy.jpg' },
        { name: 'Clefable', img: 'https://img.pokemondb.net/artwork/large/clefable.jpg' },
        { name: 'Vulpix', img: 'https://img.pokemondb.net/artwork/large/vulpix.jpg' },
        { name: 'Ninetales', img: 'https://img.pokemondb.net/artwork/large/ninetales.jpg' },
        { name: 'Jigglypuff', img: 'https://img.pokemondb.net/artwork/large/jigglypuff.jpg' },
        { name: 'Wigglytuff', img: 'https://img.pokemondb.net/artwork/large/wigglytuff.jpg' },
        { name: 'Zubat', img: 'https://img.pokemondb.net/artwork/large/zubat.jpg' },
        { name: 'Golbat', img: 'https://img.pokemondb.net/artwork/large/golbat.jpg' },
        { name: 'Diglett', img: 'https://img.pokemondb.net/artwork/large/diglett.jpg' },
        { name: 'Dugtrio', img: 'https://img.pokemondb.net/artwork/large/dugtrio.jpg' },
        { name: 'Meowth', img: 'https://img.pokemondb.net/artwork/large/meowth.jpg' },
        { name: 'Persian', img: 'https://img.pokemondb.net/artwork/large/persian.jpg' },
        { name: 'Psyduck', img: 'https://img.pokemondb.net/artwork/large/psyduck.jpg' },
        { name: 'Golduck', img: 'https://img.pokemondb.net/artwork/large/golduck.jpg' },
        { name: 'Machop', img: 'https://img.pokemondb.net/artwork/large/machop.jpg' },
        { name: 'Machoke', img: 'https://img.pokemondb.net/artwork/large/machoke.jpg' },
        { name: 'Machamp', img: 'https://img.pokemondb.net/artwork/large/machamp.jpg' },
        { name: 'Bellsprout', img: 'https://img.pokemondb.net/artwork/large/bellsprout.jpg' }
        // Add more Pokémon as needed
    ];

    const searchInput = document.getElementById('search');
    const pokemonListDiv = document.getElementById('pokemon-list');
    const blackFrame = document.querySelector('.blackframe');
    const pokemonImageDiv = document.getElementById('pokemon-image');
    const backButton = document.getElementById('back-button');

    function filterPokemon(query) {
        pokemonListDiv.innerHTML = '';
        const filtered = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
        filtered.forEach(pokemon => {
            const div = document.createElement('div');
            div.classList.add('pokemon-item');
            const img = document.createElement('img');
            const name = document.createElement('span');
            
            img.src = pokemon.img;
            img.alt = pokemon.name;
            name.textContent = pokemon.name;
            
            div.appendChild(img);
            div.appendChild(name);
            div.addEventListener('click', function () {
                showPokemonImage(pokemon.img);
            });
            pokemonListDiv.appendChild(div);
        });
    }

    function showPokemonImage(imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Pokémon';
        img.classList.add('pokemon-full-image');
        pokemonImageDiv.innerHTML = ''; // Clear previous image
        pokemonImageDiv.appendChild(img);
        pokemonImageDiv.style.display = 'flex';
        pokemonListDiv.style.display = 'none'; // Hide the list
        searchInput.style.display = 'none'; // Hide the search bar
        backButton.style.display = 'block'; // Show the back button
    }

    function showPokemonList() {
        pokemonListDiv.style.display = 'block'; // Show the list
        searchInput.style.display = 'block'; // Show the search bar
        backButton.style.display = 'none'; // Hide the back button
        pokemonImageDiv.style.display = 'none'; // Hide the image
    }

    searchInput.addEventListener('input', function () {
        filterPokemon(searchInput.value);
    });

    backButton.addEventListener('click', function () {
        showPokemonList();
    });

    // Close the image when clicking outside of the blackframe
    document.addEventListener('click', function (event) {
        if (!blackFrame.contains(event.target) && pokemonImageDiv.style.display === 'flex') {
            showPokemonList();
        }
    });

    // Prevent click event from propagating to the document
    blackFrame.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
