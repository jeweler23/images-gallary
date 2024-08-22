<script setup lang="ts">
import { computed } from 'vue';
import TagItem from './TagItem.vue';
import type { IPost } from '@/types/post';

interface Post {
  post: IPost;
};

const props = defineProps<Post>();

const srcImage = computed(() => new URL(`../../assets/images/${props.post.image}.png`, import.meta.url).href);

const comment = computed(() => {
  if (props.post.comments.length === 1) {
   return `${props.post.comments.length} комментарий`;
  }
 else if (props.post.comments.length === 2 || props.post.comments.length === 3 || props.post.comments.length === 4) {
  return `${props.post.comments.length} комментария`;
  }
 else if (props.post.comments.length > 4 && props.post.comments.length < 20) {
  return `${props.post.comments.length} комментариев`;
  }
  return `${props.post.comments.length} ком.`;
});
</script>

<template>
	<div class="w-[400px] flex flex-col gap-3 cursor-pointer">
		<img :src="srcImage" alt="info image" class="w-[400px] h-[250px]">
		<div class="flex gap-3 text-[#7E8299]">
			<p>{{ post.create_date_post }}</p>
			•
			<p class="flex gap-2">
				<img src="@/assets/icons/time.svg" alt="">{{ post.timeRead }} мин
			</p>
			•
			<p class="flex gap-2">
				<img src="@/assets/icons/comment.svg" alt="">{{ comment }}
			</p>
		</div>
		<h3 class="text-[22px] font-semibold">
			{{ post.title }}
		</h3>
		<p class="text-base font-medium">
			{{ post.subtitle }}
		</p>
		<ul class="flex gap-3">
			<li v-for="tag in post.tags" :key="tag">
				<TagItem :title="tag" :is-active="null" />
			</li>
		</ul>
	</div>
</template>
