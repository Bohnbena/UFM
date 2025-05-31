<script setup lang="ts">
import {Player} from '@/models/Player.ts'
import {FightersList} from '@/models/Fighters.ts'
import namebox from '@/components/namebox.vue'
import {JsonFighters} from '@/models/Fighters.ts'


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
        <h2 class="text-2xl font-bold">Fighters</h2>

        <ul class="font-bold border-b border-gray-300 py-2">
          <li class="grid grid-cols-7 gap-4">
            <span>ID</span>
            <span>Name</span>
            <span>Nachname</span>
            <span>Level</span>
            <span>Alter</span>
            <span>Land</span>
            <span>Stil</span>
          </li>
        </ul>

        <ul>
          <li v-for="fighter in fightersList.getFighters" :key="fighter.id" class="grid grids col- gap-4 py-1 border-b border-gray-100">
            <span>{{ fighter.id }}</span>
            <span>{{ fighter.name }}</span>
            <span>{{ fighter.lastname }}</span>
            <span>{{ fighter.level }}</span>
            <span>{{ fighter.age }}</span>
            <span>{{ fighter.country }}</span>
            <span>{{ fighter.style }}</span>
          </li>
        </ul>
      </div>

    </div>


  </main>
</template>

<style>
.grids {
  grid-template-columns: repeat(7, 100px);
}
</style>
