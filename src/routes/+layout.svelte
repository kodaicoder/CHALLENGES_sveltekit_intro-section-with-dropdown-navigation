<script>
	import Navbar from '$lib/components/Nav/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="grid gap-3 md:p-8 md:min-h-screen ">
	<nav>
		<Navbar />
	</nav>
	<main>
		<slot />
	</main>

	<footer class="mt-2 md:m-0">
		<Footer />
	</footer>
</div>
