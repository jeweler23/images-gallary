<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Header from '@/components/widget/Header.vue';
import { usePostsStore } from '@/stores/postsStore';
import CardList from '@/components/widget/CardList.vue';

const postsStore = usePostsStore();
</script>

<template>
	<AppLayout>
		<template #header>
			<Header />
		</template>
		<template #main>
			<div class=" w-full h-full ">
				<CardList class="" />
			</div>
		</template>
	</AppLayout>
</template>
