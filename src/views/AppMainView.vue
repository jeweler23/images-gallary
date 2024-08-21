<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Header from '@/components/widget/Header.vue';
</script>

<template>
	<AppLayout>
		<template #header>
			<Header />
		</template>
		<template #main />
	</AppLayout>
</template>
