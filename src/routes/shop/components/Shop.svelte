<script>
	import "@fontsource/italiana"; 
	import ProductListing from "./ProductListingNEW.svelte";
	import { shopFilter } from "$lib/stores.js";

	let splashTexts = [
		"For those with impeccable taste!",
		"Only the finest garb around...",
		"Exclusive handmade and secondhand pieces"
	];
	let splashIndex = Math.floor(Math.random() * splashTexts.length);

	export let loadedProducts;
	let products;

	const updateProducts = () => {
		products = $shopFilter != null ? null : loadedProducts.products;
		if(!products) {
			products = loadedProducts.products.filter((p) => {
				return p.tags.includes($shopFilter);
			});
		}
	}

	shopFilter.subscribe(() => {
		updateProducts();
	});

	let width, height;
</script>

<div class="shop">
	<h1><span>Welcome to </span>Lady Fifi's Boutique</h1>
	<h2>{splashTexts[splashIndex]}</h2>

	<!-- DESKTOP VIEW -->
	<div class="listingsOuterContainerDesktop" bind:clientHeight={height} bind:clientWidth={width}>
		<div style={"--width: " + width + "px;" + "--height: " + height + "px;"} class="listingsContainerDesktop">
			{#each products as p}
				<ProductListing product={p} on:previewRequest/>
			{/each}
		</div>
	</div>

	<!-- MOBILE VIEW -->
	<div class="listingsContainerMobile">
		{#each products as p}
			<ProductListing product={p} on:previewRequest/>
		{/each}
	</div>
</div>

<style>
	.shop {
		position: relative;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		margin: auto;
		width: 90%;
		font-family: "Italiana";
	}

	h1 {
		font-size: 4rem;
		text-align: center;
		font-family: inherit;
	}

	span {
		display: inline;
	}

	h2 {
		font-size: 2.5rem;
		text-align: center;
		font-family: inherit;
	}

	.listingsOuterContainerDesktop {
		display: block;
		flex-grow: 1;
		width: 100%;
		margin-top: 0.5rem;
	}

	.listingsContainerDesktop {
		position: absolute;
		width: var(--width);
		height: var(--height);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		row-gap: 1.5rem;
		overflow-y: scroll;
	}

	.listingsContainerMobile {
		position: relative;
		display: none;
		flex-wrap: wrap;
		width: 100%;
		row-gap: 1rem;
		justify-content: space-around;
	}

	::-webkit-scrollbar {
	  	width: 10px;
	}

	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0);
		border-top: 3px solid white;
		border-bottom: 3px solid white;
		border-radius: 3px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 3px;
	  	background: white;
		border: solid 1px black;
	}

	::-webkit-scrollbar-thumb:hover {
	  	background: lightgrey;
	}

	@media (max-width: 800px) or (max-height: 650px) {
		.shop {
			width: 100%;
		}

		h1 {
			font-size: 3.5rem;
			text-align: center;
			font-family: inherit;
		}

		h2 {
			font-size: 2.25rem;
			font-weight: normal;
			text-align: center;
			font-family: inherit;
		}

		span {
			display: none;
		}

		.listingsOuterContainerDesktop {
			display: none;
		}

		.listingsContainerMobile {
			display: flex;
		}

		::-webkit-scrollbar {
			display: none;
		}
			
		::-webkit-scrollbar-track {
			background: rgba(0, 0, 0, 0);
			border-top: 3px solid white;
			border-bottom: 3px solid white;
			border-radius: 3px;
		}
			
		::-webkit-scrollbar-thumb {
			border-radius: 3px;
			background: white;
			border: solid 1px black;
		}
			
		::-webkit-scrollbar-thumb:hover {
			background: lightgrey;
		}
	}
</style>
