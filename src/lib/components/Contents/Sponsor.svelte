<script>
	import databizLogo from '$lib/images/client-databiz.svg';
	import audiophileLogo from '$lib/images/client-audiophile.svg';
	import meetLogo from '$lib/images/client-meet.svg';
	import makerLogo from '$lib/images/client-maker.svg';

	const sponsors = [
		{
			id: 1,
			alt: 'databiz',
			href: '#databiz',
			src: databizLogo
		},
		{
			id: 2,
			alt: 'audiophile',
			href: '#audiophile',
			src: audiophileLogo
		},
		{
			id: 3,
			alt: 'meet',
			href: '#meet',
			src: meetLogo
		},
		{
			id: 4,
			alt: 'maker',
			href: '#maker',
			src: makerLogo
		}
	];
</script>

<div class="grid grid-flow-col gap-6 items-center justify-between order-last">
	{#each sponsors as { id, href, alt, src } (id)}
		<a {href}>
			<img {src} {alt} class="object-contain" />
		</a>
	{/each}
</div>
