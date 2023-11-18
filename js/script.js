document.addEventListener("DOMContentLoaded", function () {
    const pokemonSelect = document.getElementById("pokemon-select");
    const getPokemonButton = document.getElementById("get-pokemon");
    const pokemonDetailsContainer = document.getElementById("pokemon-details");
  
    getPokemonButton.addEventListener("click", function () {
      let selectedPokemon = pokemonSelect.value;
      getPokemonInfo(selectedPokemon);
    });
  
    function getPokemonInfo(pokemon) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => response.json())
        .then(data => {
          // Actualiza el contenido del contenedor de detalles
          pokemonDetailsContainer.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}"/>
            <p><strong>Tipo:</strong> ${getPokemonTypes(data.types)}</p>
            <p><strong>Altura:</strong> ${data.height} m</p>
            <p><strong>Peso:</strong> ${data.weight} kg</p>
            
          `;
        })
        .catch(error => console.error("Error al obtener información del Pokémon", error));
    }
    
    function getPokemonTypes(types) {
      // Esta función ayuda a formatear los tipos del Pokémon
      return types.map(type => type.type.name).join(", ");
    }
  
    // Carga la información de los tres Pokémon iniciales al cargar la página
    getPokemonInfo("bulbasaur");
    getPokemonInfo("charmander");
    getPokemonInfo("squirtle");
  });
  
