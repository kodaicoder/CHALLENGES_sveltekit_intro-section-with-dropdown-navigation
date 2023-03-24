<script>
	import heroImageDesktop from '$lib/images/image-hero-desktop.png';
	import heroImageMobile from '$lib/images/image-hero-mobile.png';
</script>

<div class="lg:order-last lg:grid lg:justify-items-center">
	<picture>
		<source srcset={heroImageDesktop} media="(min-width:1024px)" />
		<img src={heroImageMobile} alt="hero" />
	</picture>
</div>
