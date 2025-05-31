// Kämpfer Model
import {defineStore} from "pinia";

export type Fighter = {
    id: number;
    name: string;
    level: number;
    health: number;
    attack: number;
    defense: number;
    speed: number;
    experience: number;
    maxExperience: number;
    money: number;
    skills: string[];
    isActive: boolean; // Indicates if the fighter is currently active in the team
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

export function GenerateFighter(): Fighter {
    return {
        id: Date.now(),
        name: "Test Fighter",
        level: 1,
        health: 100,
        attack: 10,
        defense: 5,
        speed: 5,
        experience: 0,
        maxExperience: 100,
        money: 0,
        skills: [],
        isActive: false,
    }
}
