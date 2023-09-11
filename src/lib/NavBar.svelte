<script>
	import "@fontsource/italiana"; 
	import Icon from '@iconify/svelte';
	import { cart, shopFilter } from "$lib/stores.js";
	
	let itemsInCart = 0;
	cart.subscribe((data) => {
		itemsInCart = Object.entries(data).length;
	});
	
	let mobileNavReveal = true;
	export let tab;

	let toggleNav = () => {
		mobileNavReveal = !mobileNavReveal;
	}

	let revealOffset;

	const setFilter = (f) => {
		shopFilter.update(() => {
			return f;
		});
	}
</script>

<nav class={mobileNavReveal ? "revealed" : ""} style="--reveal-offset: {(-revealOffset - 3) + "px"}">
    <ul bind:offsetHeight={revealOffset}>
		<li class="shopLink"><a on:click={() => setFilter(null)} class={tab == 0 ? "underline" : ""} href="/shop" >Shop</a>
			<ul class="shopFilters">
				<li><a on:click={() => { setFilter("crochet"); }} href="/shop">Crochet</a></li>
				<li><a on:click={() => { setFilter("dress"); }} href="/shop">Dresses</a></li>
			</ul>
		</li>
		<li class="seperator">\</li>
		<li><a class={tab == 1 ? "underline" : ""} href="/aboutme">About Me</a></li>
		<li class="seperator">\</li>
        <li><a class={tab == 2 ? "underline" : ""} href="/faqs">FAQs</a></li>
		<li class="seperator">\</li>
        <li><a class={tab == 3 ? "underline" : ""} href="/checkout">Checkout ({itemsInCart})</a></li>
    </ul>
	<div class="iconWrapper" on:click={toggleNav} on:keydown={toggleNav} role="button" tabindex={0}>
		<Icon icon="solar:hamburger-menu-outline" width="35"/>
	</div>
</nav>

<style>
	nav {
		font-weight: bold;
		font-style: italic;
	  	list-style-type: none;
	  	margin: auto;
	  	padding: 0;
		font-family: "Italiana", sans-serif;
		top: 0px;
		transition: top 0.5s ease;
		z-index: 2;
	}

	ul {
		text-align: center;
	}

	.shopLink {
		position: relative;
	}

	.shopFilters {
		display: flex;
		flex-direction: column;
		left: -25%;
		position: absolute;
		height: 0px;
		overflow: hidden;
		transition: 0.5s ease;
		background-color: #F9ECC2; 
		border: solid 5px #E7B047;
		opacity: 0;
		border-radius: 3px;
	}

	.shopLink:hover .shopFilters {
		height: 200%;
		opacity: 1;
	}
	
	li {
	  	display: inline-block;
		font-size: 2rem;
		color: #de310f;
	}
	
	a {
	  display: block;
	  padding: 10px 1rem;
	  text-decoration: none;
		color: #de310f;
	}

	a:hover {
		text-decoration: underline;
	}

	.underline {
		text-decoration: underline;
	}

	.iconWrapper {
		display: none;
	}

	@media (max-width: 800px) or (max-height: 650px) {
		nav {
			position: fixed;
			display: flex;
			flex-direction: column;
			background-color: none;
			border-radius: none;
			border: none;
			margin: 0;
			width: max-content;
		}

		.revealed {
			top: var(--reveal-offset);
		}

		ul {
			background-color: #F9ECC2;
			border: solid black 2px;
			border-radius: 3px;
		}

		nav > ul > li {
			display: block;
		}

		.seperator {
			display: none;
		}

		.iconWrapper {
			display: block;
			background-color: #F9ECC2;
			border-radius: 3px;
			border: solid black 2px;
			align-self: start;
			padding: 0.1rem 0.1rem calc(0.1rem - 3px) 0.1rem;
		}

		.shopFilters {
			left: 100%;
			top: -3px;
			border: solid black 3px;
		}
	}
</style>
