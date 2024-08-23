<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Header from '@/components/widget/Header.vue';
import CardList from '@/components/widget/CardList.vue';
</script>

<template>
	<AppLayout>
		<template #header>
			<Header />
		</template>
		<template #main>
			<CardList />
		</template>
	</AppLayout>
</template>
