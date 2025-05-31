<script setup lang="ts">
import {FightersList} from "@/models/Fighters.ts";
const fightersList = FightersList()
</script>

<template>
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
</template>

<style scoped>

</style>