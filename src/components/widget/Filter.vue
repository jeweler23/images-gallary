<script setup lang="ts">
import { computed, ref } from 'vue';
import InputItem from '../item/InputItem.vue';

const tag = ref('');
const isActive = ref(false);
const textButton = computed(() => isActive.value ? 'Скрыть фильтр' : 'Фильтр');
</script>

<template>
	<section>
		<div class=" flex items-center justify-between">
			<div class="flex gap-5 items-center">
				<h2 class="text-spare">
					Блог
				</h2>
				<InputItem v-model:value="tag" />
			</div>
			<button class="flex items-center gap-3 text-spare" @click="isActive = !isActive">
				{{ textButton }} <img src="@/assets/icons/down.svg" alt="arrow down" class="transition-all" :class="{ '-rotate-180': isActive }">
			</button>
		</div>
		<div />
	</section>
</template>
