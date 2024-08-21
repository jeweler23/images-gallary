<script setup lang="ts">
import { ref, shallowRef } from 'vue';

const setPages = ref('Блог');
</script>

<template>
	<nav class="flex gap-5">
		<button class="inactive-link" :class="{ 'active-link': setPages === 'Главная' }" @click="setPages = 'Главная'">
			Главная
		</button>
		<button class="inactive-link" :class="{ 'active-link': setPages === 'Блог' }" @click="setPages = 'Блог'">
			Блог
		</button>
	</nav>
</template>
