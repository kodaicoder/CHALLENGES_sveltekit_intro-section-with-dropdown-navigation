<script>
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	export let text = 'default_text';
	export let href = '#/';
	export let iconSrc = '';

	const dispatcher = createEventDispatcher();

	function linkClick() {
		dispatcher('linkClick');
	}

	// {$page.url.hash === `${href}` ? '!text-softOrange bg-veryDarkBlue ml-0' : ''}
</script>

<!-- on:mouseleave={() => (dropDownShown = false)} -->
<li>
	<!--? Note : in real project you should to using `$page.url.pathname` instead of `$page.url.hash` -->
	<a
		on:click={linkClick}
		class=" flex gap-4  items-baseline whitespace-nowrap font-semibold md:font-normal p-3 px-5 border border-transparent  rounded-2xl
		transition-all duration-300 hover:text-almostWhite hover:bg-almostBlack
		{$page.url.hash === `${href}` ? 'text-almostBlack border !border-almostBlack' : ''}"
		{href}
	>
		{#if !!iconSrc}
			<img src={iconSrc} alt="list icon" />
		{/if}
		{text}
	</a>
</li>
