<script setup lang="ts">
import {FightersList} from "@/models/Fighters.ts";
import {Player} from "@/models/Player.ts";
import {ref} from "vue";

const fightersList = FightersList()
const player = Player()

const figherDataMenu = ref(false);
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Fighters</h2>
    <ul class="font-bold border-b border-gray-300 py-2">
      <li class="grid grid-cols-8 gap-4">
        <span>ID</span>
        <span>Name</span>
        <span>Nachname</span>
        <span>Level</span>
        <span>Alter</span>
        <span>Land</span>
        <span>Stil</span>
        <span class="bg-green-500 w-15 flex justify-center" @click="figherDataMenu = !figherDataMenu">Hide</span>
      </li>
    </ul>
    <ul v-show="figherDataMenu">
      <li v-for="fighter in fightersList.getFighters" :key="fighter.id" class="grid grids gap-4 py-1 border-b border-gray-100" >
        <span>{{ fighter.id }}</span>
        <span>{{ fighter.name }}</span>
        <span>{{ fighter.lastname }}</span>
        <span>{{ fighter.level }}</span>
        <span>{{ fighter.age }}</span>
        <span>{{ fighter.country }}</span>
        <span>{{ fighter.style }}</span>
        <button class="bg-red-600 w-15 flex justify-center text-white font-bold" @click="player.addFighter(fighter); fightersList.removeFighter(String(fighter.id))">Sign</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.grids {
  grid-template-columns: repeat(8, 100px);
}
</style>