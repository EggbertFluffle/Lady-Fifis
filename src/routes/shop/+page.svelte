<script>
	import NavBar from "$lib/NavBar.svelte";
    import Shop from "./components/Shop.svelte";
	import ProductPreview from "./components/ProductPreview.svelte";

	export let data;

	let preview = null;

	const previewRequestHandler = (event) => {
		if(preview == null) {
			preview = event.detail;
		}
	}
</script>

<main>
    <div>
        <NavBar tab={0}/>
        <Shop on:previewRequest={previewRequestHandler} loadedProducts={data}/>
		{#if preview != null}
			<ProductPreview on:closePreview={() => preview = null} product={preview}/>
		{/if}
    </div>
</main>

<style>
	div {
		position: relative;
		display: flex;
		flex-direction: column;
		background: #F9ECC2;
		width: 95%;
		height: 97%;
		padding: 1rem 0px;
		border-radius: 18px;
	}

    main {
		display: flex;
		align-items: center;
		justify-content: center;
		
		margin: 2rem 4rem;
		padding: 2rem 0px;
		height: calc(100svh - 8rem);
		
		background: url("./groovyBackground.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	@media (min-width: 1200px) {
		div {
			width: 1000px;
		}
	}
	
	@media (max-width: 800px) or (max-height: 650px) {
		div {
			width: 100%;
			height: 100%;
			padding: 0;
			border-radius: 0;
		}

        main {
			margin: 0 0;
			padding: 0 0;
			width: 100%;
			height: auto;
			background: #F9ECC2;
			border: 1px solid black;
		}
	}
</style>
