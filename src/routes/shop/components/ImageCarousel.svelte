<script>
	export let id;
	export let images;
</script>

<div class="carousel">
	<div class="imageContainer"  role="img">
		{#each images as i}
			<img src="./images/{id}-{i}.jpg" loading="lazy" alt="Product preview">
		{/each}
	</div>
</div>

<style>
	.carousel {
		margin: auto 0px;
		padding: 0.25rem;
		width: auto;
		border-radius: 3px;
	}

	.imageContainer {
		display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
		max-width: 100%;
		min-height: 100%;
	}

	img {
		width: 100%;
		border-radius: 5px;
		margin: 0.25rem;
	}

	::-webkit-scrollbar {
	  width: 10px;
	}
	
	::-webkit-scrollbar-track {
	  background: rgba(255, 255, 255, 51);
		border-right: 3px solid white;
		border-left: 3px solid white;
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
</style>
