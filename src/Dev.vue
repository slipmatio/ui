<script setup lang="ts">
import SlipmatButton from './components/SlipmatButton.vue'
</script>
<template>
  <div class="space-y-2">
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton>Hello primary</SlipmatButton>
      <SlipmatButton secondary>Hello secondary</SlipmatButton>
    </div>
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton :is-working="true">Hello working</SlipmatButton>
      <SlipmatButton :is-working="true" working-text="Downloading">Hello working</SlipmatButton>
    </div>
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton secondary :is-working="true">Hello working</SlipmatButton>
      <SlipmatButton secondary :is-working="true" working-text="Downloading"
        >Hello working</SlipmatButton
      >
    </div>
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton icon="trash">Hello trash</SlipmatButton>
      <SlipmatButton icon="new">Hello new</SlipmatButton>
      <SlipmatButton icon="edit">Hello edit</SlipmatButton>
      <SlipmatButton icon="download">Hello download</SlipmatButton>
      <SlipmatButton icon="upload">Hello upload</SlipmatButton>
      <SlipmatButton icon="reset">Hello reset</SlipmatButton>
    </div>
  </div>
</template>
