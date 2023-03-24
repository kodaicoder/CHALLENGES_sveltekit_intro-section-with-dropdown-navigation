<script>
	import arrowDown from '$lib/images/icon-arrow-down.svg';
	import arrowUp from '$lib/images/icon-arrow-up.svg';
	import { clickOutside } from '$lib/helper/clickOutside';
	import { slide } from 'svelte/transition';

	export let text = 'default_text';
	export let iconSrc = '';

	let dropDownShown = false;
	$: arrowState = !dropDownShown ? arrowDown : arrowUp;
</script>

<!-- on:mouseenter={() => (dropDownShown = true)} -->
<div class="relative">
	<button
		class="flex items-center gap-2 font-semibold md:font-normal p-3 px-5 rounded-2xl transition-all duration-300
        hover:text-almostWhite hover:brightness-200 hover:bg-almostBlack
        {dropDownShown ? '!text-almostWhite !bg-almostBlack !brightness-200' : ''}"
		use:clickOutside={() => (dropDownShown = false)}
		on:click={() => (dropDownShown = !dropDownShown)}
	>
		{#if !!iconSrc}
			<img src={iconSrc} alt="list icon" />
		{/if}
		{text}
		<img src={arrowState} alt="arrow" />
	</button>
	{#if dropDownShown}
		<div
			transition:slide
			class=" md:absolute right-0 p-2 md:p-4 md:bg-almostWhite rounded-2xl md:drop-shadow-md"
		>
			<slot name="menu" />
		</div>
	{/if}
</div>
