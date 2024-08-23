<script setup lang="ts">
import { computed, ref } from 'vue';
import Cardtem from '../item/Cardtem.vue';
import CardModalItem from '../item/CardModalItem.vue';
import Stub from '../ui/Stub.vue';
import { usePostsStore } from '@/stores/postsStore';
import { useModal } from '@/composables/useModal';
import DialogLayout from '@/layouts/DialogLayout.vue';

const postStore = usePostsStore();
const selectedPost = ref();
const { isOpen, open, close } = useModal();

const filteredPosts = computed(() => postStore.filterPost);

function selectPost(post) {
  selectedPost.value = post;
  open();
}
</script>

<template>
	<ul v-if="filteredPosts.length > 0" class="grid xl:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] gap-5 justify-center mt-5 bg-white tableet:py-8 py-2 lg:px-20 sm:px-[14px] px-[14px] rounded-md">
		<li v-for="post in filteredPosts" :key="post.id" class="tableet:mb-5">
			<Cardtem :post="post" @click="selectPost(post)" />
		</li>
	</ul>
	<Stub v-else />
	<teleport to="body">
		<DialogLayout v-if="isOpen">
			<template #dialog>
				<CardModalItem :post="selectedPost" class="overflow-y-scroll h-[630px]" @close="close" />
			</template>
		</DialogLayout>
	</teleport>
</template>
