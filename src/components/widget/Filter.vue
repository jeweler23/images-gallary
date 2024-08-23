<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import InputItem from '../item/InputItem.vue';
import TagItem from '../item/TagItem.vue';
import { usePostsStore } from '@/stores/postsStore';

const postsStore = usePostsStore();

const title = ref('');
const isActive = ref(false);
const textButton = computed(() => isActive.value ? 'Скрыть фильтр' : 'Фильтр');
const activeTags = computed(() => postsStore.activeTags);

// function toggleStatusTag(tag: string) {
// 	postsStore.toggleStatusTag(tag);
// }

watch(title, () => {
	postsStore.filterPost = title.value;
});
watch(activeTags, () => {
	postsStore.toggleStatusTag(activeTags.value);
});
</script>

<template>
	<section class="flex flex-col sm:gap-10 relative w-full lg:px-24  tableet:px-14 md:py-[19px] md:px-8">
		<div class="flex items-center justify-between sm:flex-row flex-col gap-3 sm:gap-0 sm:p-0 p-2">
			<div class="flex md:gap-9 md:items-center gap-2 flex-wrap w-full md:w-auto">
				<h2 class="text-[#181C32] md:text-3xl font-bold grow text-2xl">
					Блог
				</h2>
				<div class="gap-3 md:hidden flex grow justify-end">
					<button v-show="activeTags.length > 0" class="text-blue text-sm" @click="postsStore.activeTags = []">
						Очистить
					</button>
					<button class="flex items-center gap-3 text-spare text-sm" @click="isActive = !isActive">
						{{ textButton }} <img src="@/assets/icons/down.svg" alt="arrow down" class="transition-all" :class="{ '-rotate-180': isActive }">
					</button>
				</div>
				<InputItem v-model:value="title" class="grow order-last  w-full md:w-auto" />
			</div>
			<div class="gap-3 md:flex hidden">
				<button v-show="activeTags.length > 0" class="text-blue text-sm" @click="postsStore.activeTags = []">
					Очистить
				</button>
				<button class="flex items-center gap-3 text-spare text-sm" @click="isActive = !isActive">
					{{ textButton }} <img src="@/assets/icons/down.svg" alt="arrow down" class="transition-all" :class="{ '-rotate-180': isActive }">
				</button>
			</div>
		</div>
		<Transition>
			<ul
				v-show="isActive" class="flex phone:gap-3 gap-1 transition-all bg-white w-full sm:px-24 sm:py-0 py-2 ease-linear items-center justify-center sm:justify-start"
			>
				<li v-for=" tag in postsStore.allTags" :key="tag">
					<!-- @add-active-tag="toggleStatusTag" -->
					<TagItem :title="tag" :is-active="activeTags.includes(tag)" />
				</li>
			</ul>
		</Transition>
	</section>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
