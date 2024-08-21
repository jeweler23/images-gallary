<script setup lang="ts">
import Navigation from './Navigation.vue';
import Filter from './Filter.vue';
</script>

<template>
	<section class="flex flex-col justify-center items-center">
		<div class="bg-black p-main flex items-center gap-16 w-full">
			<h1 class="hidden">
				Logooipsum
			</h1>
			<img src="@/assets/icons/logo.svg" alt="logo">
			<!-- думаю подразумевалась как навигация -->
			<Navigation />
		</div>
		<div class="w-full bg-white flex justify-center py-5">
			<Filter class="w-[1120px]" />
		</div>
	</section>
</template>
