import {defineStore} from "pinia";
import type {Fighter} from '@/models/Fighters.ts';

export const Player = defineStore('player', {
    state: () => ({
        name: '',
        money: 0,
        followers: 0,
        fighters: [] as Fighter[],
    }),
    persist: true, // Enable persistence
    getters: {
        getName: (state) => state.name,
        getMoney: (state) => state.money,
        getFollowers: (state) => state.followers,
        getFighters: (state) => state.fighters,
    },
    actions: {
        addFighter(fighter: Fighter) {
            this.fighters.push(fighter);
        },
        removeFighter(fighterId: string) {
            this.fighters = this.fighters.filter(fighter => fighter.id.toString() !== fighterId);
        },
        setName(name: string) {
            this.name = name;
        },
    }
})
