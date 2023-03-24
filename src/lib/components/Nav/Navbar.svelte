<script>
	import { browser } from '$app/environment';
	import { slide, fade } from 'svelte/transition';
	import logoImg from '$lib/images/logo.svg';

	import todoIcon from '$lib/images/icon-todo.svg';
	import calendarIcon from '$lib/images/icon-calendar.svg';
	import reminderIcon from '$lib/images/icon-reminders.svg';
	import planIcon from '$lib/images/icon-planning.svg';

	import menuImg from '$lib/images/icon-menu.svg';
	import closeImg from '$lib/images/icon-close-menu.svg';
	import Dropdown from './Dropdown.svelte';
	import NavList from './NavList.svelte';
	let menuShow = false;
	let innerWidth = 0;

	//? made body no longer scrolls when a side nav is open
	//? and the scroll location is maintained both
	//? when a side nav is open or closed.
	$: {
		if (browser) {
			window.addEventListener('scroll', () => {
				document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
			});
			if (menuShow) {
				const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
				const body = document.body;
				body.style.position = 'fixed';
				body.style.top = `-${scrollY}`;
			} else {
				const body = document.body;
				const scrollY = body.style.top;
				body.style.position = '';
				body.style.top = '';
				window.scrollTo(0, parseInt(scrollY || '0') * -1);
			}
		}
	}

	//? fix issue while user adjust width of page and didn't close side nav menu
	$: {
		if (innerWidth > 768) {
			menuShow = false;
		}
	}

	const closeSideNav = () => {
		menuShow = false;
	};
</script>

<svelte:window bind:innerWidth />

<div
	class=" w-full fixed top-0 left-0 px-8 py-4 bg-white/80 backdrop-blur grid grid-flow-col items-center "
>
	<div class="grid grid-flow-col-dense justify-between lg:justify-start gap-16">
		<a href="#/" class=" justify-self-center self-center">
			<img src={logoImg} alt="Logo" />
		</a>
		<!--! burger menu -->
		<div class="flex lg:hidden justify-end h-full overflow-hidden">
			<button on:click={() => (menuShow = !menuShow)}>
				<img src={menuImg} alt="menu" class="  aspect-square" />
			</button>
		</div>

		<!-- normal nav -->
		<ul class="hidden lg:flex gap-2">
			<li>
				<Dropdown text="Features">
					<ul class="w-max" slot="menu">
						<NavList iconSrc={todoIcon} text="Todo List" href="#todolist" />
						<NavList iconSrc={calendarIcon} text="Calendar" href="#calendar" />
						<NavList iconSrc={reminderIcon} text="Reminders" href="#reminders" />
						<NavList iconSrc={planIcon} text="Planning" href="#planning" />
					</ul>
				</Dropdown>
			</li>
			<li>
				<Dropdown text="Company">
					<ul slot="menu">
						<NavList text="History" href="#history" />
						<NavList text="Our Team" href="#team" />
						<NavList text="Blog" href="#blog" />
					</ul>
				</Dropdown>
			</li>
			<NavList text="Careers" href="#careers" />
			<NavList text="About" href="#about" />
		</ul>
	</div>
	<ul class="hidden lg:flex justify-end items-center gap-4">
		<li>
			<a
				class="rounded-2xl p-3 px-5 border border-transparent  transition-all duration-300 hover:text-almostWhite hover:bg-almostBlack"
				href="#login">Login</a
			>
		</li>
		<li>
			<a
				class="p-3 px-5 border-2 rounded-2xl border-mediumGray
					transition-all duration-300
					hover:text-almostWhite hover:bg-almostBlack hover:border-almostBlack"
				href="#register">Register</a
			>
		</li>
	</ul>
</div>

<!-- side nav -->
{#if menuShow}
	<!-- Backdrop -->
	<div class="lg:hidden">
		<button
			transition:fade
			on:click={closeSideNav}
			class="fixed top-0 right-0 w-full h-full backdrop-brightness-50 z-20 overflow-hidden"
		/>
		<!-- Menu -->
		<div
			transition:slide={{ duration: 300, axis: 'x' }}
			class="fixed top-0 right-0 bg-white w-3/5 h-full z-30 overflow-hidden overflow-y-auto"
		>
			<div class="flex">
				<button class="ml-auto m-4" on:click={closeSideNav}>
					<img src={closeImg} alt="close" />
				</button>
			</div>
			<div class="p-6">
				<ul class="flex flex-col ">
					<Dropdown text="Features">
						<ul slot="menu">
							<NavList
								iconSrc={todoIcon}
								text="Todo List"
								href="#todolist"
								on:linkClick={closeSideNav}
							/>
							<NavList
								iconSrc={calendarIcon}
								text="Calendar"
								href="#calendar"
								on:linkClick={closeSideNav}
							/>
							<NavList
								iconSrc={reminderIcon}
								text="Reminders"
								href="#reminders"
								on:linkClick={closeSideNav}
							/>
							<NavList
								iconSrc={planIcon}
								text="Planning"
								href="#planning"
								on:linkClick={closeSideNav}
							/>
						</ul>
					</Dropdown>
					<Dropdown text="Company">
						<ul slot="menu">
							<NavList text="History" href="#history" on:linkClick={closeSideNav} />
							<NavList text="Our Team" href="#team" on:linkClick={closeSideNav} />
							<NavList text="Blog" href="#blog" on:linkClick={closeSideNav} />
						</ul>
					</Dropdown>
					<NavList text="Careers" href="#careers" on:linkClick={closeSideNav} />
					<NavList text="About" href="#about" on:linkClick={closeSideNav} />
				</ul>
				<ul class=" grid gap-4 mt-8">
					<li>
						<button
							class="rounded-2xl p-3 px-5 border border-transparent   w-full transition-all duration-300 hover:text-almostWhite hover:bg-almostBlack"
							>Login</button
						>
					</li>
					<li>
						<button
							class="w-full p-1 border-2 rounded-2xl border-mediumGray 
								transition-all duration-300
								hover:text-almostWhite hover:bg-almostBlack hover:border-almostBlack">Register</button
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
{/if}
