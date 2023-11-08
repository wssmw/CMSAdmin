class LocalCache {
  setCache(key, value) {
    if (!value) {
      throw new Error('value error:value必须有值')
    } else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  getCache(key) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key) {
    window.localStorage.removeItem(key)
  }
  clearCache(key) {
    window.localStorage.clear()
  }
}
export default new LocalCache()
