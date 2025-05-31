<script setup lang="ts">
import { Player } from '@/models/Player.ts'
import namebox from '@/components/namebox.vue'
const player = Player()
player.setName("Arthur")
</script>

<template>
  <main>
    <div class="ml-5">
      <namebox></namebox>
    </div>
    <div>
      <p> {{ player.getName }}</p>
    </div>
  </main>
</template>
