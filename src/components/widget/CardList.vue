<script setup lang="ts">
import { ref } from 'vue';
import Cardtem from '../item/Cardtem.vue';
import CardModalItem from '../item/CardModalItem.vue';
import { usePostsStore } from '@/stores/postsStore';
import { useModal } from '@/composables/useModal';

const postStore = usePostsStore();
const selectedPost = ref();
const { isOpen, open, close } = useModal();
function selectPost(post) {
  selectedPost.value = post;
  open();
}
</script>

<template>
	<ul class=" grid grid-cols-[400px_400px_400px] grid-rows-[1fr_1fr] flex-nowrap gap-10 justify-center">
		<li v-for="post in postStore.filterPost" :key="post.id" class="border w-full h-full ">
			<Cardtem :post="post" @click="selectPost(post)" />
		</li>
	</ul>
	<teleport to="body">
		<div v-if="isOpen" class="absolute inset-0 bg-black/80 flex justify-center items-center overflow-y-hidden">
			<div class="bg-white rounded-2xl ">
				<CardModalItem :post="selectedPost" class="overflow-y-scroll h-[630px]" />
			</div>
		</div>
	</teleport>
</template>
