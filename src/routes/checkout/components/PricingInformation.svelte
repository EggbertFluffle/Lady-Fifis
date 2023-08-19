<script>
	import { createEventDispatcher } from "svelte";

	let dispatch = createEventDispatcher();
	export let localCart;

	const getCartSum = () => {
		if(localCart.length == 0) return 0;
		let sum = 0;
		for(let i = 0; i < localCart.length; i++) {
			sum += localCart[i].price;
		}
		return sum;
	}

	const sendCheckoutRequest = () => {
		dispatch("checkoutRequest");
	}
</script>

<div class="pricingInformation">
	<h2>Subtotal ({localCart.length} item{(localCart.length != 1 ? "s" : "")}):  </h2>
	<h3>${(localCart.length ? getCartSum() : 0)}</h3>
	{#if localCart.length != 0}
		<button on:click={sendCheckoutRequest} class="active">Checkout</button>		
	{/if}
</div>

<style>
	.pricingInformation {
		display: flex;
		flex-direction: column;
		margin: 0.25rem;
		align-self: flex-start;
		padding: 0.5rem;
		width: max-content;
        border: solid 5px #E7B047;
		border-radius: 5px;
	}

	h3 {
		font-size: 3rem;
		text-align: center;
	}

	button {
		padding: 0.25rem;
		font-size: 1.25rem;
		border-radius: 3px;
	}
	
	.active {
		background-color: #F9ECC2;
		border: solid #E7B047 5px;
	}
	
	.active:hover {
		cursor: pointer;
		background: #C4BA99;
	}

	@media (max-width: 800px) or (max-height: 650px) {
		.pricingInformation {
			align-self: unset;
			width: auto;
		}
	}
</style>
