import { defineStore } from "pinia";

export const Player = defineStore('player', {
    state: () => ({
        name: '',
        money: 0,
        followers: 0,
    }),
    persist: true, // Enable persistence
    getters: {
        getName: (state) => state.name,
        getMoney: (state) => state.money,
        getFollowers: (state) => state.followers,
    },
    actions: {
        setName(name: string) {
            this.name = name;
        },
    }
})
