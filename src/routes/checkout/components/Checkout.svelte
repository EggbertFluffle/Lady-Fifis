<script>
	import CheckoutListing from "./CheckoutListing.svelte";
	import PricingInformation from "./PricingInformation.svelte";
	import "@fontsource/italiana"; 
	import { cart } from "$lib/stores.js";

	$: localCart = Object.values($cart);
	let height = 0;

	const sendCheckoutRequest = () => {
		alert("Sensing request to Stripe servers");
	}
</script>

<div class="checkout"> 
	<div class="outterProductsList" bind:clientHeight={height}>
		<div class="productsList"  style={"--height: " + height + "px;"}>
			{#if localCart.length == 0}
				<div class="mobilePricing">
					<h1>Checkout</h1>
				</div>
				<h2><em>This cart is empty. Go get some fab garb!</em></h2>
			{:else}
				{#each localCart as product}
					<CheckoutListing product={product}/>
				{/each}
			{/if}
			<div class="mobilePricing">
				<PricingInformation localCart={localCart} />
			</div>
		</div>
	</div>
	<div class="desktopPricing">
		<PricingInformation on:checkoutRequest={sendCheckoutRequest} localCart={localCart} />
	</div>
</div>

<style>
	.checkout {
		flex-grow: 1;
		display: flex;
		min-width: 90%;
		max-width: 90%;
		margin: auto;
		font-family: "Italiana";
	}

	.productsList {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.outterProductsList {
		display: flex;
		position: relative;
		flex-grow: 1;
		margin-left: 0.25rem;
		margin-right: 0.25rem;
		height: 100%;
		overflow: hidden;
	}

	h1 {
		font-size: 3rem;
		font-weight: bold;
		text-align: center;
		margin-left: 2rem;
		margin-right: 2rem;
		padding-bottom: 0.5rem;
		border-bottom: black 1px solid;
	}

	h2 {
		margin: 1rem;
		color: rgb(55, 55, 55);
		text-decoration: underline;
		font-size: 3rem;
		text-align: center;
	}
	
	.mobilePricing {
		display: none;
	}

	.desktopPricing {
		display: block;
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
		.productsList {
			width: auto;
		}

		.checkout {
			display: block;
		}

		.mobilePricing {
			display: block;
		}

		.desktopPricing {
			display: none;
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
