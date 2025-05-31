import { defineStore } from "pinia";

export const Player = defineStore('player', {
    state: () => ({
        name: '',
        money: 0,
    }),
    persist: true, // Enable persistence
    getters: {
        getName: (state) => state.name,
        getMoney: (state) => state.money,
    },
    actions: {
        setName(name: string) {
            this.name = name;
        },
    }
})
