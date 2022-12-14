import { defineStore } from 'pinia'
import apolloClient from "../apolloClient";
import gql from "graphql-tag";


export const useCounterStore = defineStore({
  id: 'countStore',
  state: () => (
    { count: 0, operation: null }
  ),
  getters: {
    lastOperation: (state) => state.operation
  },
  actions: {
    add() {
      this.count++;
      this.operation = 'add';
    },
    remove() {
      this.count--;
      this.operation = 'remove';
    },
    random() {
      this.count = Math.floor(Math.random() * 101);
      this.operation = 'random';
    }
  }
})
