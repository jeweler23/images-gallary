<script setup lang="ts">
const value = defineModel('value');
</script>

<template>
	<div class="bg-[#F9F9F9] rounded-main flex px-main py-2 gap-3">
		<img src="@/assets/icons/search.svg" alt="">
		<input v-model="value" type="text" class="border-none bg-transparent outline-none" placeholder="Поиск">
	</div>
</template>
