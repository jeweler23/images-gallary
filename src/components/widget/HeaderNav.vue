<script setup lang="ts">
import BaseFilter from '@/components/widget/BaseFilter.vue';
import BaseNavigation from '@/components/widget/BaseNavigation.vue';
</script>

<template>
	<section class="flex flex-col items-center">
		<div class="bg-black tableet:py-[15px] tableet:px-14 flex items-center tableet:gap-[84px] w-full px-6 py-6 gap-3">
			<div class="h-full flex gap-1 flex-col  tableet:hidden">
				<div class="w-[24px] h-[3px] bg-white" />
				<div class="w-[24px] h-[3px] bg-white" />
				<div class="w-[24px] h-[3px] bg-white" />
			</div>
			<h1 class="hidden">
				Logooipsum
			</h1>
			<img src="@/assets/icons/logo.svg" alt="logo">
			<!-- думаю подразумевалась как навигация -->
			<BaseNavigation class="hidden tableet:flex" />
		</div>
		<div class="w-full bg-white flex">
			<BaseFilter />
		</div>
	</section>
</template>
