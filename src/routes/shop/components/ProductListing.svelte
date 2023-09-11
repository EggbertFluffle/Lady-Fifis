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
	<img src="./images/{product.id}-1.jpg" alt="carousel of {product.name} modeled by lady fifi herself">
	<div class="productInfo">
		<h3>{product.name}</h3>
		<div class="metaInfo">
			<p>${product.price}</p>
			<p>{product.size}</p>
		</div>
	</div>
</div>

<style>
	.listing {
		border: solid 13px #E7B047;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #EFCB85;
		border-radius: 3px;
		width: 43%;
		text-align: center;
	}

	.listing:hover {
		cursor: pointer;
	}

	.metaInfo {
		display: flex;
		justify-content: space-between;
		margin: 0px 0.5rem 0px 0.5rem
	}

	p {
		font-weight: bold;
		font-size: 2rem;
	}
	
	img {
		position: relative;
		top: -2px;
		left: -2px;
		width: calc(100% + 4px);
		border-radius: 3px;
	}

	h3 {
		font-size: 1.25rem;
		margin: auto;
	}

	@media (min-width: 1100px) {
		.listing {
			width: 27%;
		}
	}

	@media (max-width: 800px) or (max-height: 650px) {
		.listing	{
			margin: 0.25rem;
			width: auto;
		}
	}
</style>