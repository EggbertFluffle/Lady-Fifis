<script>
	import "@fontsource/italiana";
	import { createEventDispatcher } from "svelte";

	export let product;
	let dispatch = createEventDispatcher();

	let requestPreview = () => {
		dispatch("previewRequest", product);
	}
</script>

<div class="listing" on:click={requestPreview} on:keydown={requestPreview} role="button" tabindex={3}>
	<img src="./images/{product.id}-1.jpg" loading="lazy" alt="carousel of {product.name} modeled by lady fifi herself">
	<p>${product.price}</p>
</div>

<style>
	.listing {
		display: flex;
		flex-direction: column;
		border-radius: 3px;
		width: 47%;
	}

	.listing:hover {
		cursor: pointer;
	}

	p {
		font-weight: bold;
		font-size: 2rem;
		margin-left: 1rem;
	}
	
	img {
		width: auto;
		border-radius: 3px;
		border: solid 10px #E7B047;
	}

	@media (min-width: 1100px) {
		.listing {
			width: 30%;
		}
	}

	@media (max-width: 800px) or (max-height: 650px) {
		.listing	{
			width: 47%;
		}

        img {
            border-width: 10px;
        }

        p {
            font-size: 1.75rem;
        }
	}
</style>
