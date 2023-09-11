<script>
	import { createEventDispatcher, afterUpdate } from "svelte";
	import "@fontsource/italiana"; 
	import Icon from '@iconify/svelte';
	import ImageCarousel from "./ImageCarousel.svelte";
	import { cart } from "$lib/stores.js";
	import { fade } from "svelte/transition";
	import { quintIn, quintOut } from "svelte/easing";

	export let product;
	let dispatch = createEventDispatcher();

	const closePreview = () => {
		dispatch("closePreview");
	}

	const addToCart = () => {
		cart.update((currentData) => {
			let obj = {
				...currentData
			}
			obj[product.id] = product;
			return obj;
		});
	}

	afterUpdate(() => {
		if(window.innerWidth < 800 || window.innerHeight < 650){
			window.scrollTo({
			top: 0,
			behavior: 'instant'
			});	
		}
	});
</script>

<div in:fade={{ delay: 0, duration: 100, ease: quintIn }} out:fade={{ duration: 100, ease: quintOut }} class="preview">
	<div class="closeButtonContainer" on:click={closePreview} on:keydown={closePreview} role="button" tabindex={1}>
		<Icon icon="eva:arrow-back-fill" width="35"/>
	</div>
	<h1>{product.name}</h1>
	<div class="product">
		<ImageCarousel images={product.images} id={product.id}/>
		<div class="productDescriptionContainer">
			<div class="productDescription">
				<p class="description">{product.description}</p>
				<div class="infoTable">
					<p>Condition</p>
					<p>{product.condition}</p>
					<p>Colors</p>
					<p>{product.color}</p>
					<p>Styles</p>
					<p>{product.style}</p>
					<p>Materials</p>
					<p>{product.material}</p>
				</div>
				<div class="economicsContainer">
					<p class="price">${product.price}</p>
					<button on:click={addToCart}>Add to Cart</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.preview {
		position: absolute;
		font-family: "Italiana";
		top: 20%;
		left: 5%;
		right: 5%;
		background: #F9ECC2;
		border-radius: 3px;
		border: solid 13px #E7B047;
		z-index: 2;
	}

	.product {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-bottom: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: auto;
	}

	.productDescriptionContainer {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.productDescription {
		margin: auto;
		width: 90%;
	}

	h1 {
		text-align: center;
		margin: 1rem auto;
	}

	.description {
		font-weight: bold;
		font-size: 1.25rem;
		text-indent: 3.5rem;
	}

	.infoTable {
		display: grid;
		grid-template-columns: 2fr 5fr;
		row-gap: 0.25rem;
		margin: 1rem 0px;
		width: 100%;
		font-size: 1.25rem;
		font-weight: bold;
	}
	
	.closeButtonContainer {
		display: block;
		position: absolute;
		width: min-content;
		padding: 0.1rem 0.1rem calc(0.1rem - 3px) 0.1rem;
		margin: 0.25rem;
	}
	
	.closeButtonContainer:hover {
		cursor: pointer;
	}

	.economicsContainer {
		display: flex;
		justify-content: space-evenly;
		font-weight: bold;
		font-size: 3rem;
	}

	button {
		font-size: 1.5rem;
		background: #f9ECC2;
		font-family: inherit;
		font-weight: bold;
		border: solid 5px #E7B047;
		border-radius: 3px;
		padding: 0.5rem 0.75rem;
		transition: background 0.5s ease;
	}

	button:hover {
		cursor: pointer;
		background: #e3d39f;
	}

	@media (max-width: 800px) or (max-height: 650px) {
		.preview {
			position: absolute;
			flex-direction: column;
			top: 0px;
			left: 0px;
			right: 0px;
			border: none;
			height: 100%;
			border-radius: 0px;
			z-index: 3;
		}

		.product {
			display: flex;
			flex-direction: column;
		}
	}
</style>
