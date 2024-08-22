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
	<div class="w-[630px] flex flex-col gap-3 cursor-pointer p-3">
		<h3 class="text-[22px] font-semibold">
			{{ post.title }}
		</h3>
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
		<img :src="srcImage" alt="info image" class="w-[600px] h-[373px] m-auto">

		<p class="text-base font-medium">
			{{ post.description }}
		</p>
		<!-- В отдельный компонент -->
		<ul class="flex gap-3">
			<li v-for="tag in post.tags" :key="tag">
				<TagItem :title="tag" :is-active="null" />
			</li>
		</ul>
		<div>
			<h4>Комментариев {{ post.comments.length }}</h4>
			<textarea v-model="message" placeholder="Введите комментарий" class="border w-full" />
		</div>
		<ul class="flex flex-col gap-3">
			<li v-for="(comment, index) in post.comments" :key="index" class="flex gap-3 items-center">
				<img src="" alt="" class="w-[38px] h-[38px]">
				<div>
					<p class="text-base font-semibold text-[#181C32]">
						{{ comment.author }}
					</p>
					<p class="text-[#3F4254] text-sm font-medium">
						{{ comment.description }}
					</p>
					<p class="text-[#A1A5B7] text-xs font-medium">
						{{ comment.create_date_comment }}
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>
