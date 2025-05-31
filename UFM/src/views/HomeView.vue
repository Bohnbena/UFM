<script setup lang="ts">
import {Player} from '@/models/Player.ts'
import {FightersList} from '@/models/Fighters.ts'
import namebox from '@/components/namebox.vue'
import {JsonFighters} from '@/models/Fighters.ts'

import globalfighterdata from '@/components/globalfighterdata.vue'


// Initialize player and fighters
const player = Player()
// Create a new FightersList instance
const fightersList = FightersList()
// Load fighters from JSON data
const fightersData = JsonFighters()

player.$reset()



</script>

<template>
  <main>

    <div class="flex gap-50">
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
          <p> {{ player.getMoney }}€</p>
        </div>
        <div>
          <p>Followers</p>
          <p> {{ player.getFollowers }}</p>
        </div>
      </div>

    <div>
      <globalfighterdata></globalfighterdata>
    </div>

    </div>


  </main>
</template>

<style>
.grids {
  grid-template-columns: repeat(7, 100px);
}
</style>
