<script context="module">
	export async function load({ params }) {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
		const res = await fetch(url);
		const data = await res.json();
		const loadedPokemon = data.results.map((data, idx) => {
			return {
				name: data.name,
				id: idx + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					idx + 1
				}.png`
			};
		});

		return { props: { pokemons: loadedPokemon } };
	}
</script>

<script>
	import PokemonCard from '../components/PokemonCard';

	export let pokemons;
	let search = '';
	let filteredPokemon = [];

	$: {
		if (search) {
			filteredPokemon = pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(search.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemons];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokédex</title>
</svelte:head>

<h1 class="h1-upper">Svelte Kit Pokédex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={search}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
