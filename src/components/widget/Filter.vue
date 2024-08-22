<script setup lang="ts">
import { computed, ref } from 'vue';
import InputItem from '../item/InputItem.vue';
import TagItem from '../item/TagItem.vue';
import { usePostsStore } from '@/stores/postsStore';

const postsStore = usePostsStore();

const title = ref('');
const isActive = ref(false);
const textButton = computed(() => isActive.value ? 'Скрыть фильтр' : 'Фильтр');
const activeTag = ref<string[]>([]);

function toggleStatusTag(tag: string) {
	if (!activeTag.value.includes(tag)) {
		activeTag.value.push(tag);
	}
 else {
	activeTag.value = activeTag.value.filter(item => item !== tag);
	}
}
</script>

<template>
	<section class="flex flex-col gap-3 relative">
		<div class=" flex items-center justify-between">
			<div class="flex gap-5 items-center">
				<h2 class="text-spare">
					Блог
				</h2>
				<InputItem v-model:value="title" />
			</div>
			<div class="flex gap-3">
				<button v-show="activeTag.length > 0" class="text-blue" @click="activeTag = []">
					Очистить
				</button>
				<button class="flex items-center gap-3 text-spare" @click="isActive = !isActive">
					{{ textButton }} <img src="@/assets/icons/down.svg" alt="arrow down" class="transition-all" :class="{ '-rotate-180': isActive }">
				</button>
			</div>
		</div>
		<Transition>
			<ul v-show="isActive" class="flex gap-3 transition-all bg-white w-full ease-linear absolute top-[150%]">
				<li v-for="tag in postsStore.allTags" :key="tag">
					<TagItem :title="tag" :is-active="activeTag.includes(tag)" @add-active-tag="toggleStatusTag" />
				</li>
			</ul>
		</Transition>
	</section>
</template>
