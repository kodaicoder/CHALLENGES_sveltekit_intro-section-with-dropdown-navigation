<script>
	import heroImageDesktop from '$lib/images/image-hero-desktop.png';
	import heroImageMobile from '$lib/images/image-hero-mobile.png';

	import databizLogo from '$lib/images/client-databiz.svg';
	import audiophileLogo from '$lib/images/client-audiophile.svg';
	import meetLogo from '$lib/images/client-meet.svg';
	import makerLogo from '$lib/images/client-maker.svg';
</script>

<div class="grid gap-6 lg:gap-32 grid-flow-row lg:grid-cols-2 lg:mx-20">
	<div
		class=" grid grid-flow-row gap-9 text-center items-center p-3 order-last
        lg:items-end lg:p-0 lg:px-10 lg:order-1 lg:text-left"
	>
		<div
			class="font-bold text-4xl text-almostBlack
        lg:text-7xl "
		>
			<h1>Make remote work</h1>
		</div>
		<div class="flex flex-col justify-around gap-6 items-center h-full lg:items-start lg:gap-0">
			<p class="text-base font-medium lg:text-lg">
				Get your team in sync, no matter your location. Streamline processes, create team rituals,
				and watch productivity soar.
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
		<div
			class="grid grid-flow-col p-3 gap-6 items-center justify-between order-last
            lg:p-0 lg:order-2"
		>
			<a href="#databiz">
				<img src={databizLogo} alt="databiz" class="object-contain" />
			</a>
			<a href="#audiophile">
				<img src={audiophileLogo} alt="audiophile" class="object-contain" />
			</a>
			<a href="#meet">
				<img src={meetLogo} alt="meet" class="object-contain" />
			</a>
			<a href="#maker">
				<img src={makerLogo} alt="maker" class="object-contain" />
			</a>
		</div>
	</div>
	<div class=" lg:order-last">
		<picture>
			<source srcset={heroImageDesktop} media="(min-width:1024px)" />
			<img src={heroImageMobile} alt="hero" />
		</picture>
	</div>
</div>
