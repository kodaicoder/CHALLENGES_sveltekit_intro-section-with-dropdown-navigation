<script>
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
		class=" flex gap-4  items-baseline whitespace-nowrap font-semibold md:font-normal p-2  rounded-lg transition-all duration-300 hover:text-almostBlack"
		{href}
	>
		{#if !!iconSrc}
			<img src={iconSrc} alt="list icon" />
		{/if}
		{text}
	</a>
</li>
