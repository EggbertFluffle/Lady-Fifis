<script>
	import { cart } from "$lib/stores.js";
    export let product;

	const removeFromCart = () => {
		cart.update((data) => {
			delete data[product.id];
			return data;
		});	
	}
</script>

<div class="checkoutListing">
	<div class="imageContainer">
		<img src="./images/{product.id}-1.jpg" alt="Preview for an item in the checout cart"/>
	</div>
    <div class="productInfo">
		<h3>{product.name}</h3>
		<div class="metaDataContainer">
	 		<p class="metaData">Size: {product.size}</p>
			<p style="font-size: 1.5rem">|</p>
			<p class="metaData">Condition: {product.condition}</p>
		</div>
		<p><a on:click={removeFromCart}>Remove from cart</a></p>
    </div>
    <p class="price">${product.price}</p>
</div>

<style>
    .checkoutListing {
        display: flex;
		margin: 0.5rem;
		aspect-ratio: 7/2;	
		width: auto;

        border: solid 5px #E7B047;
        background-color: #F9ECC2;
        border-radius: 3px;
		padding: 0.25rem;
    }

	.imageContainer {
		position: relative;
		height: 100%;
		aspect-ratio: 1/1;
	}

	img {
		height: 100%;
		border-radius: 3px;
		position: absolute;
	}

    h3 {
        font-size: 2rem;
        margin: 0.5rem;
    }

	p {
		margin-left: 1.25rem;
		font-weight: bold;
	}

	a {
		color: black;
		text-decoration: none;
	}

	a:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	.metaDataContainer {
		display: flex;
		align-items: center;
	}

	.metaData {
		font-size: 1.25rem;	
		font-weight: bold;
		margin: 0px;
		margin-left: 1.25rem;
	}

    .productInfo {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .price {
        font-size:2.5rem;
        font-weight: bold;
        font-style: italic;
        align-self: center;
        margin: 1rem;
    }

    @media (max-width: 800px) or (max-height: 650px) {
        .checkoutListing {
			width: 100%;
			aspect-ratio: none;
        }
    }
</style>
