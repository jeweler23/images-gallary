<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseStub from '@/components/ui/BaseStub.vue';
import CardModalItem from '@/components/item/CardModalItem.vue';
import CardListItem from '@/components/item/CardListItem.vue';
import { usePostsStore } from '@/stores/postsStore';
import { useModal } from '@/composables/useModal';
import DialogLayout from '@/layouts/DialogLayout.vue';
import type { IPost } from '@/types/post';

const postStore = usePostsStore();
const selectedPost = ref<IPost>();
const { isOpen, open, close } = useModal();

function selectPost(post: IPost) {
  selectedPost.value = post;
  open();
}
</script>

<template>
	<ul v-if="postStore.filterPosts.length > 0" class="grid xl:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] gap-5 justify-center mt-5 bg-white tableet:py-8 py-2 lg:px-20 sm:px-[14px] px-[14px] rounded-md">
		<transition-group
			name="list"
			enter-active-class="transition transform ease-out duration-300"
			enter-from-class="opacity-0 translate-y-2"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition transform ease-in duration-300"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 translate-y-2"
		>
			<li v-for="post in postStore.filterPosts" :key="post.id" class="tableet:mb-5">
				<CardListItem :post="post" @click="selectPost(post)" />
			</li>
		</transition-group>
	</ul>
	<BaseStub v-else />
	<teleport to="body">
		<DialogLayout v-if="isOpen && selectedPost">
			<template #dialog>
				<CardModalItem :post="selectedPost" class="overflow-y-scroll h-[630px]" @close="close" />
			</template>
		</DialogLayout>
	</teleport>
</template>
