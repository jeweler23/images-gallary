<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Header from '@/components/widget/Header.vue';
import { usePostsStore } from '@/stores/postsStore';

const postsStore = usePostsStore();
</script>

<template>
	<AppLayout>
		<template #header>
			<Header />
		</template>
		<template #main />
	</AppLayout>
</template>
