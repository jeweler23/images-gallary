<script setup lang="ts">
import { computed, ref } from 'vue';
import TagItem from './TagItem.vue';
import type { IPost } from '@/types/post';

interface Post {
  post: IPost;
};

const props = defineProps<Post>();
defineEmits<{
	(event: 'close'): void;
}>();

const srcImage = computed(() => new URL(`../../assets/images/${props.post.image}.png`, import.meta.url).href);

const message = ref('');
const isMessageBig = computed(() => !(message.value.length < 251));

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

function setImageCommentator(src: string) {
	return new URL(`../../assets/images/${src}.png`, import.meta.url).href;
}
</script>

<template>
	<div class="sm:w-[630px] flex flex-col gap-3 p-3 phone:w-[350px]">
		<h3 class="text-[22px] font-semibold flex justify-between item-center">
			{{ post.title }}
			<button class="w-[20px] flex justify-center items-center" @click="$emit('close')">
				<img src="@/assets/icons/close.svg" alt="close button">
			</button>
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
		<img :src="srcImage" alt="info image" class="sm:w-[600px] h-[373px] m-auto">

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
			<textarea v-model="message" placeholder="Введите комментарий" class="border outline-none w-full " :class="{ 'border-[#F1416C]': isMessageBig, 'border-blue': message.length > 0 && !isMessageBig }" />
			<transition>
				<div v-show="message.length > 0">
					<p class="text-[#7E8299]">
						<span :class="{ 'text-[#F1416C]': isMessageBig }">{{ message.length }}</span> из 250 символов
					</p>
					<div class="flex gap-[10px] justify-end">
						<button class="p-[6px] rounded-md bg-[#EEF6FF] text-blue w-[120px]" @click="message = ''">
							Отмена
						</button>
						<button class="p-[6px] rounded-md  text-white w-[120px]" :disabled="isMessageBig" :class="{ 'bg-[#F9F9F9] text-[#D8D8E5]': isMessageBig, 'bg-blue': !isMessageBig }">
							Опубликовать
						</button>
					</div>
				</div>
			</transition>
		</div>
		<ul class="flex flex-col gap-3">
			<li v-for="(comment, index) in post.comments" :key="index" class="flex gap-3 items-center">
				<img :src="setImageCommentator(comment.avatar)" alt="avatar" class="w-[38px] h-[38px]">
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

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
