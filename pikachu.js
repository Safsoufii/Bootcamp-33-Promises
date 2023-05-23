// This code is making an API call to the PokeAPI (https://pokeapi.co/) to fetch information about a specific Pokemon, in this case "pikachu".
const pokemon = "pikachu";

// The fetch() method is used to make the API call. It takes the URL as an argument, which includes the name of the Pokemon we want to fetch information about.
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)

// The response from the API is passed to the first .then() method, which converts the response to JSON.
  .then(response => response.json())

// The JSON data is passed to the second .then() method, which logs the name, weight and abilities of the Pokemon to the console.
  .then(data => {
    console.log("Name: " + data.name);
    console.log("Weight: " + data.weight);
    console.log("Abilities: ");
    data.abilities.forEach(ability => {
      console.log(" - " + ability.ability.name);
    });
  })

// The .catch() method is used to handle any errors that may occur during the API call or when parsing the response.
  .catch(error => console.log(error));
