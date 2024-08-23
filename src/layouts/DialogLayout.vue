<script setup lang="ts"></script>

<template>
	<div class="fixed inset-0 bg-black/80 flex justify-center items-center overflow-y-hidden">
		<div class="bg-white rounded-2xl ">
			<slot name="dialog" />
		</div>
	</div>
</template>
