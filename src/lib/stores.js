import { writable } from "svelte/store";

export let cart = writable({});
export let shopFilter = writable(null)