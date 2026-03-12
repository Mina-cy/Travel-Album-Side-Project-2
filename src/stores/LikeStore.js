import { defineStore } from 'pinia'

export const useLikeStore = defineStore('like', {
  state: () => ({
    // 這裡記錄所有按過讚的照片 ID
    likedIds: JSON.parse(localStorage.getItem('user_likes') || '[]')
  }),
  actions: {
    toggleLike(id) {
      const index = this.likedIds.indexOf(id)
      if (index === -1) {
        this.likedIds.push(id)
      } else {
        this.likedIds.splice(index, 1)
      }
      // 順便存入 LocalStorage，下次開網頁還在
      localStorage.setItem('user_likes', JSON.stringify(this.likedIds))
    }
  }
})
