<script>
	import Sponsor from './Sponsor.svelte';
</script>

<div
	class="grid grid-flow-row gap-9 p-3 text-center items-center order-last lg:order-first lg:text-start lg:items-end lg:p-0 lg:w-[75%]"
>
	<!--! HEADER -->
	<div class="font-bold text-4xl text-almostBlack lg:text-7xl">
		<h1>Make remote work</h1>
	</div>

	<!--! PARAGRAPH -->
	<div class="flex flex-col justify-around gap-6 items-center h-full lg:items-start lg:w-4/5">
		<p class="font-medium">
			Get your team in sync, no matter your location. Streamline processes, create team rituals, and
			watch productivity soar.
		</p>
		<a
			class="w-fit font-medium p-3 px-6 rounded-2xl bg-almostBlack text-almostWhite border border-almostBlack 
        transition-all duration-300
        hover:bg-almostWhite hover:text-almostBlack"
			href="#make-remote-work"
		>
			Learn more</a
		>
	</div>

	<!--! FOOTER -->
	<Sponsor />
</div>
