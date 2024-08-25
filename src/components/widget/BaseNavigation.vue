<script setup lang="ts">
import { ref } from 'vue';

const setPages = ref('Блог');
</script>

<template>
	<nav class="flex gap-[36px]">
		<button class="inactive-link font-semibold" :class="{ 'active-link': setPages === 'Главная' }" @click="setPages = 'Главная'">
			Главная
		</button>
		<button class="inactive-link font-semibold" :class="{ 'active-link': setPages === 'Блог' }" @click="setPages = 'Блог'">
			Блог
		</button>
	</nav>
</template>
