<script setup lang="ts">
import { computed } from 'vue';

interface ITag {
  title: string;
  isActive: boolean | null;
}
const props = defineProps<ITag>();
defineEmits<(event: 'addActiveTag', title: string) => void>();

const srcLink = computed(() => props.isActive ? new URL('@/assets/icons/check.svg', import.meta.url).href : new URL('@/assets/icons/plus.svg', import.meta.url).href);

const isActiveClass = computed(() => props.isActive ? 'bg-blue text-white' : 'bg-spare_blue text-blue');
</script>

<template>
	<div :class="isActiveClass" class="py-1 px-2 rounded-tag flex md:gap-3 cursor-pointer" @click="$emit('addActiveTag', props.title)">
		<span class="md:text-base text-sm">{{ title }}</span>
		<img v-if="isActive !== null" :src="srcLink" alt="" class="w-4">
	</div>
</template>
