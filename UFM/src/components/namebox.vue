<script setup lang="ts">
  import { Player } from '@/models/Player.ts'
  import {ref} from "vue";
  const player = Player()
  const inputname = ref("");
</script>

<template>
  <div class="flex flex-col bg-black text-white max-w-[23vh] justify-center items-center gap-3 p-3">
      <p>Enter your name</p>
      <input type="text"  class="bg-white rounded text-black max-w-[20vh] " placeholder="Name" v-model="inputname">
      <button class="bg-white text-black rounded p-1 w-25" @click="player.setName(inputname)">
        Submit
      </button>
  </div>
</template>

<style scoped>

</style>