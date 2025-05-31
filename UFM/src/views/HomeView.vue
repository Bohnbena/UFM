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
    <div class="flex gap-3">
      <div>
        <p>Name</p>
        <p> {{ player.getName }} </p>
      </div>
      <div>
        <p>Money</p>
        <p> {{ player.getMoney}}€</p>
      </div>
      <div>
        <p>Followers</p>
        <p> {{ player.getFollowers }}</p>
      </div>
    </div>
  </main>
</template>
