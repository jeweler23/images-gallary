<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import HeaderNav from '@/components/widget/HeaderNav.vue';
import CardList from '@/components/widget/CardList.vue';
</script>

<template>
	<AppLayout>
		<template #header>
			<HeaderNav />
		</template>
		<template #main>
			<CardList />
		</template>
	</AppLayout>
</template>
