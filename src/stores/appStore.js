import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'AppStore',
  state: () => ({
    layout : 'blank'
  }),
  getters: {
    getLayout: (state) => state.layout + "-layout"
  },
  actions: {
    async setLayout(layout) {
      this.layout = layout
    }
  }
})
