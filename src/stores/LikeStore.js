import { defineStore } from 'pinia'

export const useLikeStore = defineStore('like', {
  state: () => ({
    //key值叫做user_likes，預設為空陣列，從 LocalStorage 讀取並解析成陣列
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
      // 存入 LocalStorage，轉換成字串
      localStorage.setItem('user_likes', JSON.stringify(this.likedIds))
    }
  }
})
