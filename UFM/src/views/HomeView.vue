<script setup lang="ts">
import { Player } from '@/models/Player.ts'
import { GenerateFighter } from '@/models/Fighters.ts'
import { FightersList } from '@/models/Fighters.ts'
import namebox from '@/components/namebox.vue'

// Initialize player and fighters
const player = Player()

// Create a new FightersList instance
const fightersList = FightersList()
// Generate a new fighter
const newFighter = GenerateFighter()
// Add the new fighter to the fighters list
fightersList.addFighter(newFighter)

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

    <div>
      <h2 class="text-2xl font-bold">Fighters</h2>
      <ul>
        <li v-for="fighter in fightersList.getFighters" :key="fighter.id">
          {{ fighter.name }} - {{ fighter.level }} - {{ fighter.health }} HP
        </li>
      </ul>
    </div>

  </main>
</template>
