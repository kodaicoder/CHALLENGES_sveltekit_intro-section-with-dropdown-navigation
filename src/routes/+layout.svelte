<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-col gap-3 md:p-6 md:min-h-screen ">
	<nav>
		<Navbar />
	</nav>
	<main class="my-14">
		<slot />
	</main>

	<footer class="mt-2 md:m-0">
		<Footer />
	</footer>
</div>
