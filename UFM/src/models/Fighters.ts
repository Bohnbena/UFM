import {defineStore} from "pinia";
import fightersjson from '@/assets/fighters_100.json';

export type Fighter = {
    id: number;
    name: string;
    lastname: string;
    level: number;
    age: number
    country: string;
    style: 'Boxer' | 'Muay Thai' | 'Jiu-Jitsu';
}

export const FightersList = defineStore('FightersList', {
    state: () => ({
        fighters: [] as Fighter[],
    }),
    persist: true, // Enable persistence
    getters: {
        getFighters: (state) => state.fighters,
    },
    actions: {
        addFighter(fighter: Fighter) {
            this.fighters.push(fighter);
        },
        removeFighter(fighterId: string) {

        },
    }
})

export function JsonFighters() {
    for (const fighter of fightersjson) {
        FightersList().addFighter({
            id: fighter.id,
            name: fighter.name,
            lastname: fighter.lastname,
            level: fighter.level,
            age: fighter.age,
            country: fighter.country,
            style: fighter.style as 'Boxer' | 'Muay Thai' | 'Jiu-Jitsu',
        });
    }
}
