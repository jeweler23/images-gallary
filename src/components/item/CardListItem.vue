<script setup lang="ts">
import { computed } from 'vue';
import TagItem from '@/components/item/TagItem.vue';
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
	<div class="2xl:w-[400px] flex flex-col gap-[5px] cursor-pointer lg:w-[330px] w-full ">
		<img :src="srcImage" alt="info image" class="phone:w-[325px] tableet:h-[250px] md:h-[220px] phone:h-[200px] sm:w-full m-auto sm:m-0">
		<div class="flex md:gap-[9px] text-[#7E8299] w-full items-center gap-[6px]">
			<p class="md:text-sm text-xs">
				{{ post.create_date_post }}
			</p>
			•
			<p class="flex gap-1 items-center md:text-base text-sm">
				<img src="@/assets/icons/time.svg" alt=""><span class="md:text-sm text-xs"> {{ post.timeRead }}  мин</span>
			</p>
			•
			<p class="flex gap-1 items-center md:text-base text-sm">
				<img src="@/assets/icons/comment.svg" alt=""><span class="md:text-sm text-xs">{{ comment }}</span>
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
