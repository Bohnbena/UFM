<script setup lang="ts">
import { Player } from '@/models/Player.ts'
import namebox from '@/components/namebox.vue'

const player = Player()


</script>

<template>
  <main>
    <div class="ml-5">
      <namebox v-if="player.getName == '' "></namebox>
    </div>
    <div>
      <p> {{ player.getName }} </p>
    </div>
  </main>
</template>
